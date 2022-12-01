import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';

export const Navbar = () => {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light className="p-5 text-dark fixed-top position-absolute">
      <MDBContainer fluid>
        <MDBNavbarBrand href='/' className="fs-1 text-white">Yewy</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='p-5 fs-5'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/' className="text-white">
                Classic Cars
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/about' className="text-white">About</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/dashboard' className="text-white">Dashboard</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className='d-flex input-group col-4-lg justify-content-evenly'>
            <MDBInput type="search" label='Search Cars' id='formWhite' contrast className='form-control me-5 p-2'/>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
