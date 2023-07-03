import React, { Component } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import FilterPanel from '../FilterPanel';
import ProductList from '../ProductList';

export default class CPU extends Component {
    render() {
        return (
            <div class="container">
                <h1>CPU & Processors</h1>
                <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/catalog">Catalog</Breadcrumb.Item>
                <Breadcrumb.Item active>CPU & Processors</Breadcrumb.Item>
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