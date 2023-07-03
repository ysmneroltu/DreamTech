import React, { Component } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import FilterPanel from '../FilterPanel';
import ProductList from '../ProductList';

export default class Catalog extends Component {
    render() {
        return (
            <div class="container">
                <h1>Catalog</h1>
                <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Catalog</Breadcrumb.Item>
                </Breadcrumb>
                <div class="row">
                    <div class="col-3">
                        <FilterPanel />
                    </div>
                    <div class="col-9">
                        <ProductList />
                    </div>
                </div>
            </div>
        )
    }
}