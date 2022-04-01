import React, { FC, ReactElement, useCallback, useEffect, useReducer } from 'react'
import TodoInput from './Input'
import TodoBox from './Box'
import { ActionType, IState, ITodo } from '../../types/global'
import { todoReducer } from '../../reducers'
const initialState: IState = {
  todoList: []
}
const TodoList: FC = (): ReactElement => {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  useEffect(() => {
    console.log(state.todoList)
  }, [state.todoList])
  const addTodo  = useCallback((todo: ITodo) => {
     dispatch({
       type: ActionType.ADD,
       payload: todo
     })
  }, [])
  const toggleTodo = useCallback((id: number): void => {
    dispatch({
      type: ActionType.TOGGLE,
       payload: id
    })
  }, [])

  const removeTodo = useCallback((id: number): void => {
    dispatch({
      type: ActionType.REMOVE,
       payload: id
    })
  }, [])

  return (
    <div>
      <TodoInput addTodo={ addTodo } todoList={state.todoList}/>
      <TodoBox todoList={state.todoList} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
    </div>
  )
}
export default TodoList
