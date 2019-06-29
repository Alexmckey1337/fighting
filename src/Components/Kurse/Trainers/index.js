import React,{Fragment} from 'react'
import {Container,Col,Row} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import TrainerPic from './great-support.png'
import './style.css'


class Trainers extends React.Component{
    render(){
    return(
        <Fragment>
            <Container className='trainers-wrapper'>
                <Row className='trainers-item'>
                    <Col md='8' sm='12'>
                        <h2>Aristo Luis - Kickboxen / K1</h2>
                        <p>Ich bin ein Textblock. Klicken Sie auf den Bearbeiten Button um diesen Text zu ändern. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ich bin ein Textblock. Klicken Sie auf den Bearbeiten Button um diesen Text zu ändern. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <div className="trainers-item-buttons-wrapper">
                        <button className="trainers-item-options">zum Kickboxkurs</button>
                        <button className="trainers-item-trailer"><FontAwesomeIcon icon={faPlay}/>Aristos Trailer</button>
                        </div>
                    </Col>
                    <Col md='4' sm='12' className='trainers-picture'>
                        <img src={TrainerPic}/>
                    </Col>
                </Row>
                <Row className='trainers-item trainers-item-even'>
                    <Col md='4' sm='12' className='trainers-picture'>
                        <img src={TrainerPic}/>
                    </Col>
                    <Col md='8' sm='12'>
                        <h2>Aristo Luis - Kickboxen / K1</h2>
                        <p>Ich bin ein Textblock. Klicken Sie auf den Bearbeiten Button um diesen Text zu ändern. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ich bin ein Textblock. Klicken Sie auf den Bearbeiten Button um diesen Text zu ändern. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <div className="trainers-item-buttons-wrapper">
                        <button className="trainers-item-options">zum Kickboxkurs</button>
                        <button className="trainers-item-trailer"><FontAwesomeIcon icon={faPlay}/>Aristos Trailer</button>
                        </div>
                    </Col>
                </Row>   
                <Row className='trainers-item'>
                    <Col md='8' sm='12'>
                        <h2>Aristo Luis - Kickboxen / K1</h2>
                        <p>Ich bin ein Textblock. Klicken Sie auf den Bearbeiten Button um diesen Text zu ändern. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ich bin ein Textblock. Klicken Sie auf den Bearbeiten Button um diesen Text zu ändern. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <div className="trainers-item-buttons-wrapper">
                        <button className="trainers-item-options">zum Kickboxkurs</button>
                        <button className="trainers-item-trailer"><FontAwesomeIcon icon={faPlay}/>Aristos Trailer</button>
                        </div>
                    </Col>
                    <Col md='4' sm='12' className='trainers-picture'>
                        <img src={TrainerPic}/>
                    </Col>
                </Row>
                <Row className='trainers-item trainers-item-even'>
                    <Col md='4' sm='12' className='trainers-picture'>
                        <img src={TrainerPic}/>
                    </Col>
                    <Col md='8' sm='12'>
                        <h2>Aristo Luis - Kickboxen / K1</h2>
                        <p>Ich bin ein Textblock. Klicken Sie auf den Bearbeiten Button um diesen Text zu ändern. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ich bin ein Textblock. Klicken Sie auf den Bearbeiten Button um diesen Text zu ändern. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <div className="trainers-item-buttons-wrapper">
                        <button className="trainers-item-options">zum Kickboxkurs</button>
                        <button className="trainers-item-trailer"><FontAwesomeIcon icon={faPlay}/>Aristos Trailer</button>
                        </div>
                    </Col>
                </Row>          
            </Container>
        </Fragment>

    )
}
} 
export default Trainers