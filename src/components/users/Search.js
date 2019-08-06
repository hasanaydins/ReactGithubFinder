import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Search = ({searchUsers, showClear, clearUsers}) => {
    const [text, setText] = useState('');
    state = {
        text: ''
    };


  const  onSubmit = (e) => {
        e.preventDefault();
        if(this.state.text === '') {
            this.props.setAlert('Please enter something', 'secondary')
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({text: ''})
        }
    }
    onChange = (e) => {
       setText(e.target.value);;
    }

        return (
            <div className="container mt-4" onSubmit={this.onSubmit}>
                <Card>
                    <div className="card">
                        <div className="card-body">
                        <form className="form">
                        <input className="form-control" type="text" name="text" placeholder="Search User.." value={text} onChange={this.onChange} />
                        <input type="submit" value="Search" className="btn btn-secondary btn-block my-2" />
                    </form>
                    {this.props.showClear && <button className="btn btn-light btn-block mt-2 clearAll" onClick={this.props.clearUsers}>Clear All</button>}
                
                    </div>
                    </div>
                    </Card>
                
                
            </div>
        )
    
}

const Card = styled.div`

 .card{
    box-shadow: 0 5px 16px 0 rgba(86, 54, 255, 0.1 );  

},
.btn-light{
    background-color: #e7e7e7   ; 
    border-radius: 5.5px;
}
`;

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
}
export default Search;
