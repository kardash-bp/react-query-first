import axios, { AxiosResponse } from 'axios'
import {
  useQuery,
  useQueryClient,
  useMutation,
  UseMutationResult,
} from 'react-query'
import { Updater } from 'react-query/types/core/utils'
import { User } from '../components/Users'
export interface App {
  data: User[] | User

  status: number
}

export const useUsersData = (key: string, cb: () => Promise<User[]>) => {
  const queryClient = useQueryClient()
  return useQuery<User[], Error>(key, cb, {
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
  const queryClient = useQueryClient()
  return useMutation<AxiosResponse<any, any>, Error, User, any>(addUserData, {
    // onSuccess: (data) => {
    //   //queryClient.invalidateQueries(['users'])
    //   queryClient.setQueriesData('users', (oldData: Updater<any, any>) => {
    //     return {
    //       ...oldData,
    //       data: [...oldData.data, data.data].reverse(),
    //     }
    //   })
    // },
    onMutate: async (newUser) => {
      await queryClient.cancelQueries('users')
      const prevUserData = queryClient.getQueryData('users')
      queryClient.setQueriesData('users', (oldData: Updater<any, any>) => {
        console.log(newUser)
        console.log(oldData)
        return {
          ...oldData,
          data: [...oldData.data, { ...newUser }].reverse(),
        }
      })
      return { prevUserData }
    },
    onError: (_error, _user, context: any) => {
      queryClient.setQueryData('users', context.prevUserData)
    },
    onSettled: () => {
      queryClient.invalidateQueries(['users'])
    },
  })
}
