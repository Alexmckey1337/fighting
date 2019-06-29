import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft,faUser,faSmile,faCubes,faChild } from '@fortawesome/free-solid-svg-icons'
import './style.css'
import { Row, Col, Container} from 'react-bootstrap';
import Slider from "react-slick";
import photo from './img/great-support.png'

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return(
        <div className="testimonials-wrapper wow fadeIn">
        <a name='testimonials' />
        <Row className='icon-wrapper '>
            <FontAwesomeIcon className='faicon' icon={faQuoteLeft} size='8x'/>
        </Row>
        <Slider className='slider' {...settings}>
        <div>
          <p className='carousel-heading'>Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Enim id minim veniam exercitation laboris consequat. Duis aute dolor reprehende ritin voluptate cillum fugiatos.</p>
          <img className='slider-img' src={photo} alt=""/>
          <h4>Amah Holland</h4>
          <p className='grey-color'>Social Media Manager</p>
        </div>
        <div>
        <p className='carousel-heading'>Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Enim id minim veniam exercitation laboris consequat. Duis aute dolor reprehende ritin voluptate cillum fugiatos.</p>
          <img className='slider-img' src={photo} alt=""/>
          <h4>Amah Holland</h4>
          <p className='grey-color'>Social Media Manager</p>
        </div>
        <div>
        <p className='carousel-heading'>Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Enim id minim veniam exercitation laboris consequat. Duis aute dolor reprehende ritin voluptate cillum fugiatos.</p>
          <img className='slider-img' src={photo} alt=""/>
          <h4>Amah Holland</h4>
          <p className='grey-color'>Social Media Manager</p>
        </div>
      </Slider>
      
      <div className='bg'>
      <Container>
      <Row className='statistics'>
          <Col sm={12} md={3} className='wow fadeInLeft' data-wow-delay='0.4s'>
          <FontAwesomeIcon className='bottom-faicon' icon={faSmile} size='8x'/>
          <h4>3784</h4>
          <p>Mitglieder</p>
          </Col>
          <Col sm={12} md={3} className='wow fadeInLeft' data-wow-delay='1.2s'>
          <FontAwesomeIcon className='bottom-faicon' icon={faUser} size='8x'/>
          <h4>43</h4>
          <p>Live-Trainings</p>
          </Col>          
          <Col sm={12} md={3} className='wow fadeInRight' data-wow-delay='1.6s'>
          <FontAwesomeIcon className='bottom-faicon' icon={faCubes} size='8x'/>
          <h4>13</h4>
          <p>Kurse</p>
          </Col>          
          <Col sm={12} md={3} className='wow fadeInRight' data-wow-delay='0.8s'>
          <FontAwesomeIcon className='bottom-faicon' icon={faChild} size='8x'/>
          <h4>6</h4>
          <p>Trainer</p>
          </Col>
      </Row>
      </Container>
      </div>  
        </div>
    )
}

export default Testimonials;