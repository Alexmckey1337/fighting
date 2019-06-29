import React from 'react'
import { Navbar } from 'react-bootstrap';
import Footer from '../Home/Footer';
import Testimonials from '../Home/Testimonials'
import {Fragment} from 'react'
import KurseHeader from './KurseHeader';
const Preise = () =>{
    return(
        <Fragment>
            <Navbar />
            <KurseHeader />
            <Testimonials />
            <Footer />
        </Fragment>
    )
}

export default Preise