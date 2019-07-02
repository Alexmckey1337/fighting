import React from 'react'
import Footer from '../Home/Footer';
import Pricing from '../Home/Pricing';
import {Fragment} from 'react'
import whitelogo from '../Home/Header/img/logo.png'
import blacklogo from '../Home/Header/img/coachcombat_logo.png'
import PriceHeader from './PriceHeader';
import PreiseFAQ from './PreiseFAQ';
class Preise extends React.Component {
    
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
          for(let i = 0;i<buttons.length-1;i++){
            buttons[i].classList.add('fixed-buttons')
          }
        }else{
            logo.src = whitelogo
            el.classList.remove('fixed-navbar')
            for(let i = 0;i<buttons.length;i++){
              buttons[i].classList.remove('fixed-buttons')
            }
        }
      }  
    }

render(){
    return(
        <Fragment>
            <PriceHeader />
            <Pricing />
            <PreiseFAQ />
            <Footer />
        </Fragment>
    )
}
}

export default Preise