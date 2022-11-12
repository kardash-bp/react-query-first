import { useState, useEffect } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import { App } from '../hooks/useUsersData'

const fetchUsers = async (page: number) => {
  return await axios.get(`http://localhost:4000/users?_limit=3&_page=${page}`)
}

export type User = {
  id: string
  first_name: string
  last_name: string
  email: string
}
const Users = () => {
  const [page, setPage] = useState(1)
  const { isLoading, isFetching, data, isError, error } = useQuery<App, Error>(
    ['users', page],
    () => fetchUsers(page),
    { keepPreviousData: true }
  )
  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }
  const users = data?.data as User[]
  console.log(users.length)
  return (
    <div className='container big-margin-center'>
      {isFetching && <h2>Loading...</h2>}
      <h2>Paginated Users / page: {page}</h2>
      {users.map((user) => {
        return <p key={user.first_name}>{user.email}</p>
      })}
      <button onClick={() => setPage((page) => page - 1)} disabled={page === 1}>
        prev
      </button>
      {'   '}
      <button onClick={() => setPage((page) => page + 1)} disabled={page === 5}>
        Next
      </button>
    </div>
  )
}

export default Users
