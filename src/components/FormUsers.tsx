import { FormEvent, useState } from 'react'
import { useAddUser } from '../hooks/useUsersData'
import { User } from './Users'

const FormUsers = () => {
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')

  const { mutate, isLoading, isError, error } = useAddUser()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email || !first || !last) return
    const user = {
      id: new Date().getTime().toString(),
      first_name: first,
      last_name: last,
      email,
    }
    mutate(user)
  }
  if (isLoading) {
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
    <form className='container'>
      <input
        type='text'
        placeholder='first name'
        name='first'
        value={first}
        onChange={(e) => setFirst(e.target.value)}
      />
      <input
        type='text'
        placeholder='last name'
        name='first'
        value={last}
        onChange={(e) => setLast(e.target.value)}
      />
      <input
        type='email'
        placeholder='email'
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type='submit' onClick={handleSubmit} value='Add User' />
    </form>
  )
}

export default FormUsers
