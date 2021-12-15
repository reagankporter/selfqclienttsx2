import React from 'react';
import APIURL from '../../../helpers/enviroment'
import { Button } from 'reactstrap';

type SignUpTypes ={
    email: string,
    username: string,
    password: string,

}

type SessionProps = {
    updateLocalStorage: (newToken: string) => void,
    clearLocalStorage: () => void,
}

class SignUp extends React.Component<SessionProps, SignUpTypes> {

    constructor(props: SessionProps) {
        super(props)
        this.state = {
            email: '',
            username: '',
            password: '',

        }
    }


    handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Sign Up Completed!')

    fetch(`${APIURL}/user/register`, {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    email: this.state.email,
                    username: this.state.username,
                    password: this.state.password,
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.props.updateLocalStorage(data.sessionToken)
        })
        .catch((err) => {
            alert(`[Error}: ${err}]`);
            this.props.clearLocalStorage();
        })

    }

    render() {
        return(
            <div>
                <form className="authform">
                    <h2>Sign Up</h2>
                    <label className='authlabel' htmlFor='email'>Email:</label>
                    <br/>
                    <input className="authinput" type='type' id='email' required value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />  
                    <br/>
                    <label className='authlabel' htmlFor='username'>UserName:</label>
                    <br/>
                    <input className="authinput" type='username' id='username' required value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} />  
                    <br/>
                    <label className='authlabel' htmlFor='password'>Password:</label>
                    <br/>
                    <input className="authinput" type='password' id='password' 
                        required
                        value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} />
                    <br/>
                    <button className="authbutton" type='submit' id='signup' onClick={this.handleSubmit}>Sign Up</button>
                </form>

            </div>
        )
    }

}

export default SignUp;

