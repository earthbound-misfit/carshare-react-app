import React from 'react'
import { Navbar } from '../../components'

interface ProfileProps {
  name: string;
  email: string;
}

export const Profile = (props:ProfileProps) => {
  return (
    <>
    <Navbar />
    <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('assets/road-trip.jpg')", height: 900 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>{props.name}</h1>
              <h4 className='mb-3'>{props.email}</h4>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Hit the Road!
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  </>
  )
}
