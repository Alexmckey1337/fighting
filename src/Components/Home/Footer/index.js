import React from 'react'
import './style.css'
import {Container,Row,Col} from 'react-bootstrap'
import {Fragment} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook ,faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons"

const Footer = () =>{
    return(
        <Fragment>
        <Container  className='footer-wrapper'  fluid={true}>
        <Container >
            <h1 className='footer-heading'>Jetzt gratis Training starten!</h1>
            <div className="footer-form-wrapper">
            <Col sm={12} md={{span:6,offset:3}} className='header-form footer-form'>
                <p>Melde dich jetzt für unseren Newsletter an und erhalte sofort Zugang zu einer gratis Trainingseinheit deiner Wahl.</p>
                <input type='text' placeholder='Vor- und Nachname*'/>
                <input type='text' placeholder='E-Mail-Adresse*'/>
                <input type="submit" value="" className='submit-button footer-submit-button' value='Jetzt Trainieren'/>
                <p className='text-desc'>
                Durch das Klicken auf 'Jetzt Trainieren' trägst du dich für unseren Newsletter ein und bestätigst unsere Datenschutzbestimmung. Aus unseren Newsletter kannst du dich jederzeit wieder austragen. Wir geben Ihre persönlichen Daten nicht an Dritte weiter. Weitere Informationen finden Sie in unseren Datenschutzbestimmung.
                </p>
            </Col>
            </div>
        </Container>
        </Container>
        <Container className='footer-buttons' fluid={true}>
        <Container >
            <Row>
                <Col sm={12} md={{span:5,offset:1}} className='footer-pane'>
                    <h2>Fighter Academy</h2>
                    <p>Bei Fighter Academy findest du die besten online Kurse für alle Kampfsportarten. Lerne Kampfsport jederzeit und überall mit unseren Trainingsvideos und Live-Trainings.</p>
                </Col>
                <Col sm={12} md={3} className='white-text'>
                    <h2>Support</h2>
                    <p>Tel.: 030 / 283 23 33</p>
                    <p>E-Mail: support@fighteracademy.de</p>
                    <p>Live-Chat: chat.fighteracademy.de</p>
                </Col>
                <Col sm={12} md={3} className='white-text footer-links'>
                    <h2>Menü</h2>
                    <p><a href='/kurse'>Kurse und Trainer</a></p>
                    <p><a href='/preise'>Preise</a></p>
                    <p><a>Kontakt</a></p>
                    <p><a>AGB</a></p>
                    <p><a>Datenschutzbestimmung</a></p>
                    <p><a>Impressum</a></p>
                </Col>
            </Row>
        <Row className='copyrights-wrapper'>
            <p className="copyright">Copyright &copy; 2018 - Fighter Academy. All Rights Reserved</p>
            <div className="socials">
                <a className="link-facebook" href="#0" target="_blank"><FontAwesomeIcon icon={faFacebook}/></a>
                <a className="link-twitter" href="#0" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                <a className="link-instagram" href="#0" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
            </div>
        </Row>   
        </Container>
        </Container>
        </Fragment>
    )
}

export default Footer