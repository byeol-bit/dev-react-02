import React, { useState } from 'react'
import { IoIosAdd } from 'react-icons/io';
import DropDownForm from './DropDownForm/DropDownForm';
import style from './ActionButton.module.css'

type TActionButtonProps = {
  boardId: string;
  listId: string;
  list?: boolean;
}

const ActionButton = ({
  boardId,
  listId,
  list
}: TActionButtonProps) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const buttonText = list ? "새로운 리스트 등록" : "새로운 일 등록";

  return isFormOpen ? (
    <DropDownForm
      setIsFormOpen={setIsFormOpen}
      list={list ? true : false}
      boardId={boardId}
      listId={listId}
    />
  ) : (
    <div
      className={list ? style.listButton : style.taskButton}
      onClick={() => setIsFormOpen(true)}
    >

      <IoIosAdd />
      {buttonText}
    </div>
  )
}

export default ActionButton