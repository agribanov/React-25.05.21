import { useEffect, useState } from 'react';

export default function useDate() {
    const [date, setDate] = useState(null);

    useEffect(() => {
        setTimeout(() => setDate(new Date()), 1000);
    }, []);

    return date;
}
