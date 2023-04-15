import {PureComponent} from 'react';
import MenuItem from '@mui/material/MenuItem';
//import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './index.scss'

class Contact extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            subject: '',
            message: '',
        }
    }
    handleCancel(){
        this.setState(
            {
                subject: '',
                message: '',
            }
        );
    }
    /**
     * @method handleLSelectChange
     * @param {event} selectedOption 
     */
    handleSelectChange(asset, selectedOption){
        if(selectedOption.target.value){
            this.setState({ [asset]: selectedOption.target.value});
        }
    }
    /**
     * @method handleGeneralChange
     * @param {String} name 
     * @param {Event} evt 
     */
    handleGeneralChange(name, evt){
        this.setState({ [name]: evt.target.value });
    }
    async handleSubmit(){
    }
    render(){
        return(
                <div className='container contact-form'>
                        {/* <Container style={{position:'relative',height:'100%', width:'90%'}}>
                            <h2>Message Us</h2>
                            <FormGroup style={{paddingTop:'20px'}}>
                                        <Label >Subject*</Label>
                                        <div className='form-control select'>
                                        <Select
                                            className="homesSelect"
                                            value={this.state.subject}
                                            onChange={this.handleSelectChange.bind(this, 'subject')}
                                            label="Subject"
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                        </div>
                            </FormGroup>
                            <FormGroup style={{paddingTop:'20px'}}>
                                <Label >Message *</Label>
                                <Input type="textarea" value={this.state.message} onChange={this.handleGeneralChange.bind(this,'message')}/>
                            </FormGroup>
                            <Row className='button-container'>
                                <Col lg={{ size: '', offset: 0 }}>
                                    <FormGroup>
                                        <Button className='form-button' color="success" onClick={this.handleSubmit.bind(this)}>Submit</Button>
                                    </FormGroup>
                                </Col>
                                <Col lg={{ size: '', offset: .5 }}>
                                    <FormGroup>
                                        <Button className='form-button' color="secondary" onClick={this.handleCancel.bind(this)}>Cancel</Button>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Container> */}
                </div>
        )
    }
}
export default Contact;