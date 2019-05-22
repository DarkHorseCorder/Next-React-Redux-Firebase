/* using primise */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather2 } from '../actions/action_search_bar';

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
        this.props.fetchWeather2(this.state.term);
        this.setState({term:''});
    }

    renderWeather(city) {
        return(
            <li key={city.id}>{city.name}</li>
        );
    }

    render() {
        const { actionBar } = this.props;
        console.log('actionBar', this.props);
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather2}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);