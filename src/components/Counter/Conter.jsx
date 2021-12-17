import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementConter, incrementConter, loadRandomNumber } from '../../store/ducks/counter/actions';

export default function Counter() {
    const dispatch = useDispatch();
    const { count } = useSelector(state => state.counter);

    function increment() {
        dispatch(incrementConter());
    }

    function decrement() {
        dispatch(decrementConter());
    }

    function getRamdomNumber() {
        dispatch(loadRandomNumber());
    }

    return (
        <div>
            <button onClick={decrement}>-</button>

            <span data-testid="count">{count}</span>

            <button onClick={increment}>+</button>

            <button onClick={getRamdomNumber}>random number</button>

        </div>
    )
}
