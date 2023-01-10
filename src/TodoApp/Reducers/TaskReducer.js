const initialState = [];

export const TaskReducer = ( state = initialState, action ) => {
    
    switch ( action.type ) {
        case 'Add':
            return [ action.payload, ...state ];

        case 'Remove':
            // payload cargado con id
            return state.filter( todo => todo.id !== action.payload );

        case 'Toggle':
            return state.map( todo => {

                // payload cargado con id
                if ( todo.id === action.payload ) {
                    return {
                        ...todo,
                        status: !todo.status
                    }
                } 

                return todo;
            });
    
        default:
            return state;
    }

}