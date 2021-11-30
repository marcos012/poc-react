import React, { useEffect } from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RepositoryActions from '../../store/ducks/repositories/actions'

const RepositoryList = ({ repositories, loading, error, loadRequest }) => {
    useEffect(() => {
        loadRequest();
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

const mapStateToProps = state => ({
    repositories: state.repositories.data,
    error: state.repositories.error,
    loading: state.repositories.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(RepositoryActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);