import { useDispatch, useSelector } from 'react-redux'
import Wrapper from '../assets/wrappers/JobsContainer'
import Job from './Job'
import Loading from './Loading'
import { useEffect } from 'react'
import { getAllJobs } from '../features/alljobs/allJobsSlice'
import PageBtnContainer from './PageBtnContainer'
const JobsContainer = () => {
  const {
    jobs,
    isLoading,
    numOfPages,
    totalJobs,
    page,
    search,
    searchType,
    searchStatus,
    sort
  } = useSelector((store) => store.allJobs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllJobs())
  }, [page, search, searchType, searchStatus, sort])

  if (isLoading) {
    return <Loading center />
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>..No jobs to display</h2>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} job {jobs.length > 1 && 's'}
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          //   console.log(job)
          return <Job key={job.id} {...job} />
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  )
}

export default JobsContainer
