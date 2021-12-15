import React from 'react';
import JournalCreate from './JournalCo/JournalCreate'
import JournalIndex from './JournalCo/JournalIndex';
import './Feeling.css';

type TokenTypes ={
    token: string | null | undefined,
}

class Journals extends React.Component<TokenTypes, {}> {
    constructor(props: TokenTypes) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <div>
                <h2>Day Log</h2>
                {/* <JournalCreate token={this.props.token} /> */}
                <JournalIndex token={this.props.token} />
            </div>
        )
    }
}

export default Journals;