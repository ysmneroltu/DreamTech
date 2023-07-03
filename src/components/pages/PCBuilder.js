import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import CPU from '../../assets/cpu.png'
import Motherboard from '../../assets/motherboard.png'
import GPU from '../../assets/gpu.png'
import RAM from '../../assets/ram.png'
import PSU from '../../assets/psu.png'
import AIO from '../../assets/aio.png'
import Case from '../../assets/case.png'
import Storage from '../../assets/storage.png'

export default class PCBuilder extends Component {
    render() {
        return (
            <div class="container">
                <h1>PC Builder</h1>
                <div class="row mt-5">
                    <div class="col-3">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img className="mx-auto mt-3" variant="top" src={CPU} style={{width: 100}}/>
                        <Card.Body>
                            <Card.Title>CPU</Card.Title>
                            <Button href="/catalog/cpu" variant="dark">Select</Button>{' '}
                        </Card.Body>
                        </Card>
                    </div>
                    <div class="col-3">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img className="mx-auto mt-3" variant="top" src={Motherboard} style={{width: 100}}/>
                        <Card.Body>
                            <Card.Title>Motherboard</Card.Title>
                            <Button variant="dark">Select</Button>{' '}
                        </Card.Body>
                        </Card>
                    </div>
                    <div class="col-3">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img className="mx-auto mt-3" variant="top" src={GPU} style={{width: 100}}/>
                        <Card.Body>
                            <Card.Title>GPU</Card.Title>
                            <Button variant="dark">Select</Button>{' '}
                        </Card.Body>
                        </Card>
                    </div>
                    <div class="col-3">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img className="mx-auto mt-3" variant="top" src={RAM} style={{width: 100}}/>
                        <Card.Body>
                            <Card.Title>RAM</Card.Title>
                            <Button variant="dark">Select</Button>{' '}
                        </Card.Body>
                        </Card>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-3">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img className="mx-auto mt-3" variant="top" src={PSU} style={{width: 100}}/>
                        <Card.Body>
                            <Card.Title>Power Supply</Card.Title>
                            <Button variant="dark">Select</Button>{' '}
                        </Card.Body>
                        </Card>
                    </div>
                    <div class="col-3">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img className="mx-auto mt-3" variant="top" src={AIO} style={{width: 100}}/>
                        <Card.Body>
                            <Card.Title>Cooler</Card.Title>
                            <Button variant="dark">Select</Button>{' '}
                        </Card.Body>
                        </Card>
                    </div>
                    <div class="col-3">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img className="mx-auto mt-3" variant="top" src={Case} style={{width: 100}}/>
                        <Card.Body>
                            <Card.Title>Case</Card.Title>
                            <Button variant="dark">Select</Button>{' '}
                        </Card.Body>
                        </Card>
                    </div>
                    <div class="col-3">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img className="mx-auto mt-3" variant="top" src={Storage} style={{width: 100}}/>
                        <Card.Body>
                            <Card.Title>Storage</Card.Title>
                            <Button variant="dark">Select</Button>{' '}
                        </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}