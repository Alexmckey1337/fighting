import React from 'react'
import './style.css'
import {Container, Row,Col,Modal,Button} from 'react-bootstrap'
import YoutubeBackground from 'react-youtube-background'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop,faHeart,faPlay } from '@fortawesome/free-solid-svg-icons'
import photo from './img/great-support.png'
import Slider from 'react-slick'
import whitelogo from './img/logo.png'
import blacklogo from './img/coachcombat_logo.png'
import Navigation from '../Navbar';
class Header extends React.Component{
    constructor(props, context) {

        super(props, context);
        
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
        };

      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }
      handleScroll(){
          if(window.innerWidth>767){
          const el = document.getElementById('navbar')
          const buttons = document.querySelectorAll('.nav-link')
          const logo = document.querySelector('.logotype')
          const offset = window.pageYOffset
          if (offset > 0){
            logo.src = blacklogo
            el.classList.add('fixed-navbar')
            buttons.forEach(e=>{
                e.classList.add('fixed-buttons')
            })
          }else{
              logo.src = whitelogo
              el.classList.remove('fixed-navbar')
              buttons.forEach(e=>{
                e.classList.remove('fixed-buttons')
            })
          }
        }  
      }
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }
    render(){
    const settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
         arrows:false
    }    
    return(
    <YoutubeBackground videoId={"I_XpaxCVTfA"}>    
    <div className='header-wrapper'>
        <Container fluid={true} className='navbar-wrapper'>
        <Navigation />
        </Container>
        <Container className='header-content'>
        <Row className='header-content-wrapper-row'>
        <Col sm={12} md={6} className='left-pane  wow fadeInLeft'>
            <a name='home'/>
        <Slider className='slider' {...settings}>
        <div>
          <img className='top-slider-img' src={photo} alt=""/>
          <h4 className='top-slider-name'>Tom Jones</h4>
          <p className='grey-color'>Kickboxen / K1</p>
        </div>
        <div>
          <img className='top-slider-img' src={photo} alt=""/>
          <h4 className='top-slider-name'>Tom Jones</h4>
          <p className='grey-color'>Kickboxen / K2</p>
        </div>
        <div>
          <img className='top-slider-img' src={photo} alt=""/>
          <h4 className='top-slider-name'>Tom Jones</h4>
          <p className='grey-color'>Kickboxen / K3</p>
        </div>
      </Slider>
        <div className='youtubePopup' onClick={this.handleShow}>
            <FontAwesomeIcon icon={faPlay} size='4x'/>
        </div>
            </Col>
            <Col sm={12} md={6} className='header-form  wow fadeInLeft'>
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
                <input type='email' placeholder='E-Mail-Adresse*'/>
                <input type="submit" value="" className='submit-button' value='Jetzt Trainieren'/>
                <p className='text-desc'>
                Durch das Klicken auf 'Jetzt Trainieren' trägst du dich für unseren Newsletter ein und bestätigst unsere Datenschutzbestimmung. Aus unseren Newsletter kannst du dich jederzeit wieder austragen. Wir geben Ihre persönlichen Daten nicht an Dritte weiter. Weitere Informationen finden Sie in unseren Datenschutzbestimmung.
                </p>
            </Col>
        </Row>
        </Container>
        <Modal className='modal' show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
              <iframe src="https://www.youtube.com/embed/I_XpaxCVTfA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Modal.Body>
        </Modal>
    </div>        
    </YoutubeBackground>

    )
}
}

export default Header 