import MainHtml from '../features/html/components/Main/MainHtml';

 import MainCss from '../features/css/components/main/MainCss';
 
 import MainJs from '../features/js/components/Main/MainJs';
 
 import MainPhp from '../features/php/components/Main/MainPhp';
 
 import MainBootstrap from '../features/Bootstrap/components/main/MainBootstrap';

import MainPython from '../features/python/components/main/MainPython';

import MainReact from '../features/react/components/Main/MainReact';

import MainVue from '../features/vue/components/main/MainVue';

import React from 'react';

import { Routes, Route } from 'react-router-dom';

import HomePage from '../Pages/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path ="/home" element ={<HomePage /> } />
      
      <Route path="/frontend/html" element={<MainHtml />} />

      <Route path="/frontend/css" element={<MainCss />} />
      
        <Route path="/frontend/js" element={<MainJs />} />
  
          <Route path="/backend/php" element={<MainPhp />} />
          
           <Route path="/frontend/bootstrap" element={<MainBootstrap />} /> 
           
           <Route path="/frontend/react" element={<MainReact />} />   
  
             <Route path="/frontend/vue" element={<MainVue />} />  
      
           <Route path="/backend/python" element={<MainPython />} />  
                   
    </Routes>
  );
};


export default AppRoutes;
