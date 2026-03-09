import axios from 'axios'
import { clearStore } from '../src/features/user/userSlice'

const customFetch = axios.create({
  // baseURL: 'https://redux-toolkit-jobster-api-server.onrender.com/api/v1'
  baseURL: 'http://localhost:8080/api/v1/'
})

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(clearStore())
    return thunkAPI.rejectWithValue('Unauthorized!!Logging out...')
  }
  return thunkAPI.rejectWithValue(error.response.data.msg)
}

export default customFetch
