import React from 'react'
import { useParams } from 'react-router-dom'
import { usePerson } from '../hooks/usePerson'
import { User } from './Users'

const Person = () => {
  const { id } = useParams()
  const { isLoading, data, isError, error } = usePerson(id!)
  console.log(data?.data as User)
  if (isLoading) return <h2>Loading...</h2>
  if (isError) return <h2>{error.message}.</h2>
  const { first_name, email } = data?.data as User
  return (
    <div className='container big-margin-center'>
      <h2>
        {first_name} - {email}
      </h2>
    </div>
  )
}

export default Person
