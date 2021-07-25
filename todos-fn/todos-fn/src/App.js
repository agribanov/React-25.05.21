import { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import useDate from './hooks/useData';

function App() {
    const [counts, setCounts] = useState(0);
    const date = useDate();

    useEffect(() => {
        console.log('Effect fired counts');

        return () => {
            console.log('effect cleared');
        };
    }, []);

    return (
        <>
            <TodoList />
        </>
    );
}

export default App;
