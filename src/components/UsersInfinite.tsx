import { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'
import { useInfiniteQuery } from 'react-query'
import { App } from '../hooks/useUsersData'

interface InfiniteProps {}

const fetchUsers = async ({
  pageParam = 1,
}): Promise<AxiosResponse<User[]>> => {
  return await axios.get(
    `http://localhost:4000/users?_limit=3&_page=${pageParam}`
  )
}

export type User = {
  id: string
  first_name: string
  last_name: string
  email: string
  gender: string
}
const UsersInfinite = () => {
  const {
    isLoading,
    isFetching,
    data,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<any, Error>(['users'], fetchUsers, {
    keepPreviousData: true,
    getNextPageParam: (lastPage, pages) => {
      if (pages.length < 5) {
        return pages.length + 1
      } else {
        return false
      }
    },
  })
  //console.log(data?.pageParams[0])
  // console.log(data?.pages.slice(-1))

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }
  const users = data?.pages?.slice(-1)[0].data as User[]
  return (
    <div className='container big-margin-center'>
      {isFetching && <h2>Loading...</h2>}
      <h2>Infinite users</h2>
      {users?.map((d) => (
        <div key={d.id}>{d.email}</div>
      ))}
      <hr />
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
          ? 'Load More'
          : 'Nothing more to load'}
      </button>
    </div>
  )
}

export default UsersInfinite
