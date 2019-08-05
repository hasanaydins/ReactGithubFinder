import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class Search extends Component {
    state = {
        text: ''
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.text === '') {
            this.props.setAlert('Please enter something', 'secondary')
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({text: ''})
        }
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div className="container mt-4" onSubmit={this.onSubmit}>
                <form className="from">
                    <input className="form-control" type="text" name="text" placeholder="Search User.." value={this.state.text} onChange={this.onChange} />
                        <input type="submit" value="Search" className="btn btn-dark btn-block mt-3" />
                </form>
                {this.props.showClear && <button className="btn btn-light btn-block mt-2" onClick={this.props.clearUsers}>Clear All</button>}
                
            </div>
        )
    }
}

export default Search;
