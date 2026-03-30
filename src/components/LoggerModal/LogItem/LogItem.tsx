import React, { useEffect, useState } from 'react'
import type { ILogItem } from '../../../types'
import { BsFillPersonFill } from 'react-icons/bs'
import style from './LogItem.module.css'

type TLogItemProps = {
  logItem: ILogItem
}

const LogItem = ({
  logItem
}: TLogItemProps) => {
  const [showOffsetTime, setShowOffsetTime] = useState('');
  useEffect(() => {
    const timeOffset = new Date(Date.now() - Number(logItem.logTimestamp))

    setShowOffsetTime(`
  ${timeOffset.getMinutes() > 0 ? `${timeOffset.getMinutes()}m` : ""}
  ${timeOffset.getSeconds() > 0 ? `${timeOffset.getSeconds()}s ago` : ""}
  `)
  }, [])



  return (
    <div className={style.logItemWrap}>
      <div className={style.author}>
        <BsFillPersonFill />
        {logItem.logAuthor}
      </div>
      <div className={style.message}>{logItem.logMessage}</div>
      <div className={style.date}>{showOffsetTime}</div>
    </div>
  )
}

export default LogItem