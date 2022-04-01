import { stat } from "fs";
import { ActionType, IAction, IState, ITodo } from "./types/global";

function todoReducer(state: IState, action: IAction): IState {
  const { type, payload }  = action
  switch (type) {
    case ActionType.ADD:
      return {
        ...state,
        todoList: [...state.todoList, payload as ITodo]
      }
    case ActionType.REMOVE:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id != payload)
      }
    case ActionType.TOGGLE:
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          return todo.id == payload ? {
            ...todo,
            completed: !todo.completed
          } : {
            ...todo
          }
        })
      }
    default:
      return state
  }
}

export {
  todoReducer
}
