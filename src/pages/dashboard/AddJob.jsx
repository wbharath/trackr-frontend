import { useDispatch, useSelector } from 'react-redux'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { FormRow } from '../../components'
import { useEffect } from 'react'
import FormRowSelect from '../../components/FormRowSelect'
import {
  clearValues,
  createJob,
  editJob,
  handleChange
} from '../../features/jobs/jobSlice'
import { toast } from 'react-toastify'

const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId
  } = useSelector((store) => store.job)
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!position || !company || !jobLocation) {
      toast.error('Please fill out all fields')
      return
    }
    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: { position, company, jobLocation, jobType, status }
        })
      )
      return
    }
    dispatch(createJob({ position, company, jobLocation, jobType, status }))
  }

  const handleJobInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(handleChange({ name, value }))
  }

  const resetValues = () => {
    dispatch(clearValues())
  }

  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ name: 'jobLocation', value: user.location }))
    }
  }, [])

  return (
    <Wrapper>
      <p className="page-title">{isEditing ? 'Edit Job' : 'Add Job'}</p>
      <form onSubmit={handleSubmit}>
        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            name="jobLocation"
            labelText="job location"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />
          <FormRowSelect
            name="jobType"
            labelText="job type"
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={resetValues}
            >
              clear
            </button>
            <button
              type="submit"
              className="btn btn-block"
              disabled={isLoading}
            >
              {isLoading ? 'submitting...' : 'submit'}
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddJob
