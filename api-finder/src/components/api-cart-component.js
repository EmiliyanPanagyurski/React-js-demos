import React, { Component } from 'react';

class ApiCart extends Component {
    render() {
        const { API, Auth, Category, Cors, Description, HTTPS, Link } = this.props.cart;
        return (
            <div className="ApiCart">
                <p><strong>API:</strong> {API}</p>
                <p><strong>Auth:</strong> {Auth || 'none'}</p>
                <p><strong>Category:</strong> {Category}</p>
                <p><strong>Cors:</strong> {Cors}</p>
                <p><strong>Description:</strong> {Description}</p>
                <p><strong>HTTPS:</strong> {HTTPS.toString()}</p>
                <p><strong>Link:</strong> <a href={Link}>{Link}</a></p>
            </div>
        );
    }
}

export default ApiCart;
