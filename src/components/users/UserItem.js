import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const UserItem = ({user: {login, avatar_url, html_url}}) => {

        return ( <Card>
                <div className="card text-center justify-content-center mt-4">
                <img src={avatar_url} alt="" className="rounded-circle border mx-auto mt-3 mb-3" style={{width: '70px' }} />
                <h3>{login}</h3>
                <div>
                    <Link to={`/user/${login}`}  className="btn btn-dark btn-sm my-1 mb-3">More</Link>
                    
                </div>
            </div>
        </Card>
                

        );
};

UserItem.propTypes ={
    user: PropTypes.object.isRequired,
};
const Card = styled.div`

  .card:hover {
    box-shadow: 0 5px 16px 0 rgba(86, 54, 255, 0.2 );

 },
 &.card{
    box-shadow: 0 5px 16px 0 rgba(86, 54, 255, 0.1 );
    background-color: rgba(223, 223, 223, 0.95);

}
`;

export default UserItem;