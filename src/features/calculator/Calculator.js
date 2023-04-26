import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCount } from '../addsub/AddSubSlice'
import './index.css'


export default function Page2() {
    const data = useSelector(selectCount)
    console.log(data)
    const dispatch = useDispatch
    return (
        <div className="calculator card">
            <input type="text" className="calculator-screen z-depth-1" value={0} disabled />
            <div className="calculator-keys">

                <button type="button" onClick={() => { dispatch() }} className="operator btn btn-info" value="+">+</button>
                <button type="button" className="operator btn btn-info" value="-">-</button>
                <button type="button" className="operator btn btn-info" value="*">×</button>
                <button type="button" className="operator btn btn-info" value="/">÷</button>
                <button type="button" value={7} className="btn btn-light waves-effect">7</button>
                <button type="button" value={8} className="btn btn-light waves-effect">8</button>
                <button type="button" value={9} className="btn btn-light waves-effect">9</button>
                <button type="button" value={4} className="btn btn-light waves-effect">4</button>
                <button type="button" value={5} className="btn btn-light waves-effect">5</button>
                <button type="button" value={6} className="btn btn-light waves-effect">6</button>
                <button type="button" value={1} className="btn btn-light waves-effect">1</button>
                <button type="button" value={2} className="btn btn-light waves-effect">2</button>
                <button type="button" value={3} className="btn btn-light waves-effect">3</button>
                <button type="button" value={0} className="btn btn-light waves-effect">0</button>
                <button type="button" className="decimal function btn btn-secondary" value=".">.</button>
                <button type="button" className="all-clear function btn btn-danger btn-sm" value="all-clear">AC</button>
                <button type="button" className="equal-sign operator btn btn-default" value="=">=</button>
            </div>
        </div>
    )
}
