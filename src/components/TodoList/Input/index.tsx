import React, { FC, ReactElement, useRef } from "react";
import { ITodo } from "../../../types/global";
interface IProps {
  addTodo: (todo: ITodo) => void,
  todoList: ITodo[]
}
const TodoInput: FC<IProps> = ({
  addTodo,
  todoList
}): ReactElement => {
  const refInput = useRef<HTMLInputElement>(null)
  const addItem = (): void => {
    const text: string = refInput.current!.value.trim()
    if (text.length) {
      addTodo({
        id: new Date().getTime(),
        text: text,
        completed: false
      })
    }
    refInput.current!.value = ''
  }
  return (
    <div>
      <input ref={refInput} type="text" placeholder="请输入待办事项"></input>
      <button onClick={ addItem }>添加</button>
    </div>
  )
}

export default TodoInput
