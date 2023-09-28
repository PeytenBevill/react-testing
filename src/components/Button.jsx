import React from 'react'

const Button = () => {
  let arr = [7, 89, 56]

  const handleClick = (arr) => {
    return [...arr]
  }
  return (
    <button handleClick>Click me</button>
  )
}

export default Button