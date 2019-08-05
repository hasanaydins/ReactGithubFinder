import React, { Fragment, Component } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


export class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login)
    }
    static propTypes = {
        loading: PropTypes.bool.isRequired,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired
    }
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

        const {loading} = this.props;
        
        if(loading) {
            return <Spinner/>       
        } 

        return <Fragment>
            <Link to='/' className='btn btn-secondary mt-1'> &lt; Back to Home</Link>
            <h5 className="mt-4">Hireable:  
            {hireable ? <i className="fas fa-check text-success mt-2 ml-2" /> : <i className="fas fa-times-circle text-danger mt-2 ml-2" /> }</h5> 

            <div className="row">
            <div className="card col-12 col-md-4 " style={userStyle}>
                <div className="text-center">
                    <img src={avatar_url} className="rounded-circle mt-3" style={{width: '150px'}} />
                    <h1>{name}</h1>
                    <p>@{login}</p>
                    <p>Location: {location}</p>
                </div>
                <div>
                    {bio && (<Fragment>
                         <h3>Bio</h3>
                         <p>{bio}</p>
                    </Fragment>
                    )}
                    <a href={html_url} className="btn btn-dark my-1 mb-2">Visit Github Profile</a>
                    <ul>
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
             <div className="col-12 col-md-8">
             
                <div className="card mr-2">
                <div className="card-body text-center" style={userStyle}>

             <button type="button" className="btn btn-info">
             Followers: <span className="badge badge-light">{followers}</span>
             </button>
             <button type="button" className="btn btn-success ml-2">
             Following: <span className="badge badge-light">{following}</span>
             </button>
             <button type="button" className="btn btn-dark ml-2">
             Public Repos: <span className="badge badge-light">{public_repos}</span>
             </button>
             <button type="button" className="btn btn-danger ml-2  ">
             Public Gists: <span className="badge badge-light">{public_gists}</span>
             </button>

             </div>
             </div>
             </div>                
            </div>
        </Fragment>;
        
    };
}
const userStyle = {
    boxShadow: '0 8px 12px 0 rgba(87, 87, 87, 0.17)',
    backgroundColor: 'rgb(239, 239, 239)'
}
export default User
