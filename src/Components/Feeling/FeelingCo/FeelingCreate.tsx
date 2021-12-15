import React from 'react';
import APIURL from '../../../helpers/enviroment'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

type TokenTypes = {
    feelingCo: () => void,
    token: string | null | undefined,
}

type FeelingCreate = {
    howFeeling: string,
    happyFeeling: string,
    okayFeeling: string,
    sadFeeling: string,
}

class CreateFeeling extends React.Component<TokenTypes, FeelingCreate> {

    constructor(props: TokenTypes) {
        super(props)
        this.state = {
            howFeeling: '',
            happyFeeling: '',
            okayFeeling: '',
            sadFeeling: '',
        }
    }

        handleSubmit = (e: React.MouseEvent) => {
            e.preventDefault();
            console.log('feeling log created');
            fetch(`${APIURL}/feeling/create`, {
                method: 'POST',
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
        console.log(data);
        this.props.feelingCo();
        })
    .catch((err) => console.log(`[Error}: ${err}]`))     
    }

    render() {
        return(
            
        <div>
            <h2>How are you feeling?</h2>
            <Form className="feelingform">
                <FormGroup>
                    <br/>
                    <Label className='feelinglabel' htmlFor='howFeeling' >How are you feeling today?</Label>
                    <br/>
                    <Input className='feelinginput' value={this.state.howFeeling} onChange={(e) => this.setState({howFeeling: e.target.value})} />
                </FormGroup>
                <FormGroup>
                    <Label className='feelinglabel' htmlFor='happyFeeling' >Something that made you feel happy today?</Label>
                    <br/>
                    <Input className='feelinginput' value={this.state.happyFeeling} onChange={(e) => this.setState({happyFeeling: e.target.value})}  />
                </FormGroup>
                <FormGroup>
                    <Label className='feelinglabel' htmlFor='okayFeeling' >Something that made you feel okay today?</Label>
                    <br/>
                    <Input className='feelinginput' value={this.state.okayFeeling} onChange={(e) => this.setState({okayFeeling: e.target.value})} />
                </FormGroup>
                <FormGroup>
                    <Label className='feelinglabel' htmlFor='sadFeeling' >Something that made you feel sad today?</Label>
                    <br/>
                    <Input className='feelinginput' value={this.state.sadFeeling} onChange={(e) => this.setState({sadFeeling: e.target.value})} />
                </FormGroup>
                <button className="feelingbutton" type='submit' onClick={(e) => this.handleSubmit (e)}>Add Feeling Log </button>
            </Form>
        </div>
        )
    }

}

export default CreateFeeling;


