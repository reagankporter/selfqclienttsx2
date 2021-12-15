import React from 'react';
import APIURL from '../../../helpers/enviroment'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

type TokenTypes = {
    JournalCo: () => void,
    token: string | null | undefined,
}

type JournalCreate = {
    date: string,
    howDay: string,
    improveDay: string,
    rating: string,
}

class CreateJournal extends React.Component<TokenTypes, JournalCreate> {

    constructor(props: TokenTypes) {
        super(props)
        this.state = {
            date: '',
            howDay: '',
            improveDay: '',
            rating: '',
        }
    }

    handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
        console.log('day log created');
        fetch(`${APIURL}/journal/create`, {
            method: 'POST',
            body: JSON.stringify({
                journal: {
                    date: this.state.date,
                    howDay: this.state.howDay,
                    improveDay: this.state.improveDay,
                    rating: this.state.rating,
        }
    }),
    headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.props.token}`
        })
    })
.then(res => res.json())
.then((data) => {
    console.log(data);
    this.props.JournalCo();
    })
.catch((err) => console.log(`[Error}: ${err}]`))     
}

    render() {
        return(
            
        <div>
            <h2>How was your day?</h2>
            <Form className="feelingform">
                <FormGroup>
                    <br/>
                    <Label className='feelinglabel' htmlFor='date' >Today's Date?</Label>
                    <br/>
                    <Input className='feelinginput' value={this.state.date} onChange={(e) => this.setState({date: e.target.value})} />
                </FormGroup>
                <FormGroup>
                    <Label className='feelinglabel' htmlFor='howDay' >How was your day?</Label>
                    <br/>
                    <Input className='feelinginput' value={this.state.howDay} onChange={(e) => this.setState({howDay: e.target.value})}  />
                </FormGroup>
                <FormGroup>
                    <Label className='feelinglabel' htmlFor='improveDay' >What will you do to have an even better day tomorrow?</Label>
                    <br/>
                    <Input className='feelinginput' value={this.state.improveDay} onChange={(e) => this.setState({improveDay: e.target.value})} />
                </FormGroup>
                <FormGroup>
                    <Label className='feelinglabel' htmlFor='rating' >Rate your day 1-10</Label>
                    <br/>
                    <Input className='feelinginput' value={this.state.rating} onChange={(e) => this.setState({rating: e.target.value})} />
                </FormGroup>
                <Button className="feelingbutton" type='submit' onClick={this.handleSubmit} >Add Day Log</Button>
            </Form>
        </div>
        )
    }

}

export default CreateJournal;


