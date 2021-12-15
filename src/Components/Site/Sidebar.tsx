import React from 'react';
import Feelings from '../Feeling/Feeling';
import Journals from '../Journal/Journal'
import Quote from '../Quote/Quote'
import { Route, Link, Routes } from 'react-router-dom';
import './Sidebar.css'


type TokenTypes = {
    token: string | undefined | null,
}

class Sidebar extends React.Component<TokenTypes, {}> {

    constructor(props: TokenTypes) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul id='sidebarul'>
                    <li><Link to='/quote' className='link'>Quote Generator</Link></li>
                    <br/>
                    <li><Link to='/feelings' className='link' >Feeling Log</Link></li>
                    <br/>
                    <li><Link to='/journals' className='link'>Day Log</Link></li>
                </ul>
            </div>
            <div className='sidebar-route'>
                <Routes>
                    <Route path='/quote' element={<Quote/>} />
                    <Route path='/feelings' element={<Feelings token={this.props.token} />} />
                    <Route path='/journals' element={<Journals token={this.props.token} />} />
                </Routes>
        </div>
        </div>
        )
    }

}

export default Sidebar;