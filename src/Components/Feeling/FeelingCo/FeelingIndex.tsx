import React from 'react';
import APIURL from '../../../helpers/enviroment'
import { Container, Row, Col } from 'reactstrap';
import { CardGroup, Card, Button } from 'reactstrap';
import FeelingCreate from './FeelingCreate'

type TokenTypes = {
    token: string | null | undefined,
}

type FeelingGet = {
    howFeeling: string,
    happyFeeling: string,
    okayFeeling: string,
    sadFeeling: string,
    feeling: FeelingDetails[],
    id: string,
    update: boolean,
}

type FeelingDetails = {
    howFeeling: string,
    happyFeeling: string,
    okayFeeling: string,
    sadFeeling: string,
    id: string,
}

class FeelingIndex extends React.Component<TokenTypes, FeelingGet> {

    constructor(props: TokenTypes) {
        super(props)
        this.state = {

        howFeeling: '',
        happyFeeling: '',
        okayFeeling: '',
        sadFeeling: '',
        feeling: [],
        id: '',
        update: false,
        }
    }

    feelingCo = () => {
        fetch(`${APIURL}/feeling/mine`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`
            })
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            this.setState({
                feeling: data,
                id: data.id,
            })
        })
        .catch((err) => console.log(`[Error]: ${err}`))
    }
    componentDidMount() {
        this.feelingCo();
    }

    deleteFeeling = (id: any) => {
        fetch(`${APIURL}/feeling/delete/${id}`,{
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`,
            })
        })
        
        .then(() => this.feelingCo())
        }

        updateFeeling = (id: any) => {
            fetch(`${APIURL}/feeling/update/${id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    feeling: {
                        howFeeling: this.state.howFeeling,
                        happyFeeling: this.state.happyFeeling,
                        okayFeeling: this.state.okayFeeling,
                        sadFeeling: this.state.sadFeeling,
                    }
                }),

                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.props.token}`
                })

            })
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    howFeeling: data.howFeeling,
                    happyFeeling: data.happyFeeling,
                    okayFeeling: data.okayFeeling,
                    sadFeeling: data.sadFeeling,
                })
            })
            .catch((err) => console.log(`[Error]: ${err}`))
        } 

        mapFeeling = (props: any) => {

            return(

                props.feeling.map((feeling: FeelingDetails, index: number) => {

                    return( 
                        <div>
                            <CardGroup key={index}>
                                <Card className={'card'}>
                                <h4><b>{feeling.howFeeling}</b></h4>
                                <p><b><i>Happy: </i></b>{feeling.happyFeeling}</p>
                                    <p><b><i>Okay: </i></b>{feeling.okayFeeling}</p>
                                    <p><b><i>Sad: </i></b>{feeling.sadFeeling}</p>
                                    <Button className="feelingbutton" onClick={() => this.setState({update: !this.state.update})}>Update</Button>
                                    <Button className="feelingbutton" onClick={() => this.deleteFeeling(feeling.id)}>Delete Feeling Log</Button>  
                                    {this.state.update ? (
                                        <div>
                                        <form onSubmit={() => this.updateFeeling(feeling.id)}>
                                            <h2>Update Feeling Log</h2>
                                            <label className='feelinglabel' htmlFor='how'>How?</label>
                                            <br/>
                                            <input className='feelinginput' type='type' id='how' value={this.state.howFeeling} onChange={(e) => this.setState({howFeeling: e.target.value})} />  
                                            <br/>
                                            <label className='feelinglabel' htmlFor='happy'>Happy?</label>
                                            <br/>
                                            <input className='feelinginput' type='type' id='happy' value={this.state.happyFeeling} onChange={(e) => this.setState({happyFeeling: e.target.value})} />  
                                            <br/>
                                            <label className='feelinglabel' htmlFor='okay'>Okay?</label>
                                            <br/>
                                            <input className='feelinginput' type='type' id='okay' value={this.state.okayFeeling} onChange={(e) => this.setState({okayFeeling: e.target.value})} />  
                                            <br/>
                                            <label className='feelinglabel' htmlFor='okay'>Sad?</label>
                                            <br/>
                                            <input className='feelinginput' type='type' id='sad' value={this.state.sadFeeling} onChange={(e) => this.setState({sadFeeling: e.target.value})} />  
                                            <br/>
                                            <button className="feelingbutton" type='submit'>Submit</button>
                                        </form>
                                        </div>
                                    ): null }
                                </Card>
                            </CardGroup>
                        </div>
                    )
                })
            )
        }

        render() {
            return(
                <div>
                    <FeelingCreate token={this.props.token} feelingCo={this.feelingCo} />
                    <h3>My Feelings</h3>
                    <this.mapFeeling howFeeling={this.state.howFeeling} happyFeeling={this.state.happyFeeling} okayFeeling={this.state.okayFeeling} sadFeeling={this.state.sadFeeling} feeling={this.state.feeling} />
                </div>
        )
    }  
}

export default FeelingIndex;