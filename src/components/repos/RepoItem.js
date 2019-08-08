import React from 'react';
import PropTypes from 'prop-types';


const RepoItem = ({repo}) => {
    return (
        <div className="card">
            <div className="card-body">
            <h5>
                <a href={repo.html_url}>{repo.name}</a>
                {repo.language ? <span className="badge badge-secondary ml-2">{repo.language} </span> : null }
                
                <small className="float-right"><i className="fas fa-star"></i> <span className="badge badge-secondary">{repo.stargazers_count}</span></small>
            </h5>
            
            
            
            <p >{repo.description} </p>
            <small className="float-right text-secondary">Last update: {repo.updated_at}</small>
            
            </div>
            
        </div>
    )
};

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
};

export default RepoItem;
