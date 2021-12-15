import React from "react";
import Navbar from './Navbar'
import Sidebar from './Sidebar'

type TokenTypes = {
    token: string | undefined | null
}

class Home extends React.Component<TokenTypes, {}> {

    constructor(props: TokenTypes) {
        super(props)
        this.state = {}
    }
    render() {
        return(
            <div>
                <h3 className='logoutt'>Logout</h3>   
                <Navbar token={this.props.token} />
                <Sidebar token={this.props.token} />
            </div>
        )
    }
}

export default Home;