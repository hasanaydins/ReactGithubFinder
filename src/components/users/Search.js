import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Search = ({searchUsers, showClear, clearUsers, showAlert}) => {
    const [text, setText] = useState('');



  const  onSubmit = (e) => {
        e.preventDefault();
        if(text === '') {
            showAlert('Please enter something', 'secondary')
        } else {
            searchUsers(text);
            setText('');
        }
    }
const   onChange = (e) => {
       setText(e.target.value);;
    }

        return (
            <div className="container mt-4" onSubmit={onSubmit}>
                <Card>
                    <div className="card">
                        <div className="card-body">
                        <form className="form">
                        <input className="form-control" type="text" name="text" placeholder="Search User.." value={text} onChange={onChange} />
                        <input type="submit" value="Search" className="btn btn-secondary btn-block my-2" />
                    </form>
                    {showClear && <button className="btn btn-light btn-block mt-2 clearAll" onClick={clearUsers}>Clear All</button>}
                
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
