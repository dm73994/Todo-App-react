import { useEffect, useReducer } from 'react';
import { ListReducer } from '../Reducers/ListReducer';


  /**
    FUNCIONALIDAD PARA USUARIOS NO IDENTIFICADOS
    Se usará el localstorage para guardar informacion de este tipo de usuarios 
  */

const init = () => {
    return JSON.parse(localStorage.getItem('lists')) || [];
}

export const useList = () => {
  
    const [ lists, dispatch ] = useReducer( ListReducer, [], init );

    useEffect(() => {
      localStorage.setItem('lists', JSON.stringify( lists ) );
    }, [lists])
    

    const handleNewList = ( list ) => {
        const action = {
            type: 'Add',
            payload: list
        }

        dispatch( action );
    }

    const handleDeleteList = ( id ) => {
        dispatch({
            type: 'Remove',
            payload: id
        });
    }

    const handlePrivacyList = ( id ) => {
        dispatch({
            type: 'Privacy',
            payload: id
        });
    }

    const handleToggleList = ( id ) => {
        dispatch({
            type: 'Toggle',
            payload: id
        });
    }

    const pendingLists = () => lists.filter(list => !list.status)
    
    const doneLists = () => lists.filter(list => list.status)

    const getListById = ({id}) => lists.filter( f => f.id == id)

    return {
        lists,

        listCount: lists.length,
        pendingListCount: lists.filter(list=> !list.status).length,

        handleNewList,
        handleDeleteList,
        handleToggleList,
        pendingLists,
        doneLists,
        getListById,
        handlePrivacyList
    }

}