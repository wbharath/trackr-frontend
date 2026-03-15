import { authHeader } from '../../../utils/authHeader'
import customFetch from '../../../utils/axios'
import { clearAllJobsState, clearFilters } from '../alljobs/allJobsSlice'
import { clearValues } from '../jobs/jobSlice'
import { logoutUser } from './userSlice'

export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user)
    return resp.data
  } catch (error) {
    // toast.error(error.response.data.msg)
    // console.log(error.response)
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}

export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user)
    return resp.data
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}

export const updateUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.patch(url, user, authHeader(thunkAPI))
    return resp.data
  } catch (error) {
    // console.log(error.response)
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}

export const clearStoreThunk = async (message, thunkAPI) => {
  try {
    thunkAPI.dispatch(logoutUser(message))

    thunkAPI.dispatch(clearAllJobsState())
    thunkAPI.dispatch(clearValues())
    return Promise.resolve()
  } catch (error) {
    return Promise.reject()
  }
}
