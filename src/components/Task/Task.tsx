import React from 'react'
import style from './Task.module.css'

type TTaskProps = {
  taskName: string;
  taskDescription: string;
  boardId: string;
  id: string;
  index: number;
}

const Task = ({
  taskName,
  taskDescription,
  boardId,
  id,
  index,
}: TTaskProps) => {
  return (
    <div className={style.container}>
      <div className={style.title}>{taskName}</div>
      <div className={style.description}>{taskDescription}</div>
    </div>
  )
}

export default Task