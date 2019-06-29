import React,{Fragment} from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import whitelogo from '../Header/img/logo.png'
const Navigation = () =>{
    return(
        <Fragment>
            <Navbar id='navbar' expand = 'md'>
            <Navbar.Collapse>
            <Navbar.Brand href="#home"><img className='logotype' src={whitelogo} alt="logo" border="0" height='60px'/></Navbar.Brand>
            <Nav className="navigation">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/kurse">Testimonials</Nav.Link>
                <Nav.Link href="/preise">Pricing</Nav.Link>
                <Nav.Link href="#" className='amelden'>Amelden</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            <Navbar.Toggle />
        </Navbar>
        </Fragment>
    )
}

export default Navigation