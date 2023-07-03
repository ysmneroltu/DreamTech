import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { BrowserRouter, Link } from 'react-router-dom';

const FilterPanel = () => {
  return (
    <div className='filterPanel'>
    <div class="row mt-5">
    <Card style={{ width: '18rem' }}>
      <Card.Header>Categories</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
        <Link to="/catalog/cpu" className="nav-link">CPU & Processors</Link>
        </ListGroup.Item>
        <ListGroup.Item>Motherboard</ListGroup.Item>
        <ListGroup.Item>GPU & Video Graphics Devices</ListGroup.Item>
        <ListGroup.Item>Power Supplies</ListGroup.Item>
        <ListGroup.Item>Fans & PC Cooling</ListGroup.Item>
        <ListGroup.Item>Computer Cases</ListGroup.Item>
        <ListGroup.Item>Storage</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
    <div class="roe mt-5">
    <Card style={{ width: '18rem' }}>
      <Card.Header>Prices</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
            <Form.Check // prettier-ignore
                type="checkbox"
                id="custom-switch"
                label="$25 - $50"
            />
        </ListGroup.Item>
        <ListGroup.Item>
            <Form.Check // prettier-ignore
                type="checkbox"
                id="custom-switch"
                label="$50 - $100"
            />
        </ListGroup.Item>
        <ListGroup.Item>
            <Form.Check // prettier-ignore
                type="checkbox"
                id="custom-switch"
                label="$100 - $150"
            />
        </ListGroup.Item>
        <ListGroup.Item>
            <Form.Check // prettier-ignore
                type="checkbox"
                id="custom-switch"
                label="$150 - $250"
            />
        </ListGroup.Item>
        <ListGroup.Item>
            <Form.Check // prettier-ignore
                type="checkbox"
                id="custom-switch"
                label="$250 - $500"
            />
        </ListGroup.Item>
        <ListGroup.Item>
            <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Text>MIN</InputGroup.Text>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Text>MAX</InputGroup.Text>
            </InputGroup>
        </ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
    </div>
  )
}

export default FilterPanel