import Link from 'next/link'
import React from 'react'

interface User{
  id: number;
  name: string;
}
const  UsersPage = async () => {
  // fetching data
  const res= await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[]=  await res.json();

  return (
    <div>
      User page
      <Link href="/users/new">new user pages</Link>
      <h1 className='text-3xl '>data fetch list</h1>
      <ul>
        {users.map(user => <li key={user.id}>key={user.id}: {user.name}</li>)}
      </ul>

    </div>
  )
}
export default  UsersPage