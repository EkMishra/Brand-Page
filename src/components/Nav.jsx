import React from "react";


export default function Nav (){
  return (
    <>
      <nav>
        <div className="logo">
          <img src= "/brand_logo.png"/>
        </div>
        <ul>
          <li href="#">MENU</li>
          <li href="#">LOCATION</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT</li>
        </ul>

        <button>Login</button>
      </nav>
    </>
  )
}