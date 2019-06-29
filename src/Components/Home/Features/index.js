import React from 'react'
import './style.css'
import {Row,Col,Image, Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCubes } from '@fortawesome/free-solid-svg-icons'
import firstimg from './img/1photo-598689.jpeg'
import secondimg from './img/2photo-598656.jpeg'
import thirdimg from './img/3-photo-669032.jpeg'
import fourthimg from './img/4pexels-photo-598664.jpeg'


class Features extends React.Component{
    render(){


    return(
        <div className="featuresWrapper">
            <h2 className='heading wow fadeInUp'>Das erwartet dich</h2>
            <p className='heading-desc wow fadeInUp'>Wir bringen dich auf den richtigen Weg, egal ob Anfänger oder Meister!</p>
            <Container>
            <a name='features'/>    
            <Row className='threeimages'>
                <Col sm={12} md={4} className='wow fadeInLeft'>
                    <img className='featured-img ' src={firstimg}/> 
                    <h4 >Technik</h4>
                    <p>Aenean dictum pharetra nibh, sodales luctus felis aliquet vulputate venenatis orci, a laoreet libero vehicula duis tempor rhoncus quam.</p>
                </Col>
                <Col sm={12} md={4} className='wow fadeInDown'>
                    <img className='featured-img ' src={secondimg}/> 
                    <h4>Workout</h4>
                    <p>Aenean dictum pharetra nibh, sodales luctus felis aliquet vulputate venenatis orci, a laoreet libero vehicula duis tempor rhoncus quam.</p>
                </Col>
                <Col sm={12} md={4} className='wow fadeInRight'>
                    <img className='featured-img ' src={thirdimg}/>
                    <h4>Motivation</h4> 
                    <p>Aenean dictum pharetra nibh, sodales luctus felis aliquet vulputate venenatis orci, a laoreet libero vehicula duis tempor rhoncus quam.</p>
                </Col>
            </Row>
            <Row className='post'>
                <Col sm={12} md={6} className='wow fadeInLeft'>
                    <h2>
                        <strong>Erreiche deine Ziele</strong>, wir helfen dir!
                    </h2>
                    <p className='post-subheading'>
                        Mit unseren Profitrainern hast du die besten Lehrer für dich an deiner Seite
                    </p>
                    <p className='grey-color'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempam justo duo dolores aliqua dolore rebum.</p>
                    <Row >
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
                <Col sm={12} md={6} className='wow fadeInRight'>
                    <Image className='fourthimg' src={fourthimg} fluid/>
                </Col>
            </Row>
            <span class="separator"></span>
            <Row className='sports'>
                <Col sm={12} md={3} className='wow fadeIn' data-wow-delay='0.6s'>
                    <h4>Kickboxen / K1</h4>
                    <p className='grey-color'>
                    Ich bin ein Textblock. Klicken Sie auf den Bearbeiten Button um diesen Text zu ändern. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </Col>
                <Col sm={12} md={3} className='wow fadeIn' data-wow-delay='1s'>
                    <h4>Selbstverteidigung</h4>
                    <p className='grey-color'>
                    Ich bin ein Textblock. Klicken Sie auf den Bearbeiten Button um diesen Text zu ändern. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </Col>                
                <Col sm={12} md={3} className='wow fadeIn' data-wow-delay='1.4s'>
                    <h4>Boxen</h4>
                    <p className='grey-color'>
                    Ich bin ein Textblock. Klicken Sie auf den Bearbeiten Button um diesen Text zu ändern. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </Col>                
                <Col sm={12} md={3} className='wow fadeIn' data-wow-delay='1.8s'>
                    <h4>Kemetic Yoga</h4>
                    <p className='grey-color'>
                    Ich bin ein Textblock. Klicken Sie auf den Bearbeiten Button um diesen Text zu ändern. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </Col>
            </Row>
            </Container>
            <div className="button-wrapper wow fadeIn"  data-wow-delay='2.2s'>
                <a href='/preise' >
                    <FontAwesomeIcon icon={faCubes} />
                    Erfahre mehr über unsere Kurse
                </a>
            </div>
        </div>
    )
}
}

export default Features