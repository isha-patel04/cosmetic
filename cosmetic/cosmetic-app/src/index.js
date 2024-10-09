import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './Layout';
import Add from './Add';
import GetAll from './GetAll';
import Update from './Update';
import Home from './Home';
import GetById from './GetById';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />} >
    <Route index element={<Home />} />
    <Route path='/Add' element={< Add/>}/>
    <Route path='/Home' element={< Home/>}/>
    <Route path='/GetAll' element={<GetAll/>}/>
    <Route path='/Update/:id' element={<Update/>}/>
    <Route path='/GetAll/:id' element={< GetById/>}/>
    
    </Route>
  </Routes>
  </BrowserRouter>
);


