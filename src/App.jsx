import React from 'react';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import './App.css'
import Home from './pages/Home-page/home-page';
import Question from './pages/Question/Question';
import Repos from './pages/Repos/repos';
import RepoDetailsPage from './pages/repo/repo'




function App() {

  return (
    <section>
       <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Question' element={<Question />} />
          <Route path='/Repos' element={<Repos/>} />
          <Route path="/Repos/:name" element={<RepoDetailsPage />} />
          <Route path='*' element={<h1>Error 404</h1>}/>
        </Routes>
       </Router>
    </section>
  )
}

export default App
