import React from 'react';
import { Nav } from 'reactstrap';
import Logout from '../Logout/Logout'

type TokenTypes = {
    token: string | undefined | null
}

class Navbar extends React.Component<TokenTypes, {}> {

    constructor(props: TokenTypes) {
        super(props)
        this.state = {}
    }

    clearLocalStorage = () => {
        localStorage.clear();
        this.setState({
            sessionToken: undefined,
            // role: '',
        })

    }

    render() {
        return(
            <div>
                <h1 className="TitleTwo">SelfQ.</h1>
                <Logout clearLocalStorage={this.clearLocalStorage} />
                <hr/>
            </div>
        )
    }
}

export default Navbar;