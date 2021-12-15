import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css'
import Home from './Components/Site/Home';
import Auth from './Components/Auth/Auth';
import Logout from './Components/Logout/Logout'

    type TokenTypes = {
        sessionToken: string | undefined | null,
    }

    class App extends React.Component<{}, TokenTypes> {

        constructor(props: TokenTypes){
            super(props)
            this.state = {
                sessionToken: undefined,
            }
            this.updateLocalStorage = this.updateLocalStorage.bind(this);
        }

        componentDidMount = (() => {
            if(localStorage.getItem('token')) {
                this.setState({
                    sessionToken: localStorage.getItem('token'),

                })
            }
    })

    updateLocalStorage = (newToken: string) => {    
        localStorage.setItem('token', newToken);
        this.setState({
            sessionToken: newToken,
        })
    }

    clearLocalStorage = () => {
        localStorage.clear();
        this.setState({
            sessionToken: undefined,
        })

    }

    viewConductor = () => {
        return(
            this.state.sessionToken !== undefined ? 
            <Home token={this.state.sessionToken} /> : 
            <Auth updateLocalStorage={this.updateLocalStorage} clearLocalStorage={this.clearLocalStorage} />

        )
    }

    render() {
        return(
            <div className="App">   
                    <Router>
                        {this.viewConductor()}
                    </Router>

                    <Logout clearLocalStorage={this.clearLocalStorage}/>
            </div>
        )
    }
}

export default App;
