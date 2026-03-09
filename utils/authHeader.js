export const authHeader = (thunkAPI) => {
  const token = thunkAPI.getState().user.user.token
  console.log('TOKEN BEING SENT:', token)
  return {
    headers: {
      authorization: `Bearer ${thunkAPI.getState().user.user.token}`
    }
  }
}
