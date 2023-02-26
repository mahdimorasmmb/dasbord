import {createSlice} from '@reduxjs/toolkit'

export  interface ModeState {
    value:'dark'|'light'
}

const initialState :ModeState = {
    value:'dark'
}

export const modeSlice = createSlice({
    name:"mode",
    initialState,
    reducers:{
        setMode:(state) =>{
            state.value = state.value === 'light' ? 'dark':'light';
        }
    }
})


export const {setMode}  = modeSlice.actions

export default modeSlice.reducer