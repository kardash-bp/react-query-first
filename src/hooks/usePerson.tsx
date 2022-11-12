import axios from 'axios'
import { useQuery } from 'react-query'
import { App } from './useUsersData'

const fetchUser = async (id: string): Promise<App> => {
  return await axios.get(`http://localhost:4000/users/${id}`)
}
// const fetchUser: QueryFunction<App, QueryKey> = async ({
//   queryKey,
// }): Promise<App> => {
//   const id = queryKey[1]
//   return await axios.get(`http://localhost:4000/users/${id}`)
// }

export const usePerson = (id: string) => {
  return useQuery<App, Error>(['person', id], () => fetchUser(id))
}
