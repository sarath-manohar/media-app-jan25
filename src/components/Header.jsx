import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
     <Navbar className="bg-info">
        <Container>
          <Navbar.Brand >
         <Link to={'/'} style={{textDecoration:"none",color:'blue',fontWeight:"30px"}}>
         <i class="fa-solid fa-play fa-beat me-2"></i>
         Media-Player
         </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )

}

export default Header
