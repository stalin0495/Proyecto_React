import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
import NotFound from './NotFound';
import Posts from './Posts';


function RoutesPages() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="posts" element={<Posts />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}


export default RoutesPages;