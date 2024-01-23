import { configureStore } from '@reduxjs/toolkit'
import Reducer from './FormSlice'

export default configureStore({
  reducer: {
     form: Reducer
  }
})