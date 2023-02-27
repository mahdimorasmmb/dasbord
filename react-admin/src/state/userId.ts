import {createSlice} from '@reduxjs/toolkit'

export  interface ModeState {
    value:string
}

const initialState :ModeState = {
    value:"63701cc1f03239b7f700000e",
}

export const modeSlice = createSlice({
    name:"useId",
    initialState,
    reducers:{
        // setMode:(state) =>{
        //     state.value = state.value === 'light' ? 'dark':'light';
        // }
    }
})


// export const {setMode}  = modeSlice.actions

export default modeSlice.reducer