import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import Features from './Components/Features';
import {Fragment} from 'react'
import Testimonials from './Components/Testimonials';
import Pricing from './Components/Pricing';
import FAQ from './Components/FAQ';
import Footer from './Components/Footer';

class App extends React.Component{
    render(){
        return(
           <Fragment> 
            <Header />
            <Features />
            <Testimonials />
            <Pricing />
            <FAQ />
            <Footer />
           </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));