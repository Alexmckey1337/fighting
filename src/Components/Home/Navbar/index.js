import React,{Fragment} from 'react'
import {Navbar,Nav, NavbarBrand} from 'react-bootstrap'
import whitelogo from '../Header/img/logo.png'
import blacklogo from '../Header/img/coachcombat_logo.png'
class Navigation extends React.Component{

    componentDidMount(){
        if(window.screen.width < 767){
            document.querySelector('.logotype').src = blacklogo
        }
        window.addEventListener('resize',this.resizeHandle)
    }

    mobileChangeImg(){

    }

    resizeHandle(){
        if(window.screen.width > 767){
            console.log('bigger than md')
            document.querySelector('.logotype').src = whitelogo
        }else{
            console.log('smalller than 767')
            document.querySelector('.logotype').src = blacklogo
        }
    }
    render(){
    return(
        <Fragment>
            <Navbar id='navbar' expand = 'md' >
            <Navbar.Toggle className='outerToggle'/>
            <Navbar.Collapse>
            <Navbar.Brand href="#home"><img className='logotype' src={whitelogo} alt="logo" border="0" height='60px'/></Navbar.Brand>    
            <Nav className="navigation">
                <Nav.Link href="/">Startseite</Nav.Link>
                <Nav.Link href="/kurse">Kurse & Trainer</Nav.Link>
                <Nav.Link href="/preise">Preise</Nav.Link>
                <Nav.Link href="#" className='amelden'>Amelden</Nav.Link>
            </Nav>
            </Navbar.Collapse>

        </Navbar>
        </Fragment>
    )
}
}

export default Navigation