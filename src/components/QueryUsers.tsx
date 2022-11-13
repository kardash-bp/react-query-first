import axios from 'axios'
import { Link } from 'react-router-dom'
import { App, useUsersData } from '../hooks/useUsersData'
import { http } from '../utils/axios.utils'
import FormUsers from './FormUsers'
import { User } from './Users'

const fetchUsers = async (): Promise<User[]> => {
  return await http.get('http://localhost:4000/users?_sort=id&_order=desc')
}
const QueryUsers = () => {
  const { isLoading, data, isError, error, isFetching, refetch } = useUsersData(
    'users',
    fetchUsers
  )

  if (isLoading || isFetching) {
    return (
      <div className='container big-margin-center'>
        <h2>Loading...</h2>
      </div>
    )
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }
  return (
    <div className='container big-margin-center'>
      <FormUsers />
      <h2>Query Users / total: {data?.length}</h2>
      <button onClick={() => refetch()}>Get Users</button>
      {data?.map((d) => (
        <div key={d.first_name} className='container m-1'>
          <Link to={`/users/${d.id}`}>
            <span className='sm-font'>name:</span> {d.first_name} {d.last_name}
            &nbsp;&nbsp;&nbsp; <span className='sm-font'>email:</span> {d.email}{' '}
          </Link>
        </div>
      ))}
      {data?.map((user: User) => (
        <div className='container' key={user.email}>
          {user.email}
        </div>
      ))}
    </div>
  )
}

export default QueryUsers
