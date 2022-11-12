import axios, { AxiosResponse } from 'axios'
import {
  useQuery,
  useQueryClient,
  useMutation,
  UseMutationResult,
} from 'react-query'
import { User } from '../components/Users'
export interface App {
  data: User[] | User

  status: number
}

export const useUsersData = (key: string, cb: () => Promise<App>) => {
  const queryClient = useQueryClient()
  return useQuery<App, Error>(key, cb, {
    enabled: false,
    onSuccess: () => {
      queryClient.invalidateQueries(['users'])
    },
    onError: (error: Error) => {
      console.log('Error cb function', error)
    },
    // select: (data): string[] => {
    //   const usersEmails = data.data.map((d: User) => d.email)
    //   return usersEmails
    // },
  })
}
const addUserData = async (user: User): Promise<AxiosResponse> => {
  return await axios.post('http://localhost:4000/users', user)
}
export const useAddUser = () => {
  return useMutation<AxiosResponse<any, any>, Error, User, unknown>(addUserData)
}
