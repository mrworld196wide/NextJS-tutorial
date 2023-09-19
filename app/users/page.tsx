import Link from 'next/link'
import React from 'react'

const  UsersPage = () => {
  return (
    <div>
      hello page
      <Link href="/users/new">new user pages</Link>
    </div>
  )
}

export default  UsersPage