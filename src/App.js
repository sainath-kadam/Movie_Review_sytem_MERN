import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './tailwind.css';
import './App.css';


import CreateMovie from './components/CreateMovie';
import ShowMovieList from './components/ShowMovieList';
import ShowMovieDetails from './components/ShowMovieDetails';
import UpdateMovieInfo from './components/UpdateMovieInfo';
import  NavScrollExample from './components/Nav';
import FooterPage from './components/footer';
import HomePage from './components/HomePage';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <NavScrollExample/>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<Contact/>} />
          <Route path='/ShowMovieList' element={<ShowMovieList />} />
          <Route path='/create-movie' element={<CreateMovie />} />
          <Route path='/edit-movie/:id' element={<UpdateMovieInfo />} />
          <Route path='/show-movie/:id' element={<ShowMovieDetails />} />
        </Routes>
      </BrowserRouter>
      <FooterPage/>
      </div>
    );
  }
}

export default App;