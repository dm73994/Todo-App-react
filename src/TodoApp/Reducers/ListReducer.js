const initialState = [];

export const ListReducer = ( state = initialState, action ) => {
    
    switch ( action.type ) {
        case 'Add':
            return [ action.payload, ...state ];

        case 'Remove':
            // payload cargado con id
            return state.filter( list => list.id !== action.payload );

        case 'Privacy':
            // payload cargado con id
            return state.map( list => {

                // payload cargado con id
                if ( list.id === action.payload ) {
                    console.log(list.title)
                    console.log(list.privacy)
                    return {
                        ...list,
                        privacy: !list.privacy
                    }
                } 

                return list;
            });

        case 'Toggle':
            return state.map( list => {

                // payload cargado con id
                if ( list.id === action.payload ) {
                    console.log(list.title)
                    console.log(list.privacy)
                    return {
                        ...list,
                        status: !list.status
                    }
                } 

                return list;
            });
    
        default:
            return state;
    }

}