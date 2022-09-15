import React, { useState } from 'react'

import Frame from '../pages/Frame'
import { ApiFetch } from './ApiFetch'

export default function Select() {
  const [name, setName] = useState("")
  const doChange = (e)=> {
    setName(e.target.value)
  }
  
  return (
    <div>
      <b>ファイターを選択</b>
      <select onChange={doChange} className="form-control-lg  m-2"
      defaultValue="-1" >
        <option value="mario">マリオ</option>
        <option value="joker">ジョーカー</option>
        <option value="sample">サンプル1</option>
      </select>
      aa
      {name}
      bb
      <ApiFetch name={name} />
    </div>
  )
}
