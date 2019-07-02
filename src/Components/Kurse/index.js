import React from 'react'
import Footer from '../Home/Footer';
import {Fragment} from 'react'
import KurseHeader from './KurseHeader'
import Trainers from './Trainers';
import whitelogo from '../Home/Header/img/logo.png'
import blacklogo from '../Home/Header/img/coachcombat_logo.png'
import KurseFeatures from './KurseFeatures';

class Kurse extends React.Component{
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
            <KurseHeader />
            <Trainers />
            <KurseFeatures />
            <Footer />
        </Fragment>
    )
}
}

export default Kurse