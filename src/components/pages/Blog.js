import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Hero1 from '../../assets/hero1.jpeg'

export default class Cart extends Component {
    render() {
        return (
            <div class="container" className='postList'>
                <h1>Blog</h1>
                <div class="row mt-5">
                    <div class="col-6 mx-auto">
                    <Card style={{ width: '50rem' }}>
                    <Card.Img variant="top" src={Hero1} />
                    <Card.Body>
                        <Card.Title>GeForce RTX 4060 Available!</Card.Title>
                        <Card.Text>
                        GeForce RTX 4060 Now Available From May 24th..
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                    </Card.Body>
                    </Card>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-6 mx-auto">
                    <Card style={{ width: '50rem' }}>
                    <Card.Img variant="top" src={Hero1} />
                    <Card.Body>
                        <Card.Title>GeForce RTX 4060 Available!</Card.Title>
                        <Card.Text>
                        GeForce RTX 4060 Now Available From May 24th..
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                    </Card.Body>
                    </Card>
                    </div>
                </div>
            </div>
        )
    }
}