import React, { FC, ReactElement } from "react"
import { ITodo } from "../../../../types/global"
interface IProps {
  todo: ITodo,
  toggleTodo: (id: number) => void,
  removeTodo: (id: number) => void
}
const TodoItem: FC<IProps> = ({
  todo,
  toggleTodo,
  removeTodo
}): ReactElement => {
  const {id, text, completed} = todo
  return (
    <div>
      <input type='checkbox' checked={completed} onChange={() => toggleTodo(id)}/>
      <span style={{ textDecoration: completed ? "line-throuth" : "none" }}>{text}</span>
      <button onClick={() => removeTodo(id)}>删除</button>
    </div>
  )
}

export default TodoItem
