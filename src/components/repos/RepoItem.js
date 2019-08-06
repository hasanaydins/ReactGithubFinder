import React from 'react';
import PropTypes from 'prop-types';


const RepoItem = ({repo}) => {
    return (
        <div className="card">
            <div className="card-body">
            <h5>
                <a href={repo.html_url}>{repo.name}</a>
            </h5>
            </div>
            
        </div>
    )
};

RepoItem.propTypes = {
    repo: PropTypes.array.isRequired
};

export default RepoItem;
