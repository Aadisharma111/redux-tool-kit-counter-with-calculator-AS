import { createSlice } from "@reduxjs/toolkit";

let initialState={
    value:111
} 
export const addSubSlice = createSlice({
    //we can take as A Point consider value
    // *PV - Can be yours AN  Action Names Imports --
    name:'addsub',
    "initialState":initialState,
    reducers:{
        increment:(state)=>{
            console.log('inside increment method');
            console.log(state.value);
            state.value = state.value + 1 // we can pass to the Direct Muatation -- +1
            // Same to the #STATE.VALUE>>
        },
        decrement:(state)=>{
            console.log('inside decrement method');
            console.log(state);
            state.value = state.value - 1  // we can pass again to Direct Mutation Through --x2
        },
        reset:(state)=>{
            console.log('inside reset method');
            console.log(state);
            state.value = 111
          

        },
    }
});


export const { increment, decrement, reset } = addSubSlice.actions;

export const selectCount = (state) => {
    console.log(state);
    return state.addSub.value;
}

export default addSubSlice.reducer;