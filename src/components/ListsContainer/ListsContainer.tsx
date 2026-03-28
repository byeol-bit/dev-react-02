import React from 'react'
import type { IList } from '../../types'
import List from '../List/List'
import style from './ListsContainer.module.css'
import ActionButton from '../ActionButton/ActionButton'

const ListsContainer = ({
  lists,
  boardId,
}: {
  lists: IList[],
  boardId: string,
}) => {
  return (
    <div className={style.listsContainer}>
      {
        lists.map((list, index) => (
          <List
            key={list.listId}
            list={list}
            boardId={boardId}
          />
        ))
      }
      <ActionButton
        boardId={boardId}
        listId={""}
        list
      />
    </div>
  )
}

export default ListsContainer