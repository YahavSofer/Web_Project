import React, { Component }  from "react";
// import Signup from "./Signup";
import ButtonGetAPI from "./test-audio";
import {Container} from 'react-bootstrap'

function App() {
  return (
    <Container className = 'd-flex align-items-center justify-content-center' style={{minHeight:"100vh"}}>
      {/* <div className='w-100' style={{maxWidth:"360px"}}>
        <Signup />
      </div> */}
      <ButtonGetAPI/>
    </Container>

  );
}

export default App;
