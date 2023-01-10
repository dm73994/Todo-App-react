import React from 'react'
import Layout from '../../layout'
import { useLocation, useParams } from 'react-router-dom'
import Tasks from '../Tasks/Tasks';
import { useList } from '../../Hooks/useList';

const ViewList = () => {
    const location = useLocation();
    const id = location.search.split('=').pop();
    const list = useList().getListById({id})[0]

  return (
    <Tasks listId={id} listName={list.title} />
  )
}

export default ViewList