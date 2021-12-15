import React from 'react';
import FeelingCreate from './FeelingCo/FeelingCreate'
import FeelingIndex from './FeelingCo/FeelingIndex';
import './Feeling.css';

type TokenTypes ={
    token: string | null | undefined,
}

class Feelings extends React.Component<TokenTypes, {}> {
    constructor(props: TokenTypes) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <div>
                <h2>Feeling Log</h2>
                {/* <FeelingCreate token={this.props.token} /> */}
                <FeelingIndex token={this.props.token} />
            </div>
        )
    }
}

export default Feelings;