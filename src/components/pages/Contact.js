import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div class="container" className='contact'>
                <h1>Contact</h1>
                <div class="row my-5">
                    <div class="col">
                        <div class="row">
                            <h2>DreamTech</h2>
                            <div class="col-6 mx-auto"><p>Address<br/>Phone Number<br/>Email</p></div>
                            <div class="col-6 mx-auto">Company Working Hours</div>
                        </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.2122763814937!2d-75.70006938624513!3d45.42217203136947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce04555c503701%3A0xa3f35e4d40f6353d!2s99%20Queen%20St%2C%20Ottawa%2C%20ON%20K1P%200B7!5e0!3m2!1str!2sca!4v1686451180707!5m2!1str!2sca" 
                    width="600" 
                    height="450"></iframe>
                    </div>
                    <div class="col">
                    <h2>Online Chat</h2>
                        <p>If you have any questions, you can talk with our experts by using the chat box below.</p>
                        <iframe
                            class="mt-3"
                            allow="microphone;"
                            width="350"
                            height="430"
                            src="https://console.dialogflow.com/api-client/demo/embedded/9113dc0e-7bb6-4a7a-9208-7d11fa24bb99">
                        </iframe>
                    </div>
                </div>
            </div>
        )
    }
}