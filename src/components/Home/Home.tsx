import React from 'react';
import { Navbar } from '../../components'

interface Props {
  image: string;
}

export const Home = ( props: Props ) => {
  return (
    <>
      <Navbar />
      <div>{ props.image }</div>
    </>
  );
}




  
