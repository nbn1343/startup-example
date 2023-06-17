import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { Login } from './login/login'
import { Play } from './play/play'
import { Scores } from './scores/scores'
import { Chat } from './chat/chat'

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>
}


export default function App() {
    return (
    <BrowserRouter><body className="bg-secondary">
        <header>
            <div className="slider-title">
                <h2 className="text-bg-dark p-3">Slider
                </h2>      </div>

            <menu className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink className="nav-link text-bg-danger" aria-current="page" to="">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-bg-warning" aria-current="page" to="play">Play</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-bg-success" aria-current="page" to="scores">Scores</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-bg-primary" aria-current="page" to="Chat">Chat</NavLink>
                </li>
            </menu>
        </header>
<Routes>
          <Route path='/' element={<Login />} exact />
          <Route path='/scores' element={<Scores />} />
          <Route path='/play' element={<Play />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='*' element={<NotFound />} />
</Routes>
    <footer className='bg-dark text-light'>
        <p className="my-repo ">Nathan Neilson's Repository: <a href="https://github.com/nbn1343/startup-example"><button class="Git-btn">GitHub</button></a></p>
    </footer>
  </body>
  </BrowserRouter>
    )
}