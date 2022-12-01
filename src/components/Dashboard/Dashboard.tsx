import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
  MDBContainer
} from 'mdb-react-ui-kit';
import { Navbar } from '../Navbar';
import '../../styles.css'
import { Profile } from '../Profile';
import { Settings } from '../Settings';
import { MyCars } from '../MyCars';

export const Dashboard = () => {
  const [verticalActive, setVerticalActive] = useState('tab1');

  const handleVerticalClick = (value: string) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };

  return (
    <>
    <Navbar />
      
      <div className="d-flex">
        
        <img src='assets/road-trip.jpg' className='img-fluid bg-image mw-100 vw-100' alt='...' />
      <MDBContainer className="sidenav-container">
        <div className="sidenav">
      <MDBRow>
        <MDBCol size='3'>
          <MDBTabs className='flex-column text-center'>
            <MDBTabsItem>
              <MDBTabsLink id="profile" onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>
                Profile
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink id="mycars" onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
                My Cars
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink id="settings" onClick={() => handleVerticalClick('tab3')} active={verticalActive === 'tab3'}>
                Settings
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
        </MDBCol>
        <MDBCol size='9'>
          <MDBTabsContent>

            <MDBTabsPane show={verticalActive === 'tab1'}>
              <Profile />
            </MDBTabsPane>

            <MDBTabsPane show={verticalActive === 'tab2'}>
              <MyCars />
              </MDBTabsPane>

            <MDBTabsPane show={verticalActive === 'tab3'}>
              <Settings />
              </MDBTabsPane>

          </MDBTabsContent>
        </MDBCol>
      </MDBRow>
      </div>
      </MDBContainer>
      </div>
    </>
  );
}
