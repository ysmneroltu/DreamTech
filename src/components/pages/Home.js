import React, { Component } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

import Hero1 from '../../assets/hero1.jpeg';
import RTX4060 from '../../assets/gigabyte-rtx4060.jpeg';

var carouselData = [
    {
        id: 1,
        image: Hero1,
        title: 'GeForce RTX 4060 Available!',
        decription: 'GeForce RTX 4060 Now Available From May 24th',
        link: '#home'
    }
]

export default class Home extends Component {
    render() {
        return (
            <main>
                <section id="home" class="container" className='carousel-block'>
                <Carousel>
                    {
                        carouselData.map(carousel => {
                            return (
                                <Carousel.Item key={carousel.id}>
                                <img
                                    className='d-block w-100'
                                    src={carousel.image}
                                    alt={"First Slide " + carousel.id}
                                />
                                <Carousel.Caption>
                                    <h3>{carousel.title}</h3>
                                    <p>{carousel.decription}</p>
                                    <a className='btn btn-primary' href={carousel.link}> Learn More</a>
                                </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
                </section>
                <section class="container">
                    <h2 class="mt-5">Featured Products</h2>
                    <div class="row my-5">
                        <div class="col-3">
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={RTX4060} />
                            <Card.Body>
                                <Card.Title>GeForce RTX 4060</Card.Title>
                                <Card.Text>$399.99</Card.Text>
                            </Card.Body>
                            </Card>
                        </div>
                        <div class="col-3">
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={RTX4060} />
                            <Card.Body>
                                <Card.Title>GeForce RTX 4060</Card.Title>
                                <Card.Text>$399.99</Card.Text>
                            </Card.Body>
                            </Card>
                        </div>
                        <div class="col-3">
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={RTX4060} />
                            <Card.Body>
                                <Card.Title>GeForce RTX 4060</Card.Title>
                                <Card.Text>$399.99</Card.Text>
                            </Card.Body>
                            </Card>
                        </div>
                        <div class="col-3">
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={RTX4060} />
                            <Card.Body>
                                <Card.Title>GeForce RTX 4060</Card.Title>
                                <Card.Text>$399.99</Card.Text>
                            </Card.Body>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}