import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const UserItem = ({user: {followers,login, avatar_url}}) => {

        return ( <Card>
                <div className="card text-center justify-content-center">
                <img src={avatar_url} alt="" className="rounded-circle border mx-auto mt-3 mb-3" style={{width: '70px' }} />
                <h4>@{login}</h4>
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
margin-top: 30px;
  .card:hover {
    box-shadow: 0 5px 16px 0 rgba(86, 54, 255, 0.2 );
    transform: scale(1.08);
 },
 .card{
    box-shadow: 0 5px 16px 0 rgba(86, 54, 255, 0.1 );
    background-color: #f3f3f3 !important;
    transition: transform .2s
}
`;

export default UserItem;