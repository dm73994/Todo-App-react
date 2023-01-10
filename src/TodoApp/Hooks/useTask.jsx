import { useEffect, useReducer } from 'react';
import { TaskReducer } from '../Reducers/TaskReducer';


  /**
    FUNCIONALIDAD PARA USUARIOS NO IDENTIFICADOS
    Se usará el localstorage para guardar informacion de este tipo de usuarios 
  */

const init = () => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

export const useTask = ({ listId }) => {
  
    const [ tasks, dispatch ] = useReducer( TaskReducer, [], init );

    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify( tasks ) );
    }, [tasks])
    

    const handleNewTask = ( task ) => {

        const action = {
            type: 'Add',
            payload: task
        }

        dispatch( action );
    }

    const handleDeleteTask = ( id ) => {
        dispatch({
            type: 'Remove',
            payload: id
        });
    }

    const handleToggleTask = ( id ) => {
        dispatch({
            type: 'Toggle',
            payload: id
        });
    }


    const taskByList = () => tasks.filter( todo => Number(todo.listId) == Number(listId)) 
    const pendingTasksByList = () => tasks.filter(todo =>!todo.status && Number(todo.listId) == Number(listId) )
    
    const doneTasksByList = () => tasks.filter(todo => todo.status && Number(todo.listId) == Number(listId))

    const pendingTasks = () => tasks.filter(todo => !todo.status)
    
    const doneTasks = () => tasks.filter(todo => todo.status)

    return {
        tasks,

        taskCount: tasks.length,
        pendingTaksCount: tasks.filter(todo=> !todo.done).length,

        handleNewTask,
        handleDeleteTask,
        handleToggleTask,
        pendingTasks,
        doneTasks,
        taskByList,
        pendingTasksByList,
        doneTasksByList
    }

}