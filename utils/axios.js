import axios from 'axios'
import { clearStore } from '../src/features/user/userSlice'

const customFetch = axios.create({
  baseURL: 'https://trackr-backend-6c57.onrender.com/api/v1'
})

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(clearStore())
    return thunkAPI.rejectWithValue('Unauthorized!!Logging out...')
  }
  return thunkAPI.rejectWithValue(error.response.data.msg)
}

export default customFetch
