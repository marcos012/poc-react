import React from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import RepositoryList from './components/RepositoryList';
import Sidebar from './components/Sidebar';
import Video from './components/Video';

const AppRouter = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route  exact path="/" element={<RepositoryList/>} />
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
    )
}

export default AppRouter;