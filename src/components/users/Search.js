import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Search = ({searchUsers, showClear, clearUsers, setAlert}) => {
    const [text, setText] = useState('');



  const  onSubmit = (e) => {
        e.preventDefault();
        if(text === '') {
            setAlert('Please enter something', 'secondary')
        } else {
            searchUsers(text);
            setText('');
        }
    }
const   onChange = (e) => {
       setText(e.target.value);;
    }

        return (
            <div className="container mt-3" onSubmit={onSubmit}>
                <Card>
                    <div className="card">
                        <div className="card-body">
                        <form className="form" >
                        <input className="form-control" type="text" name="text" placeholder="Search User.." value={text} onChange={onChange}/>
                        <button type="submit" className="btn btn-secondary btn-block my-2"><i className="fas fa-search"></i> Search</button>
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
