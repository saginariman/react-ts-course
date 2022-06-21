import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card, { CardVariant } from './components/Card'
import EventsExample from './components/EventsExample'
import List from './components/List'
import TodoItem from './components/TodoItem'
import UserItem from './components/UserItem'
import { ITodo, IUser } from './types/types';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserPage from './components/UserPage'
import TodosPage from './components/TodosPage'
import { Link } from 'react-router-dom'
import UserItemPage from './components/UserItemPage'
import TodoItemPage from './components/TodoItemPage'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Link to="/users">Пользователи</Link>
          <Link to="/todos">Список дел</Link>
        </div>
        <Routes>
          <Route path={'/users'} element={<UserPage/>}/>
          <Route path={'/todos'} element={<TodosPage/>}/>
          <Route path={'/users/:id'} element={<UserItemPage/>}/>
          <Route path={'/todos/:id'} element={<TodoItemPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
