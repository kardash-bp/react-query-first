import axios from 'axios'
import { useQuery, useQueries, UseQueryOptions } from 'react-query'
import { App } from '../hooks/useUsersData'
import { User } from './Users'

const fetchUsers = async (userId: string): Promise<App> => {
  return await axios.get(`http://localhost:4000/users/${userId}`)
}
// const fetchAdmins = async (adminId): Promise<App> => {
//   return await axios.get(`http://localhost:4000/admins/${adminId}`)
// }
const ParallelQueries = ({ userIds }: { userIds: string[] }) => {
  // const { data: users } = useQuery('users', fetchUsers)
  // const { data: admins } = useQuery('admins', fetchAdmins)
  // console.log(users, admins)
  const queryResults = useQueries(
    userIds.map((id) => {
      return { queryKey: ['users', id], queryFn: () => fetchUsers(id) }
    })
  )
  console.log(queryResults)
  return <div>{JSON.stringify(queryResults)}</div>
}

export default ParallelQueries
