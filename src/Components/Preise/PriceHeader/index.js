import React from 'react'
import {Container, Row,Col} from 'react-bootstrap'
import './style.css'
import Navigation from '../../Home/Navbar';
const PriceHeader = () =>{
    return(
        
        <Container className='price-header' fluid='true'>
            <Navigation />
            <Row>
                <Col md={{span:4,offset:1}}>
                <h2 className='price-header-heading'>UNSERE PREISE</h2>
                </Col>
                
            </Row>
        </Container>
    )
}
export default PriceHeader