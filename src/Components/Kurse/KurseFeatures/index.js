import React from 'react'
import {Container, Row,Col} from 'react-bootstrap'
import fourthimg from './4.jpeg'
import thirdimg  from './3.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import './style.css'

const KurseFeatures = () =>{
    return(
        <Container>
            <Row className='post '>
                <Col sm={12} md={5}>
                    <img className='fourthimg' src={fourthimg} />
                </Col>
                <Col className='kurse-features-post' sm={12} md={{span:5,offset:1}}>
                    <p className='kurse-features-heading'>
                        Jetzt kannst du noch besser lernen
                    </p>
                    <h2>
                        Nehm einfach an unseren <strong>Live-Training</strong> teil.
                    </h2>
                    <p className='kurse-features-subheading'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua uta enim ad minim veniam, quis nostrud exercitation ullamco laboris justo duo dolores et ea rebum.
                    </p>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faCheckSquare} size='2x'/>
                            Live-Training mit echten Profitrainern  
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheckSquare} size='2x'/>
                            Live-Training mit echten Profitrainern  
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheckSquare} size='2x'/>
                            Live-Training mit echten Profitrainern  
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheckSquare} size='2x'/>
                            Live-Training mit echten Profitrainern  
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row className='post'>
                <Col sm={12} md={6} className='kurse-features-second-post'>
                    <h2>
                        <strong>Erreiche deine Ziele</strong>, wir helfen dir!
                    </h2>
                    <p className='post-subheading'>
                        Mit unseren Profitrainern hast du die besten Lehrer für dich an deiner Seite
                    </p>
                    <p className='grey-color'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempam justo duo dolores aliqua dolore rebum.</p>
                    <Row>
                        <Col sm={6}>
                            <h4>
                                Kampfsport lernen
                            </h4>
                            <p className='grey-color'>
                                Duis aute dolor reprehende ritin voluptate cillum dolore fugiatos pariatur sint occaecat est.
                            </p>
                        </Col>
                        <Col sm={6}>
                            <h4>
                                Kampfsport lernen
                            </h4>
                            <p className='grey-color'>
                                Duis aute dolor reprehende ritin voluptate cillum dolore fugiatos pariatur sint occaecat est.
                            </p>
                        </Col>                        
                        <Col sm={6}>
                            <h4>
                                Kampfsport lernen
                            </h4>
                            <p className='grey-color'>
                                Duis aute dolor reprehende ritin voluptate cillum dolore fugiatos pariatur sint occaecat est.
                            </p>
                        </Col>                        
                        <Col sm={6}>
                            <h4>
                                Kampfsport lernen
                            </h4>
                            <p className='grey-color'>
                                Duis aute dolor reprehende ritin voluptate cillum dolore fugiatos pariatur sint occaecat est.
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} md={6}>
                    <img className='fourthimg' src={thirdimg} />
                </Col>
            </Row>
        </Container>
    )
}

export default KurseFeatures