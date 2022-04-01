export interface ITodo {
  id: number,
  text: string,
  completed: boolean
}

export interface IState {
  todoList: ITodo[]
}
export interface IAction {
  type: ActionType,
  payload: ITodo | number
}

export enum ActionType {
  ADD = "add", REMOVE = 'remove', TOGGLE = 'toggle'
}
