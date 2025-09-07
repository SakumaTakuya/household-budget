import React from 'react'

const Summary = () => {
  return (
    <div className="summary-all">
      <span>
        <p>収入</p>
        <p className="income">￥</p>
      </span>
      <span>
        <p>支出</p>
        <p className="expense">￥</p>
      </span>
      <span>
        <p>残高</p>
        <p className="balance">￥</p>
      </span>
    </div>
  )
}

export default Summary