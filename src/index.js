import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Home from './Components/Home'
import Preise from './Components/Preise'
import Kurse from './Components/Kurse';
import WOW from "wow.js";

class App extends React.Component{
    componentDidMount() {
        const wow = new WOW
        wow.init();
    }
    render(){
        return(
            <BrowserRouter>
                <Route path='/' exact component={Home}/>
                <Route path='/kurse' exact component={Kurse}/>
                <Route path='/preise' exact component={Preise}/>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));