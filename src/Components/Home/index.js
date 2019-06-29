import React from 'react'
import Header from './Header'
import Features from './Features';
import {Fragment} from 'react'
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import FAQ from './FAQ';
import Footer from './Footer';
const Home = () =>{
    return(
        <Fragment>
            <Header />
            <Features />
            <Pricing />
            <Testimonials />
            <FAQ />
            <Footer />
        </Fragment>
    )
}

export default Home