import React, {FC, ReactElement} from "react"
import { ITodo } from "../../../types/global"
import TodoItem from "./Item"
interface IProps {
  todoList: ITodo[],
  toggleTodo: (id: number) => void,
  removeTodo: (id: number) => void
}

const TodoBox: FC<IProps> = ({
  todoList,
  toggleTodo,
  removeTodo
}): ReactElement => {
  return (
    <div>
      {todoList.length > 0 && todoList.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
      ))}
    </div>
  )
}

export default TodoBox
