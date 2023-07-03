import React from 'react'

import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';

import Carousel1 from '../assets/carousel1.svg';

const ProductList = () => {
  return (
    <div className='productList'>
        <div class="row mt-5">
            <div class="col-4">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Carousel1} />
                <Card.Body>
                    <Card.Title>Product Name</Card.Title>
                    <Card.Text>$Price</Card.Text>
                </Card.Body>
                </Card>
            </div>
            <div class="col-4">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Carousel1} />
                <Card.Body>
                    <Card.Title>Product Name</Card.Title>
                    <Card.Text>$Price</Card.Text>
                </Card.Body>
                </Card>
            </div>
            <div class="col-4">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Carousel1} />
                <Card.Body>
                    <Card.Title>Product Name</Card.Title>
                    <Card.Text>$Price</Card.Text>
                </Card.Body>
                </Card>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-4">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Carousel1} />
                <Card.Body>
                    <Card.Title>Product Name</Card.Title>
                    <Card.Text>$Price</Card.Text>
                </Card.Body>
                </Card>
            </div>
            <div class="col-4">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Carousel1} />
                <Card.Body>
                    <Card.Title>Product Name</Card.Title>
                    <Card.Text>$Price</Card.Text>
                </Card.Body>
                </Card>
            </div>
            <div class="col-4">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Carousel1} />
                <Card.Body>
                    <Card.Title>Product Name</Card.Title>
                    <Card.Text>$Price</Card.Text>
                </Card.Body>
                </Card>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-4">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Carousel1} />
                <Card.Body>
                    <Card.Title>Product Name</Card.Title>
                    <Card.Text>$Price</Card.Text>
                </Card.Body>
                </Card>
            </div>
            <div class="col-4">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Carousel1} />
                <Card.Body>
                    <Card.Title>Product Name</Card.Title>
                    <Card.Text>$Price</Card.Text>
                </Card.Body>
                </Card>
            </div>
            <div class="col-4">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Carousel1} />
                <Card.Body>
                    <Card.Title>Product Name</Card.Title>
                    <Card.Text>$Price</Card.Text>
                </Card.Body>
                </Card>
            </div>
        </div>
        <div class="row mt-5">
            <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
            </Pagination>
        </div>
    </div> 
    
  )
}

export default ProductList