import { createSlice } from "@reduxjs/toolkit"


const formSlice = createSlice({
  name: 'form',
  initialState: {
    data: [],
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    incrementByAmount: (state, action) => {
      state.data.push(action.payload)
    },
    editData: (state, item) => {
      const itemData = item.payload
      const id = itemData.id
      console.log("item id is", id)
      for (let index = 0; index < state.data.length; index++) {
        if(state.data[index].id === id) {
          state.data[index] = itemData
        }
      }
    },
    
    deleteData: (state, item) => {
      const itemData = item.payload
      const id = itemData.id
      console.log("item id is", id)
      for (let index = 0; index < state.data.length; index++) {
        if(state.data[index].id === id) {
          state.data.splice(index, 1)
        }
      } 
    }

  }
})

export const { increment, decrement, incrementByAmount, editData, deleteData } = formSlice.actions
const Reducer = formSlice.reducer
export default Reducer;