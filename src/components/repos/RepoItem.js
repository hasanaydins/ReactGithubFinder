import React from 'react';
import PropTypes from 'prop-types';


const RepoItem = ({repo}) => {
    return (
        <div className="card">
            <div className="card-body">
            <h5>
                <a href={repo.html_url}>{repo.name}</a>
                <span class="badge badge-secondary ml-2">{repo.language} </span> 
                <small className="float-right"><i class="fas fa-star"></i> <span class="badge badge-secondary">{repo.stargazers_count}</span></small>
            </h5>
            
            <p className="float-right">{repo.updated_at}</p>
            
            <p >{repo.description} </p>
            
            </div>
            
        </div>
    )
};

RepoItem.propTypes = {
    repo: PropTypes.array.isRequired
};

export default RepoItem;
