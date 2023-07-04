import { useState } from 'react'
import './Counter.css';

// const Counter = () => {
//     const [count, setCount] = useState(0)


//   return (
//     <div>
//         <p>You clicked {count} times</p>
//         <button onClick={() => setCount(count + 1)}>Counter</button>
//     </div>
//   )
// }

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        };
        };

        const reset = () => {
            setCount(0);
        };

        return (
            <div>
                <h1 className="counter-text">You clicked <span className='count'> {count} </span> times</h1>
                <button className='counter-button increment' onClick={increment}>ADD</button>
                <button className="counter-button reset" onClick={reset}>Reset</button>
                <button className='counter-button decrement'  onClick={decrement}>DEC</button>

            </div>
        );
    };
    // ReactDOM.render{<Counter/>, document.getElementById}
    export default Counter