//components
// ../ currentfolder ke bahar dekh re ho
// ./ if in same folder

import NavBar from './components/NavBar';
import Home from './components/Home';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

import {BrowserRouter, Route, Routes } from 'react-router-dom'; //enable router

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
       <Route path="/" element = { <Home/> } />
       <Route path="/all" element = { <AllUsers/> } />
       <Route path="/add" element = { <AddUser/> } />
       <Route path="/edit/:id" element = {<EditUser/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
