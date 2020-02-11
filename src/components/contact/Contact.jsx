import React, { Component } from 'react';
import Instagram from '../images/icons/icons8-instagram-480 (1).png';
import Facebook from '../images/icons/icons8-facebook-50 (3).png';
import Twitter from '../images/icons/icons8-twitter-96.png';
import './contact.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: '',
            first: '',
            last: '',
            email: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleFirstChange = this.handleFirstChange.bind(this);
        this.handleLastChange = this.handleLastChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({feedback: event.target.value})
    }

    handleFirstChange(event) {
        this.setState({first: event.target.value})
    }

    handleLastChange(event) {
        this.setState({last: event.target.value})
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value})
    }

    handleSubmit(event) {
        const templateId = 'restaurant';

        this.sendFeedback(
            templateId, {
                message_html:this.state.feedback,
                first_name: this.state.first, 
                last_name: this.state.last,
                reply_to: this.state.email
            }
        )
    }

    sendFeedback (templateId, variables) {
        window.emailjs.send(
            'gmail', templateId, variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
        .catch(err => console.error('Oh well, you failed.'))
    }

    
    render () {  
        return (
            <div className="Contact">
                <div className="Email_form">
                    <h1>Send us an Email</h1>
                    <form>
                        <textarea className="first" placeholder="first name" onChange={this.handleFirstChange} required value={this.state.first}/>
                        <textarea className="last" placeholder="last name" onChange={this.handleLastChange} required value={this.state.last}/>
                        <textarea className="email" placeholder="email" onChange={this.handleEmailChange} required value={this.state.email}/>
                        <textarea className="message" placeholder="message" onChange={this.handleChange} required value={this.state.feedback}/>
                        <input type="button" value="send" className="button" onClick={this.handleSubmit}/>
                    </form>

                </div>
                <div className="social-links">
                <ul>
                    <a><img src={Instagram} alt="instagram" /></a>
                    <a><img src={Facebook} alt="facebook" /></a>
                    <a><img src={Twitter} alt="twitter" /></a>
                </ul>
                </div>
            </div>
        )
    }
}

export default Contact;