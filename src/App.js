import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
  // import your route components too

import ListPage from './routes/ListPage';
import ViewPage from './routes/ViewPage';
import WritePage from './routes/WritePage';

function App() {
      return (
       <Router>
           <Routes>
               <Route path="/" element={<ListPage />}></Route>
               <Route path="/write" element={<WritePage />}></Route>
               <Route path="/view/:id" element={<ViewPage />}></Route>
           </Routes>
       </Router>
      );
    }
    
    export default App;