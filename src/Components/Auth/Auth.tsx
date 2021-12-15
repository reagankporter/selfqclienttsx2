import React from 'react';
import { Button } from 'reactstrap';
import './auth.css';
import Login from './AuthCo/Login';
import SignUp from './AuthCo/Signup';


type SessionProps = {
    updateLocalStorage: (newToken: string) => void,
    clearLocalStorage: () => void,
}

type loginToggle = {
    login: boolean,
}

class Auth extends React.Component<SessionProps, loginToggle> {
    constructor(props: SessionProps) {
        super(props)
        this.state = {
            login: false,

        }
    }

    render() {
        return(
            <div>
                {this.state.login ? 
                    (<SignUp updateLocalStorage={this.props.updateLocalStorage} clearLocalStorage={this.props.clearLocalStorage} />) :
                    (<Login updateLocalStorage={this.props.updateLocalStorage} clearLocalStorage={this.props.clearLocalStorage} />)
                }  
                <Button className="authbutton" id='toggle' onClick={() => this.setState({login: !this.state.login})}>Login/Sign Up</Button>
            </div>
        )
    }
}

export default Auth;