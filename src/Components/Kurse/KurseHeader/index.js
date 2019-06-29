import React from 'react'
import {Container, Row,Col} from 'react-bootstrap'
import './style.css'
import Navigation from '../../Home/Navbar';
const KurseHeader = () =>{
    return(
        
        <Container className='kurse-header' fluid='true'>    
           <Navigation />
            <Row className='wow fadeIn'>
                <Col md={{span:4,offset:1}}>
                <h2 className='kurse-header-heading'>ALLE KURSE UND TRAINER</h2>
                </Col>
                
            </Row>
        </Container>
    )
}
export default KurseHeader