import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ApiCart from './api-cart-component';

class ListComponent extends Component {

    renderApiCarts(prop) {
        return <ApiCart key={prop.Link} cart={prop}/>;
    }

    render() {
        const { searchResult } = this.props;
        
        if (!searchResult) {
            return null;
        }

        return (
            <div className="ListComponent">
                {searchResult.map(api => this.renderApiCarts(api))}
            </div>
        );
    }
}

ListComponent.propTypes = {
    cart: PropTypes.object
}

export default ListComponent;
