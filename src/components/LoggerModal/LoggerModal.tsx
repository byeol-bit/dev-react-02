import React from 'react'
import { useTypedSelector } from '../../hooks/redux'
import { FiX } from 'react-icons/fi'
import LogItem from './LogItem/LogItem'
import style from './LoggerModal.module.css'

type TLoggerModalProps = {
  setIsLoggerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const LoggerModal = ({
  setIsLoggerOpen
}: TLoggerModalProps) => {
  const logs = useTypedSelector(state => state.logger.logArray);

  return (
    <div className={style.wrapper}>
      <div className={style.modalWindow}>
        <div className={style.header}>
          <div className={style.title}>활동 기록</div>
          <FiX className={style.closeButton} />
        </div>
        <div className={style.body}>
          {
            logs.map((log) => (
              <LogItem key={log.logId} logItem={log} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default LoggerModal