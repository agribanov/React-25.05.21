import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, set } from './store/actions/counter';

function App() {
    const { counts, updatedAt } = useSelector((state) => ({
        counts: state.counts,
        updatedAt: state.updatedAt,
    }));
    const dispatch = useDispatch();

    function handleChange(e) {
        dispatch(set(+e.target.value));
    }

    function handleInc() {
        dispatch(increment());
    }

    function handleDec() {
        dispatch(decrement());
    }

    return (
        <div>
            {String(new Date(updatedAt))}
            <button onClick={handleInc}>Inc</button>
            <button onClick={handleDec}>Dec</button>
            <input type="number" value={counts} onChange={handleChange} />
        </div>
    );
}

export default App;
