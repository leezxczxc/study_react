import React, { useState, useEffect, ChangeEvent } from 'react'
import { InfoState } from 'models/InfoModel'

const Info = ({}, state: InfoState) => {
  const [name, setName] = useState('')
  const [nickName, setNickName] = useState('')

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }
  const onChangeNickName = (e: ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  }

  useEffect( () => {
    console.log('렌더링 완료')
    console.log({
      name, nickName
    })
    return () => {
      console.log('clearnUP', name)
    }
  }, [name])

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickName} onChange={onChangeNickName} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
        <b>별명:</b> {nickName}
        </div>
      </div>
    </div>
  )
}
export default Info
