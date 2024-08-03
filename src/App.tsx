import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {   BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPage from './pages/searchPage/SearchPage';
import Categories from './pages/categories/Categories';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
		<Routes>
			<Route path="/" element={<SearchPage />} />
			<Route path="/categories" element={<Categories />} />
			<Route path="/profile" element={<Profile />} />
		</Routes>
	</BrowserRouter>
  );
}

export default App;
