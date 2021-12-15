import React from 'react'
import APIURL from '../../../helpers/enviroment'


type LoginTypes = {

    username:string,
    password: string,

}

type SessionProps = {
    updateLocalStorage: (newToken: string) => void,
    clearLocalStorage: () => void 
}

class Login extends React.Component <SessionProps, LoginTypes> {

    constructor(props: SessionProps) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
        console.log('Login Completed')

    
        fetch(`${APIURL}/user/login`, {
                method: 'POST',
                body: JSON.stringify({
                    user: {
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
            .catch((err) =>{
                console.log(`[Error]: ${err}`);
                this.props.clearLocalStorage();
            })

        }

        render() {

            return(
                <div>

                    <div className="authform">
                    <form>
                    <h2>Login</h2>
                    <label className='authlabel' htmlFor='username'>Username:</label>
                    <br/>
                    <input className="authinput" type='type' id='usernameLogin' value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} required/>  
                    <br/>
                    <label className='authlabel' htmlFor='password'>Password:</label>
                    <br/>
                    <input className="authinput" type='password' id='passwordLogin' value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} required/>
                    <br/>
                    <button className="authbutton" type='submit' id='login' onClick={this.handleSubmit}>Login</button>
                </form>
                </div>
                
                </div>
            )
        }

}

export default Login;

// update token to admin
// change in auth file 
// 
