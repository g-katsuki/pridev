import React from 'react'
import { Calculate } from '../components/Calculate'

function Calc() {
  return (
    <div>
      <li>ここではフレームの計算を行う</li>
      <li>攻撃ファイターと攻撃名、ガードファイターを選択</li>
      <li>確定反撃のとれる技一覧を表示</li>
      <div className="alert alert-secondary text-center mt-5 mr-2 ml-2 mb-5">
        <h3>確定反撃を計算</h3>
        <Calculate />
      </div>
    </div>
  )
}

export default Calc
