import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SideBarOption from './SideBarOption';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import UserProvider from '../../auth/user/UserProvider';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { UserContext } from '../../auth/user/UserContext';

const drawerWidth = 240;

const SideBar = ({ children }) => {
    const window = undefined;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const user = React.useContext(UserContext)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const options = [
        {
            title: 'my lists',
            icon: <FormatListBulletedRoundedIcon />,
            to: '/lists'
        },
        user.user != undefined && 
        {
            title: 'categories',
            icon: <CategoryRoundedIcon />,
            to: '/categories'
        }
    ];

    const authOptions = [
        user.user != undefined ? 
        {
            title: 'log out',
            icon: <ExitToAppRoundedIcon />,
            to: '/auth/logout',
            action: user.logout
        }
        :
        {
            title: 'Create account',
            icon: <VpnKeyIcon />,
            to: '/auth/register'
        }

    ];

    const drawer = (
        <>
            <Toolbar />
            <Divider />
            <List>
                {
                    options.map((option) => (
                        <SideBarOption key={option.title} option={option} />
                    ))
                }
            </List>
            <Divider />
            <List>
                {
                    authOptions.map((option) => (
                        <SideBarOption key={option.title} option={option} />
                    ))
                }
            </List>
        </>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            
            {children}

        </Box>
    );
}

export default SideBar