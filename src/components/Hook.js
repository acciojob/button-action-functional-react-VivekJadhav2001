import React from 'react'
import { useState } from 'react'

function Hook() {
    const [visible, setVisible] = useState(false)
  return (
    <div>
        <button id="click" onClick={()=>{
            setVisible((prev)=>!prev)
        }}>Click Me</button>
        {visible? <p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>:""}
    </div>
  )
}

export default Hook;