import React from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { useDispatch, useSelector } from 'react-redux';
import { decrementConter, incrementConter, loadRandomNumber } from '../../store/ducks/counter/actions';

export default function Counter() {
    let lista;

    const dispatch = useDispatch();
    const { count, error, loading } = useSelector(state => state.counter);
    const handler = useErrorHandler();

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

            <span data-testid="count">
                {loading ? '...' : count}
            </span>

            <button onClick={increment}>+</button>

            <button onClick={getRamdomNumber}>random number</button>

            {!!error && <p>Ocorreu um erro ao buscar numero</p>}
            {/* Forçar erro JS */}
            {/* {lista.map(a => (<p>{a.nome}</p>))} */}

        </div>
    )
}
