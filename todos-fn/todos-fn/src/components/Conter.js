import React, { useCallback, useEffect, useMemo, useState } from 'react';

function Conter() {
    const [counts, setCounts] = useState(0);
    const [value, setValue] = useState(2);

    // const obj = useMemo(() => ({ value }), [value]);
    // const cb = () => console.log('cb', counts);
    // const cb = useCallback(() => console.log('cb', counts), [counts]);

    // useEffect(() => {
    //     const intervalId = setInterval(
    //         () => setCounts((value) => value + 1),
    //         1000
    //     );

    //     return () => {
    //         clearInterval(intervalId);
    //     };
    // }, []);

    return (
        <>
            <div onClick={() => setValue(value + 1)}>Result: {value}</div>
            <div onClick={() => setCounts(counts + 1)}>Counts: {counts}</div>
        </>
    );
}

export default Conter;

function progression(n) {
    console.log('called', n);
    return n === 1 ? 1 : n * progression(n - 1);
}
