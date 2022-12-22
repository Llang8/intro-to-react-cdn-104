import logo from './logo.svg';
import './App.css';
import { useState, useContext } from 'react';
import Counter from './components/Counter';
import Students from './components/Students';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Pokemon from './components/Pokemon';
import Blog from './views/Blog';
import BlogSingle from './views/BlogSingle'
import { AuthContext } from './contexts/AuthProvider'

export default function App() {
  const { login, logout, user } = useContext(AuthContext)

  return (
    <div className="App">
      <h2>Loggedin User: { user.username }</h2>
      <BrowserRouter>
        <nav>
          <ul>
            {/* li*2>a */}
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/students">Students</Link></li>
            <li><Link to="/pokemon">Pokemon</Link></li>
            {
              (user.loggedIn) ?
              <li><button onClick={logout}>Logout</button></li> :
              <li><button onClick={login}>Login</button></li>
            }
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/students" element={<Students />} />
          <Route path="/pokemon" element={<Pokemon />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/blog">
            <Route path=":uid">
              <Route path=":id" element={<BlogSingle />} />
            </Route>
            <Route path="" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
