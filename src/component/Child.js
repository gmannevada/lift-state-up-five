import React from 'react'

function Child({isLoggedOn, setIsLoggedOn}) {

  const handleButtonClick = (event) => {
    event.preventDefault();
    console.log('Button Clicked');
    setIsLoggedOn(true);
  }

  return (
    <div>
      <form>
        <div>User Name: &nbsp;<input type="text" placeholder="Enter your name" /></div>
        <div>Password:  &nbsp;<input type="password" placeholder="Enter your password" /></div>
        <button type="submit" onClick={handleButtonClick}   >Login</button>
      </form>
    </div>
  )
}

export default Child
