import React, {useState} from 'react'
import Child from './Child'

function Parent() {
    const [isLoggedIn, setisLoggedIn] = useState(false)

   const handleChildClick = (event) => {
        setisLoggedIn(true);
    }

  return (
    <div>
      <h1>Parent Component</h1>
      <span>{isLoggedIn ? 'You are Logged In' : ''}</span>            
      {
            !isLoggedIn ?  <Child isLoggedOn={isLoggedIn} setIsLoggedOn={handleChildClick} />  : null
      }
    </div>
  )
}

export default Parent
