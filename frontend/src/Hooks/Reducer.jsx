import { useReducer } from "react"
let initialValue = 0

const counter = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'RESET':
            return 0
        default:
            return state
    }
}

// Initial state for like/dislike
const initialLikeDislike = { like: 0, dislike: 0 }

const counter1 = (state, action) => {
    switch (action.type) {
        case 'LIKE':
            return { ...state, like: state.like + 1 }
        case 'DISLIKE':
            return { ...state, dislike: state.dislike + 1 }
        case 'RESET':
            return initialLikeDislike
        default:
            return state
    }
}

const Reducer = () => {
    const [count, dispatch] = useReducer(counter, initialValue);
    const [count1, dispatch1] = useReducer(counter1, initialLikeDislike);

    return (
        <div>
            <h2>Counter Example</h2>
            <h3>Count: {count}</h3>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT +</button>
            <br /> <br />
            <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT -</button>
            <br /> <br />
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>

            <hr />

            <h2>Like/Dislike Example</h2>
            <h3>Like: {count1.like}</h3>
            <h3>Dislike: {count1.dislike}</h3>
            <button onClick={() => dispatch1({ type: 'LIKE' })}>LIKE👍</button>
            <br /> <br />
            <button onClick={() => dispatch1({ type: 'DISLIKE' })}>DISLIKE👎</button>
            <br /> <br />
            <button onClick={() => dispatch1({ type: 'RESET' })}>Reset</button>

            <hr />
        </div>
    );
};

export default Reducer