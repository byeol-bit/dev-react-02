import React from 'react'
import style from './Task.module.css'
import { Draggable } from 'react-beautiful-dnd';

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
    <Draggable draggableId={id} index={index}>
      {provided => (
        <div
          className={style.container}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className={style.title}>{taskName}</div>
          <div className={style.description}>{taskDescription}</div>
        </div>
      )}
    </Draggable>
  )
}

export default Task