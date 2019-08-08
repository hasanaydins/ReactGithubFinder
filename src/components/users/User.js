import React, { Fragment, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Repos from '../repos/Repos';
import styled from 'styled-components';

const User = ({user, loading, getUser, getUserRepos, repos, match}) => {
    useEffect( () => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    }, []);

        const {
            name,
            avatar_url,
            location,
            bio,
            company,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = user;
    
        if(loading) {
            return <Spinner/>       
        } 

        return <Fragment>
            <Link to='/' className='btn btn-secondary mt-2 mb-1'> <i className="fas fa-backspace"></i> Back to Home</Link>
             
            {hireable === true ? (
               <h5 className="mt-4">Hireable:  <i className="fas fa-check text-success mt-2 ml-2" /></h5>
            ) : hireable === false ? (
                <h5 className="mt-4">Hireable:   className="fas fa-times-circle text-danger mt-2 ml-2" /></h5>
            ) : null }
            
            <div className="row">
                <div className="col-12 col-md-4">
                <Card>
                <div className="card mt-2">
                <div className="text-center">
                    <img src={avatar_url} className="rounded-circle mt-3" alt="avatar" style={{width: '140px'}} />
                    
                    <h2 className="mt-3">{name}</h2>
                    <p className="">@{login}</p>
                    <p><i className="fas fa-map-marker-alt"></i>   {location}</p>
                </div>
                <div className="mx-3">
                    {bio && (<Fragment>
                         <h3>Bio</h3>
                         <p>{bio}</p>
                    </Fragment>
                    )}
                    <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
                    <ul className="my-3">
                        
                            {company && <Fragment>
                                <li><strong>Company: </strong> {company}</li>
                                
                            </Fragment>}
                        
                        {blog && <Fragment>
                            <li><strong>Website:  </strong><a href={blog} > {blog}</a></li>
                            
                            </Fragment>}
                    </ul>
                </div>
            </div>
            <div className="card mt-3">
          <div className="card-body text-center">
            <h5 className="border border-secondary rounded p-2">Followers: <span className="badge badge-primary">{followers}</span></h5>
            <h5 className="border border-secondary rounded p-2">Following: <span className="badge badge-success">{following}</span></h5>
            <h5 className="border border-secondary rounded p-2">Public Gists: <span className="badge badge-warning">{public_repos}</span></h5>
            <h5 className="border border-secondary rounded p-2">Public Repos: <span className="badge badge-danger">{public_gists}</span></h5>
            </div>
            </div>
            </Card>
              </div>
             <div className="col-12 col-md-8">
             <Card>
             <div className="card mt-2"> 
             <div className="card-body mt-2">
             <h2 className="m-2">Repositories</h2>
             <Repos repos={repos} />
             <a href={`https://github.com/${login}?tab=repositories`} role="button" className="btn btn-secondary  btn-block mt-2 ">More </a>
             </div>
             </div>
             </Card>

             </div>                
            </div>
        </Fragment>;
}

const Card = styled.div`

  .card:hover {
    box-shadow: 0 5px 16px 0 rgba(86, 54, 255, 0.2 );
    transform: scale(1.03);
 },
 .card{
    box-shadow: 0 5px 16px 0 rgba(86, 54, 255, 0.1 );
    background-color: #f3f3f3 !important;
    transition: transform .2s;
    
}
`;

User.propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired
};
export default User
