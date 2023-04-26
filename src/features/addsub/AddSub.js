//We can initially use the React Functional Component 

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, selectCount } from './AddSubSlice'

export default function AddSub() {
    // You can Define through it from Hooks Area Defination
    let state = useSelector(selectCount)
    let dispatch = useDispatch()
    return (
        <>
            { console.log(state)}
            <h1>{state}</h1>
            <button onClick={()=>{ dispatch(increment()) }}>+</button>
            <button onClick={()=>{ dispatch(reset()) }}>Reset</button>
            <button onClick={()=>{ dispatch(decrement()) }}>-</button>
        </>
    )
}
