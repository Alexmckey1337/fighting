import React from 'react'
import './style.css'
import {Container, Row,Col} from 'react-bootstrap'
import {Navbar,Nav} from 'react-bootstrap'
import YoutubeBackground from 'react-youtube-background'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop,faHeart } from '@fortawesome/free-solid-svg-icons'

const Header = () =>{
    return(
    <YoutubeBackground videoId={"I_XpaxCVTfA"}>    
    <div className='header-wrapper'>
        <Container fluid={true} className='navbar-wrapper'>
        <Navbar  expand = 'md'>
            <Navbar.Collapse>
            <Navbar.Brand href="#home"><img src="https://i.ibb.co/hVXKMKk/logo.png" alt="logo" border="0" height='60px'/></Navbar.Brand>
            <Nav className="navigation">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Testimonials</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link href="#pricing" className='amelden'>Amelden</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            <Navbar.Toggle />
        </Navbar>
        </Container>
        <Container className='header-content'>
        <Row>
            <Col sm={12} md={6} className='left-pane'>
                <h1 className='header-txt'>Kampfsport lernen war noch nie so einfach wie jetzt!</h1>

            </Col>
            <Col sm={12} md={6} className='header-form'>
                <ul>
                    <li> 
                        <FontAwesomeIcon className='faicon' icon={faLaptop} size='2x'/> 
                        <p>Mit unseren online Kursen kannst du jederzeit und überall Trainieren.</p>
                    </li>
                    <li> 
                        <FontAwesomeIcon className='faicon' icon={faHeart} size='2x'/>
                        <p>Lerne jetzt alle Kampfsportarten und power dich richtig aus mit unseren Profitrainern.</p>
                    </li>
                </ul>
                <p>Jetzt zum Newsletter anmelden und eine <strong>gratis Traingseinheit</strong> erhalten.</p>
                <input type='text' placeholder='Vor- und Nachname*'/>
                <input type='text' placeholder='E-Mail-Adresse*'/>
                <input type="submit" value="" className='submit-button' value='Jetzt Trainieren'/>
                <p className='text-desc'>
                Durch das Klicken auf 'Jetzt Trainieren' trägst du dich für unseren Newsletter ein und bestätigst unsere Datenschutzbestimmung. Aus unseren Newsletter kannst du dich jederzeit wieder austragen. Wir geben Ihre persönlichen Daten nicht an Dritte weiter. Weitere Informationen finden Sie in unseren Datenschutzbestimmung.
                </p>
            </Col>
        </Row>
        </Container>
    </div>        
    </YoutubeBackground>
    )
}

export default Header 