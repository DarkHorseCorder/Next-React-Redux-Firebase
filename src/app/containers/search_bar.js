/*using redux-thunk*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/action_search_bar';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {term: ''};
    }
    
    onInputChange = (event) => {
        this.setState({term: event.target.value});
    }

    onFormSubmit = event => {
        event.preventDefault();
        const {dispatch} = this.props;
        dispatch(fetchWeather(this.state.term));
        this.setState({term:''});
    }

    render() {
        const { actionBar } = this.props;
        console.log('actionBar', actionBar);
        return(
            <div>
                <form className="input-group" onSubmit= {this.onFormSubmit}>
                    <input 
                        placeholder="Get a five-day forecast in your favourite cities"
                        className="form-control"
                        value={this.state.term}
                        onChange = {this.onInputChange} />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </span>
                </form>
                {actionBar.map((result) =>
                    <li key={result.city.id}>{result.city.name}</li>
                )}
            </div>
            
        );
    }
}

function mapStateToProps(state) {
    const {actionBar} = state;
    return {actionBar};
}

export default connect(mapStateToProps)(SearchBar);