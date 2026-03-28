import React, { useState, useRef } from 'react'
import { useTypedSelector } from '../../hooks/redux'
import { FiPlusCircle } from 'react-icons/fi'
import SideForm from './SideForm/SideForm'
import style from './BoardList.module.css'
import clsx from 'clsx'

const BoardList = ({
  activeBoardId,
  setActiveBoardId
}: {
  activeBoardId: string,
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>
}) => {

  const { boardArray } = useTypedSelector(state => state.boards)
  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleClick = () => {
    setIsFormOpen(!isFormOpen);
  }

  return (
    <div className={style.container}>
      <div className={style.title}>
        게시판
      </div>
      {boardArray.map((board, index) => (
        <div
          key={board.boardId}
          className={clsx(
            {
              [style.boardItemActive]: boardArray.findIndex(b => b.boardId === activeBoardId) === index,
            },
            {
              [style.boardItem]: boardArray.findIndex(b => b.boardId === activeBoardId) !== index
            }
          )}
          onClick={() => setActiveBoardId(board.boardId)}
        >

          <div>
            {board.boardName}
          </div>
        </div>
      ))}
      <div className={style.addSection}>
        {
          isFormOpen ?
            <SideForm
              setIsFormOpen={setIsFormOpen}
            />
            :
            <FiPlusCircle className={style.addButton} onClick={handleClick} />
        }
      </div>
    </div>
  )
}

export default BoardList