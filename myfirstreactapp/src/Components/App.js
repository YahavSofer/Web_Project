import React  from "react";
import Signup from "./Signup";
import {Container} from 'react-bootstrap'
import { AuthProvider } from "../context/AuthContext";

// require('dotenv').config();

function App() {
  return (
    <AuthProvider>
        <Container className = 'd-flex align-items-center justify-content-center' style={{minHeight:"100vh"}}>
          <div className='w-100' style={{maxWidth:"360px"}}>
            <Signup />
          </div>
        </Container>
    </AuthProvider>
  );
}

export default App;
