import React, { useEffect, useState, type ChangeEvent } from 'react'
import { FiX } from 'react-icons/fi'
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux'
import { deleteTask, setModalActive, updateTask } from '../../store/slices/boardSlice';
import { addLog } from '../../store/slices/loggerSlice';
import { v4 } from 'uuid';
import style from './EditModal.module.css'

const EditModal = () => {
  const dispatch = useTypedDispatch();
  const editingState = useTypedSelector(state => state.modal);
  const [data, setData] = useState(editingState)

  useEffect(() => {
    console.log(data)
  }, [data])

  const handleCloseButton = () => {
    dispatch(setModalActive(false));
  }
  const handleDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      task: {
        ...data.task,
        [e.target.name]: e.target.value
      }
    })
  }
  const handleUpdate = () => {
    console.log({
      boardId: editingState.boardId,
      listId: editingState.listId,
      task: data.task
    })
    dispatch(
      updateTask({
        boardId: editingState.boardId,
        listId: editingState.listId,
        task: data.task
      })
    );

    dispatch(
      addLog({
        logId: v4(),
        logMessage: `일 수정하기 ${editingState.task.taskName}`,
        logAuthor: 'User',
        logTimestamp: String(Date.now())
      })
    );

    dispatch(setModalActive(false));
  }
  const handleDelete = () => {
    dispatch(
      deleteTask({
        boardId: editingState.boardId,
        listId: editingState.listId,
        taskId: editingState.task.taskId
      })
    );

    dispatch(
      addLog({
        logId: v4(),
        logMessage: `일 삭제하기 ${editingState.task.taskName}`,
        logAuthor: 'User',
        logTimestamp: String(Date.now())
      })
    );

    dispatch(setModalActive(false));
  }

  return (
    <div className={style.wrapper}>
      <div className={style.modalWindow}>
        <div className={style.header}>
          <div className={style.title}>{editingState.task.taskName}</div>
          <FiX className={style.closeButton} onClick={handleCloseButton} />
        </div>
        <div className={style.title}>제목</div>
        <input
          className={style.input}
          name='taskName'
          type="text"
          value={data.task.taskName}
          onChange={handleDataChange}
        />
        <div className={style.title}>설명</div>
        <input
          className={style.input}
          name='taskDescription'
          type="text"
          value={data.task.taskDescription}
          onChange={handleDataChange}
        />
        <div className={style.title}>생성한 사람</div>
        <input
          className={style.input}
          name='taskOwner'
          type="text"
          value={data.task.taskOwner}
          onChange={handleDataChange}
        />
        <div className={style.buttons}>
          <button
            className={style.updateButton}
            onClick={handleUpdate}>
            일 수정하기
          </button>
          <button
            className={style.deleteButton}
            onClick={handleDelete}>
            일 삭제하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditModal