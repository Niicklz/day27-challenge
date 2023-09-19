import React from 'react'
import "./Button.css"

export const Button = ({variant = "test", btnText="hola", printToast}) => {
  return (
    <button onClick={()=> printToast(btnText)} className={`btn btn-${variant}`}>{btnText}</button>
  )
}
