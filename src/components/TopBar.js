import { Link } from "react-router-dom";
import React from 'react'

function TopBar() {
  return (
    <div className='TopBar'>
      <Link to={`/`}>ホームに戻る</Link>
    </div>
  )
}

export default TopBar
