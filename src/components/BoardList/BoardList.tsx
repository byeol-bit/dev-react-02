import React, { useState, useRef } from 'react'
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux'
import { FiLogIn, FiPlusCircle } from 'react-icons/fi'
import { GoSignOut } from 'react-icons/go'
import SideForm from './SideForm/SideForm'
import style from './BoardList.module.css'
import clsx from 'clsx'
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'
import { app } from '../../firebase'
import { removeUser, setUser } from '../../store/slices/userSlice'
import { useAuth } from '../../hooks/useAuth'

const BoardList = ({
  activeBoardId,
  setActiveBoardId
}: {
  activeBoardId: string,
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>
}) => {
  const dispatch = useTypedDispatch();

  const { boardArray } = useTypedSelector(state => state.boards)
  const [isFormOpen, setIsFormOpen] = useState(false)

  const { isAuth } = useAuth();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleClick = () => {
    setIsFormOpen(!isFormOpen);
  }
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then(userCredential => {
        console.log(userCredential)
        dispatch(
          setUser({
            email: userCredential.user.email,
            id: userCredential.user.uid,
          })
        )
      })
      .catch(err => {
        console.error(err);
      });
  }
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => { console.error(error); })
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
        {
          isAuth
            ?
            <GoSignOut
              onClick={handleSignOut}
              className={style.addButton}
            />
            :
            <FiLogIn
              className={style.addButton}
              onClick={handleLogin}
            />
        }



      </div>
    </div>
  )
}

export default BoardList