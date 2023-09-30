import React from 'react'

function Header({number, increment}) {
  console.log('re-rendered');
  return (
    <div>Header {number}
    <button onClick={increment}>Click</button>

    </div>
  )
}

export default React.memo(Header)