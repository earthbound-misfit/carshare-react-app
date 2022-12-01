import React from 'react'

interface ProfileProps {
  name?: string;
  email?: string;
}

export const Profile = (props:ProfileProps) => {
  return (
    <>
    
            <div className='text-black'>
              <h1 className='mb-3'>{props.name}</h1>
              <h4 className='mb-3'>{props.email}</h4>
            </div>
  </>
  )
}
