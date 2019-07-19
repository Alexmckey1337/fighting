import React,{Fragment} from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import whitelogo from '../Header/img/logo.png'
import blacklogo from '../Header/img/coachcombat_logo.png'
class Navigation extends React.Component{

    componentDidMount(){
        if(window.screen.availWidth < 767){
            document.querySelector('.logotype').src = blacklogo
        }
        window.addEventListener('resize',this.resizeHandle)
    }

    mobileChangeImg(){

    }

    resizeHandle(){
        const toggler = document.querySelector('.innerToggle')
        if(window.screen.availWidth > 767){
            toggler.style.display = 'none'
            document.querySelector('.logotype').src = whitelogo
        }else{
            toggler.style.display = 'block'
            document.querySelector('.logotype').src = blacklogo
        }
    }
    render(){
    return(
        <Fragment>
            <Navbar id='navbar' expand = 'md' >
            <Navbar.Collapse>
            <Navbar.Brand href="#home"><img className='logotype' src={whitelogo} alt="logo" border="0" height='60px'/></Navbar.Brand>    
            <Nav className="navigation">
                <Nav.Link href="/">Startseite</Nav.Link>
                <Nav.Link href="/kurse">Kurse & Trainer</Nav.Link>
                <Nav.Link href="/preise">Preise</Nav.Link>
                <Nav.Link href="#" className='amelden'>Amelden</Nav.Link>
            </Nav>
            <Navbar.Toggle className='innerToggle d-block d-md-none' onClick={()=>{
                document.querySelector('.outerToggle').style.display = 'block'
            }}/>
            </Navbar.Collapse>
            <Navbar.Toggle className='outerToggle ' onClick={()=>{
                document.querySelector('.outerToggle').style.display = 'none'
            }} />
        </Navbar>
        </Fragment>
    )
}
}

export default Navigation