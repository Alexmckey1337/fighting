import React from 'react'
import {Container,Col,Row} from 'react-bootstrap'
import './style.css'
const FAQ = () =>{
    return(
        <Container className='faq'>
            <h2 className='faq-heading'>Häufige Fragen</h2>
            <p className='faq-subheading'>Gibt es Fragen? Wir haben die besten Antworten für Sie.</p>
            <Row>
                <Col className='faq-item' sm={12} md={6}>
                    <h4>Wie kann ich am Live-Training teilnehmen?</h4>
                    <p className='faq-text'>Aenean dictum pharetra nibh, sodales luctus felis aliquet vulputate venenatis orci, a laoreet libero vehicula duis tempor rhoncus quam, occaecat cupidatat non proident. Enim ad minim veniam, quis nostrud exercitation ullamco consequat</p>
                </Col>
                <Col className='faq-item' sm={12} md={6}>                   
                <h4>Wie kann ich am Live-Training teilnehmen?</h4>
                <p className='faq-text'>Aenean dictum pharetra nibh, sodales luctus felis aliquet vulputate venenatis orci, a laoreet libero vehicula duis tempor rhoncus quam, occaecat cupidatat non proident. Enim ad minim veniam, quis nostrud exercitation ullamco consequat</p>
                </Col>
            </Row>
            <Row>
                <Col className='faq-item' sm={12} md={6}>
                    <h4>Wie kann ich am Live-Training teilnehmen?</h4>
                    <p className='faq-text'>Aenean dictum pharetra nibh, sodales luctus felis aliquet vulputate venenatis orci, a laoreet libero vehicula duis tempor rhoncus quam, occaecat cupidatat non proident. Enim ad minim veniam, quis nostrud exercitation ullamco consequat</p>
                </Col>
                <Col className='faq-item' sm={12} md={6}>                   
                <h4>Wie kann ich am Live-Training teilnehmen?</h4>
                <p className='faq-text'>Aenean dictum pharetra nibh, sodales luctus felis aliquet vulputate venenatis orci, a laoreet libero vehicula duis tempor rhoncus quam, occaecat cupidatat non proident. Enim ad minim veniam, quis nostrud exercitation ullamco consequat</p>
                </Col>
            </Row>
            <Row>
                <Col className='faq-item' sm={12} md={6}>
                    <h4>Wie kann ich am Live-Training teilnehmen?</h4>
                    <p className='faq-text'>Aenean dictum pharetra nibh, sodales luctus felis aliquet vulputate venenatis orci, a laoreet libero vehicula duis tempor rhoncus quam, occaecat cupidatat non proident. Enim ad minim veniam, quis nostrud exercitation ullamco consequat</p>
                </Col>
                <Col className='faq-item' sm={12} md={6}>                   
                <h4>Wie kann ich am Live-Training teilnehmen?</h4>
                <p className='faq-text'>Aenean dictum pharetra nibh, sodales luctus felis aliquet vulputate venenatis orci, a laoreet libero vehicula duis tempor rhoncus quam, occaecat cupidatat non proident. Enim ad minim veniam, quis nostrud exercitation ullamco consequat</p>
                </Col>
            </Row>
            <h3 >
            <a href="https://twitter.com/envato" target=" _blank" title="envato"><strong>Du hast noch Fragen?</strong> Dann schreib uns doch einfach</a>
            </h3>
        </Container>
    )
}

export default FAQ