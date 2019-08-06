import React, { Fragment, Component } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Repos from '../repos/Repos';
import styled from 'styled-components';



export class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login);
    }
    static propTypes = {
        loading: PropTypes.bool.isRequired,
        user: PropTypes.object.isRequired,
        repos: PropTypes.array.isRequired,
        getUser: PropTypes.func.isRequired,
        getUserRepos: PropTypes.func.isRequired
    };
    render() {
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
        } = this.props.user;
 
        const {loading, repos} = this.props;
        
        if(loading) {
            return <Spinner/>       
        } 

        return <Fragment>
            <Link to='/' className='btn btn-secondary mt-1'> &lt; Back to Home</Link>
            <h5 className="mt-4">Hireable:  
        
            {hireable ? <i className="fas fa-check text-success mt-2 ml-2" /> : <i className="fas fa-times-circle text-danger mt-2 ml-2" /> }</h5> 

            <div className="row">
            
                <div className="col-12 col-md-4">
                <Card>
                <div className="card">
                <div className="text-center">
                    <img src={avatar_url} className="rounded-circle mt-3" style={{width: '140px'}} />
                    <h2 className="mt-2">{name}</h2>
                    <p className="mt-0">@{login}</p>
                    <p>Location: {location}</p>
                </div>
                <div className="mx-3">
                    {bio && (<Fragment>
                         <h3>Bio</h3>
                         <p>{bio}</p>
                    </Fragment>
                    )}
                    <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
                    <ul className="my-3">
                        <li>
                            {company && <Fragment>
                                <strong>Company: </strong> {company}
                            </Fragment>}
                        </li>
                        <li>
                        {blog && <Fragment>
                                <strong>Website: </strong> {blog}
                            </Fragment>}
                        </li>
                    </ul>
                </div>
            </div>
            </Card>
              </div>
            
            
             <div className="col-12 col-md-8">
             <Card>
             <div className="card">
          <div className="card-body text-center">
             <a href={`https://github.com/${login}?tab=followers`} role="button" className="btn btn-info m-2">
             Followers: <span className="badge badge-light">{followers}</span>
             </a>
             <a href={`https://github.com/${login}?tab=following`} role="button" className="btn btn-success m-2">
             Following: <span className="badge badge-light">{following}</span>
             </a>
             <a href={`https://github.com/${login}?tab=repositories`} role="button" className="btn btn-dark m-2">
             Public Repos: <span className="badge badge-light">{public_repos}</span>
             </a>
             <a href={`https://gist.github.com/${login}`} role="button" className="btn btn-danger m-2">
             Public Gists: <span className="badge badge-light">{public_gists} </span>
             </a>

             </div>
             <Repos repos={repos} />
             </div>
             </Card>
          
             </div>                
            </div>
        </Fragment>;
        
    };
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

export default User
