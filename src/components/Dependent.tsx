import axios from 'axios'
import { useQuery, useQueries, UseQueryOptions } from 'react-query'
import { App } from '../hooks/useUsersData'
import { User } from './Users'

const fetchPostsByUser = async (email: string): Promise<App> => {
  const res: App = await axios.get(`http://localhost:4000/users/${email}`)

  const id = (res.data as User).id
  const posts = await axios.get(`http://localhost:4000/posts/${id}`)
  console.log(posts)
  return posts
}
// const fetchPosts = async (userId: string): Promise<App> => {
//   return await axios.get(`http://localhost:4000/posts/${userId}`)
// }
const Dependent = ({ email }: { email: string }) => {
  const { data: posts } = useQuery(['posts', email], () =>
    fetchPostsByUser(email)
  )

  // if (isLoading || isFetching) return <h2>Loading...</h2>
  // if (isError) return <h2>{error.message}</h2>

  return <div>Dependent</div>
}

export default Dependent
