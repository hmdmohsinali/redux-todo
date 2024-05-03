import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import { increment,decrement, reset } from "../features/counter/counterSlice";

const Counter = () => {

  const dispatch = useDispatch()

  const counter = useSelector(state=>state.counter.count)

  return (
    <>
    <div>{counter}</div>
    <button className='border bg-blue-500  p-2 rounded-lg' onClick={()=>dispatch(increment())}>Increment</button>
    <button className='border bg-blue-500 p-2 rounded-lg' onClick={()=>dispatch(decrement())}>Decrement</button>
    <button className='border bg-blue-500 p-2 rounded-lg' onClick={()=>dispatch(reset())}>Reset</button>
    </>
  )
}

export default Counter