import React from 'react';
import { useParams, useHistory, withRouter } from 'react-router-dom';
import useUserDetails from '../hooks/useUserDetails';

function UserDetailsPage({
    history,
    match: {
        params: { id },
    },
}) {
    const { details } = useUserDetails(id);

    function onBackClick() {
        history.goBack();
        // history.push('/about');
    }

    return (
        <div>
            <h2>User details</h2>
            <div>Name: {details.name || 'Anonymous'}</div>
            {/* <Link to="/users">Back</Link> */}
            <button onClick={onBackClick}>Back</button>
        </div>
    );
}

export default withRouter(UserDetailsPage);
