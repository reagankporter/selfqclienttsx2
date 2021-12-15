import React from 'react'
import "./Logout.css"
import logout from "../../Assets/logout.svg";

type SessionProps = {
    clearLocalStorage: () => void,
}

class Logout extends React.Component<SessionProps> {

    constructor(props: SessionProps) {
        super(props)
        this.state = {}
    }
    handleSubmit = (e: React.MouseEvent) => {
        this.props.clearLocalStorage();  
    }
    render() {
        return(
            <div>
                <img id='logout' src={logout} alt='logout' onClick={this.handleSubmit}/>
            </div>
        )
    }
}

export default Logout;