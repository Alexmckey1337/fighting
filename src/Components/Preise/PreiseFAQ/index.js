import React from 'react'
import {Container,Col,Row} from 'react-bootstrap'
const PreiseFAQ = () =>{
    return(
        <Container fluid='true' className='faq'>
            <h2 className='faq-heading wow fadeIn'>Häufige Fragen</h2>
            <p className='faq-subheading wow fadeIn'>Gibt es Fragen? Wir haben die besten Antworten für Sie.</p>
            <Row className='wow fadeIn' data-wow-delay='0.4s'>
                <Col className='faq-item' sm={12} md={{span:5,offset:1}}>
                    <h4>Wie kann ich am Live-Training teilnehmen?</h4>
                    <p className='faq-text'>Aenean dictum pharetra nibh, sodales luctus felis aliquet vulputate venenatis orci, a laoreet libero vehicula duis tempor rhoncus quam, occaecat cupidatat non proident. Enim ad minim veniam, quis nostrud exercitation ullamco consequat</p>
                </Col>
                <Col className='faq-item' sm={12} md={{span:5}}>                   
                <h4>Wie kann ich am Live-Training teilnehmen?</h4>
                <p className='faq-text'>Aenean dictum pharetra nibh, sodales luctus felis aliquet vulputate venenatis orci, a laoreet libero vehicula duis tempor rhoncus quam, occaecat cupidatat non proident. Enim ad minim veniam, quis nostrud exercitation ullamco consequat</p>
                </Col>
            </Row>
            <Row className='wow fadeIn' data-wow-delay='0.8s'>
                <Col className='faq-item' sm={12} md={{span:5,offset:1}}>
                    <h4>Wie kann ich am Live-Training teilnehmen?</h4>
                    <p className='faq-text'>Aenean dictum pharetra nibh, sodales luctus felis aliquet vulputate venenatis orci, a laoreet libero vehicula duis tempor rhoncus quam, occaecat cupidatat non proident. Enim ad minim veniam, quis nostrud exercitation ullamco consequat</p>
                </Col>
                <Col className='faq-item' sm={12} md={{span:5}}>                   
                <h4>Wie kann ich am Live-Training teilnehmen?</h4>
                <p className='faq-text'>Aenean dictum pharetra nibh, sodales luctus felis aliquet vulputate venenatis orci, a laoreet libero vehicula duis tempor rhoncus quam, occaecat cupidatat non proident. Enim ad minim veniam, quis nostrud exercitation ullamco consequat</p>
                </Col>
            </Row>
            <Row className='wow fadeIn' data-wow-delay='1.2s'>
                <Col className='faq-item' md={{span:5,offset:1}}>
                    <h4>Wie kann ich am Live-Training teilnehmen?</h4>
                    <p className='faq-text'>Aenean dictum pharetra nibh, sodales luctus felis aliquet vulputate venenatis orci, a laoreet libero vehicula duis tempor rhoncus quam, occaecat cupidatat non proident. Enim ad minim veniam, quis nostrud exercitation ullamco consequat</p>
                </Col>
                <Col className='faq-item' md={{span:5}}>                   
                <h4>Wie kann ich am Live-Training teilnehmen?</h4>
                <p className='faq-text'>Aenean dictum pharetra nibh, sodales luctus felis aliquet vulputate venenatis orci, a laoreet libero vehicula duis tempor rhoncus quam, occaecat cupidatat non proident. Enim ad minim veniam, quis nostrud exercitation ullamco consequat</p>
                </Col>
            </Row>
            <h3 className='wow lightSpeedIn'>
            <a href="https://twitter.com/envato" target=" _blank" title="envato"><strong>Du hast noch Fragen?</strong> Dann schreib uns doch einfach</a>
            </h3>
        </Container>
    )
}

export default PreiseFAQ