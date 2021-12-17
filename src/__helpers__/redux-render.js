import createSagaMiddleware from '@redux-saga/core';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';

export default function renderWithRedux(component, reducer, saga) {
    const sagaMiddleware = createSagaMiddleware(saga);

    const store = createStore(combineReducers(reducer), applyMiddleware(sagaMiddleware)) 

    sagaMiddleware.run(saga);

    return {
        ...render(<Provider store={store}>{component}</Provider>),
    }
}