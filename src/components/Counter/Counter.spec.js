import { cleanup, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { runSaga } from 'redux-saga';
import api from '../../services/api';
import counter from '../../store/ducks/counter';
import { randomNumber } from '../../store/ducks/counter/sagas';
import rootSaga from '../../store/ducks/rootSaga';
import Counter from './Conter';
import renderWithRedux from '../../__helpers__/redux-render';

afterEach(cleanup);

global.fetch = require("jest-fetch-mock");

describe('Counter', () => {
    it('deve exibir contador', () => {
        const { getByTestId } = renderWithRedux(<Counter />, { counter }, rootSaga)
        expect(getByTestId('count').innerHTML).toEqual('0');
    });
    
    it('deve aumentar valor', () => {
        const { getByText, getByTestId } = renderWithRedux(<Counter />, { counter }, rootSaga)
        fireEvent.click(getByText('+'))
    
        expect(getByTestId('count').innerHTML).toEqual('1');
    });
    
    it('deve diminuir valor', () => {
        const { getByText, getByTestId } = renderWithRedux(<Counter />, { counter }, rootSaga)
        fireEvent.click(getByText('-'))
    
        expect(getByTestId('count').innerHTML).toEqual('-1');
    });
    
    it('deve buscar um numero aleatorio via chamada API', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({ json: () => Promise.resolve([9]) }))
  
        const { getByText, getByTestId } = renderWithRedux(<Counter />, { counter }, rootSaga);
        fireEvent.click(getByText('random number'));
        
        const dispatched = [];
        await runSaga({
            dispatch: (action) => dispatched.push(action),
        }, randomNumber);
    
        await waitFor(() => {
            expect(getByTestId('count').innerHTML).toEqual('9')
        });

        
    });
});
