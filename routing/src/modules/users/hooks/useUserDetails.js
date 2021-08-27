import { useEffect, useState } from 'react';
import { getUserDetails } from '../services/usersService';

export default function useUserDetails(id) {
    const [details, setDetails] = useState(null);

    useEffect(() => fetchUser(), [id]);

    function fetchUser() {
        getUserDetails(id).then(setDetails);
    }

    return { details, fetchUser };
}
