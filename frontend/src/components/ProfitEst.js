
 import React from 'react'
 import Container from 'react-bootstrap/Container';
 import Nav from 'react-bootstrap/Nav';
 import Navbar from 'react-bootstrap/Navbar';
 
 const ProfitEst = () => {
 
  return (
     <main>
         <h1>
         <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                 <Container>
                     <Navbar>
                         <span class="logo">
                             <a href="/">
                                 <img src={require('../logo_bbay.png')}  height="33" width="120" alt="B-Bay Logo"/>
                             </a>
                         </span>
                         <Nav>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BBay Admin
                         </Nav>
                     </Navbar>
                 </Container>
             </Navbar>
         </h1>
         <div>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={require('../output_10.png')}  height="700" width="1200" alt="B-Bay Logo"/>
         </div>
     </main>
     )
  }
 export default ProfitEst;
