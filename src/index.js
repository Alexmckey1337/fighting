import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Home from './Components/Home'
import Preise from './Components/Preise'

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Route path='/' exact component={Home}/>
                <Route path='/kurse' exact component={Home}/>
                <Route path='/preise' exact component={Preise}/>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));