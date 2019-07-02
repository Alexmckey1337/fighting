import React from 'react'
import './style.css'
import {Container, Row,Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStreetView } from '@fortawesome/free-solid-svg-icons'
const Pricing = () => {
    return(
        <Container id='pricing'>
            <h2 className='pricing-heading pricing-heading-sm'>
                Preise und Inhalte
            </h2>
            <p className='grey-color sub-heading'>Hier findest du unsere Mitgliedschaften zu fairen Preisen.</p>
            <Row className='pricing'>
                <a name='Pricing' />
                <Col lg={4} md={12} sm={12} className='pricing-item wow fadeInDown' data-wow-delay='0.4s'>
                <div className="pricing-header-wrapper">
                    <h4>MITGLIED</h4>
                    <div className="pricing-bubble">
                    <h5>€79</h5>    
                    <p>einmalig</p>   
                </div>
                </div>
                <ul>
                    <li>Eine Kampfsportart</li>
                    <li>20+ Techniken</li>  
                    <li>8+ Workouts</li>  
                    <li>Anfänger bis Fortgeschritten</li>  
                    <li>1x Live-Training</li>  
                    <li>1 Jahr Mitgliedschaft </li>
                </ul> 
                <div className="pricing-button-wrapper">
                <a href="/preise" class="pricing-button">Mehr Informationen</a>
                </div>
                </Col>
                <Col lg={4} md={12} sm={12} className='pricing-item wow fadeInDown' data-wow-delay='1.2s'>
                <div className="badge">
                <p>EMPFOHLEN</p>
                </div>
                <div className="pricing-header-wrapper">
                    <h4>MITGLIED PLUS</h4>
                    <div className="pricing-bubble">
                    <h5>€199</h5>    
                    <p>einmalig</p>   
                </div>
                </div>
                <ul>
                    <li>Eine Kampfsportart</li>
                    <li>20+ Techniken</li>  
                    <li>8+ Workouts</li>  
                    <li>Anfänger bis Fortgeschritten</li>  
                    <li>3x Live-Training</li>  
                    <li>Unbegrenzte Mitgliedschaft</li>
                </ul> 
                <div className="pricing-button-wrapper">
                <a href="/preise" class="pricing-button">Mehr Informationen</a>
                </div>
                </Col>
                <Col lg={4} md={12} sm={12} className='pricing-item wow fadeInDown' data-wow-delay='0.8s'>
                <div className="pricing-header-wrapper">
                    <h4>MITGLIED PREMIUM</h4>
                    <div className="pricing-bubble">
                    <h5>€24</h5>    
                    <p>pro monat</p>   
                </div>
                </div>
                <ul>
                    <li>Alle Kampfsportarten</li>
                    <li>100+ Techniken</li>  
                    <li>40+ Workouts</li>  
                    <li>Anfänger bis Fortgeschritten</li>  
                    <li>1x Live-Training pro Monat</li>  
                    <li>Mitgliedschaft</li>
                </ul> 
                <div className="pricing-button-wrapper">
                <a href="/preise" class="pricing-button">Mehr Informationen</a>
                </div>
                </Col>
            </Row>
            <Row className='low-button-wrapper'>
            <a className="lowest-pricing-button" href="/preise" ><FontAwesomeIcon icon={faStreetView}/> Mehr über unsere Preise</a>
            </Row>
        </Container>
    )
}

export default Pricing