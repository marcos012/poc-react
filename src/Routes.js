import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Counter from './components/Counter/Conter';
import RepositoryList from './components/RepositoryList';
import Sidebar from './components/Sidebar';
import Video from './components/Video';

const AppRouter = () => {
    function ErrorFallback({error, resetErrorBoundary}) {
        return (
          <div role="alert">
            <p>Ocorreu um erro:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Tentar novamente</button>
          </div>
        )
      }
    
      function handler(error, info) {
        console.log(error, info);
      }
    
    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onError={handler}
        >
        <BrowserRouter >
            <Routes>
                <Route  exact path="/" element={<Counter />} />
                <Route  exact path="/repos" element={<RepositoryList/>} />
                <Route
                    path='/video'
                    element={(
                        <div>
                            <Video />
                            <Sidebar />
                        </div> 
                    )}
                />
            </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    )
}

export default AppRouter;