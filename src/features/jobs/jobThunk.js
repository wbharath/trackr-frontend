import { authHeader } from '../../../utils/authHeader'
import customFetch from '../../../utils/axios'
import { getAllJobs, hideLoading, showLoading } from '../alljobs/allJobsSlice'
import { logoutUser } from '../user/userSlice'
import { clearValues } from './jobslice'

export const createJobThunk = async (job, thunkAPI) => {
  console.log('AUTH HEADER:', authHeader(thunkAPI))
  console.log('JOB PAYLOAD:', job)
  try {
    const resp = await customFetch.post('/jobs', job, authHeader(thunkAPI))
    //   console.log(resp.data)
    thunkAPI.dispatch(clearValues())
    return resp.data
  } catch (error) {
    console.log('ERROR RESPONSE:', error.response?.data) // 👈 add this
    console.log('ERROR STATUS:', error.response?.status)
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}

export const deleteJobThunk = async (jobId, thunkAPI) => {
  thunkAPI.dispatch(showLoading())
  console.log(jobId)
  try {
    const resp = await customFetch.delete(
      `/jobs/${jobId}`,
      authHeader(thunkAPI)
    )
    thunkAPI.dispatch(getAllJobs())
    return resp.data.msg
  } catch (error) {
    thunkAPI.dispatch(hideLoading())
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}
export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
  try {
    const resp = await customFetch.patch(
      `jobs/${jobId}`,
      job,
      authHeader(thunkAPI)
    )
    thunkAPI.dispatch(clearValues())
    return resp.data
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}
