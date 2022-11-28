import React from 'react'
import { Navbar } from '../Navbar'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';

export const About = () => {
    return (
        <div>
            <Navbar />
            <img src='assets/road-trip.jpg' className='img-fluid w-100' alt='...' />
        </div>
    )
}



export const AboutCard = () => {
  return (
    <>
      <MDBCard className='mb-3'>
        <MDBCardImage position='top' src='https://mdbootstrap.com/img/new/slides/041.webp' alt='...' />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This
            content is a little bit longer.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className='mb-3'>
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This
            content is a little bit longer.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
        <MDBCardImage position='bottom' src='https://mdbootstrap.com/img/new/slides/042.webp' alt='...' />
      </MDBCard>
    </>
  );
}