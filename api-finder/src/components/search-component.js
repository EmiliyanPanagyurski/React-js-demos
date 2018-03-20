import React, { Component } from 'react';
import ListComponent from './list-component';
import PropTypes from 'prop-types';

class SearchComponent extends Component {
    constructor() {
        super();
        this.search = this.search.bind(this);
        this.state = {
            foundResults: []
        }
    }
    

    search(e) {
        if(e.target.value === '') {
            return;
        }

        fetch('https://api.publicapis.org/entries?title=' + e.target.value)
            .then(result => {
                return result.json();
            }).then(data => {
                this.setState({foundResults:data.entries});
            }).catch( err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="SearchComponent">
                <input type='text' name='searchBar' onChange={this.search}/>
                <ListComponent searchResult={this.state.foundResults}/>
            </div>
        );
    }
}

SearchComponent.propTypes = {
    searchResult: PropTypes.array
}

export default SearchComponent;
