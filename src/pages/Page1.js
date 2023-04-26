import React from 'react'
import AddSub from '../features/addsub/AddSub'

export default function Page1() {
    return (
        <>
            <div style={{textAlign: 'center'}}>

                <div>IT IS PAGE 1</div>
                <AddSub/>
            </div>
            <div style={{textAlign: 'center'}}>
                <button>More than</button>
                <button>Less than</button>
            </div>
        </>
    )
}
