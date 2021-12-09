import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { loadRequest } from '../../store/ducks/repositories/actions'

const RepositoryList = () => {
    const { data: repositories, error, loading } = useSelector(state => state.repositories);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(loadRequest('users/marcos012/repos'));
    }, [])

    return (
        <div>
            <h1>Lista de repositorios</h1>
            <ul>
                {repositories.map(repo => (
                    <li key={repo.id}>
                        {repo.name}
                    </li>
                        
                ))}
            </ul>
            {error && <span>Erro canalha</span>}
            {loading && <span>loading... </span>}
        </div>
    );
}

export default RepositoryList;