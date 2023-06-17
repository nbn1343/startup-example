import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
// import { Play } from './play/play'
// import { useHistory } from 'react-router-dom';import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




export function Login() {
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
      checkUser();
    }, []);

  async function checkUser() {
    const userName = localStorage.getItem('userName');
    if (userName) {
      document.querySelector('#playerName').textContent = userName;
      setDisplay('loginControls', 'none');
      setDisplay('playControls', 'block');
    } else {
      setDisplay('loginControls', 'block');
      setDisplay('playControls', 'none');
    }
  }

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
    const userName = document.querySelector('#userName')?.value;
    const password = document.querySelector('#userPassword')?.value;
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (response.ok) {
      localStorage.setItem('userName', userName);
      navigate('/play');
      ;
    } else {
        const body = await response.json();
        const modalEl = document.querySelector('#msgModal');
        modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
        const msgModal = new bootstrap.Modal(modalEl, {});
        msgModal.show();
        setErrorMessage(`⚠ Error: ${body.msg}`);
    }
  }

  function play() {
    navigate('/play');
  }

  function logout() {
    localStorage.removeItem('userName');
    fetch(`/api/auth/logout`, {
      method: 'delete',
    }).then(() => (window.location.href = '/'));
  }

  async function getUser(email) {
    let scores = [];
    // See if we have a user with the given email.
    const response = await fetch(`/api/user/${email}`);
    if (response.status === 200) {
      return response.json();
    }

    return null;
  }

  function setDisplay(id, display) {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = display;
    }
  }

  return (
    <main>
      <h1 className="login-btn">Welcome!</h1>
      <div id="loginControls" style={{ display: 'none' }}>
        <div className="input-group mb-3">
          <span className="input-group-text">@</span>
          <input className="form-control" type="text" id="userName" placeholder="your@email.com" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">🔒</span>
          <input className="form-control" type="password" id="userPassword" placeholder="password" />
        </div>
        <button type="button" className="btn btn-primary" onClick={loginUser}>
          Login
        </button>
        <button type="button" className="btn btn-primary" onClick={createUser}>
          Create
        </button>
      </div>
      <div id="playControls" style={{ display: 'none' }}>
        <div id="playerName" />
        <button type="button" className="btn btn-primary" onClick={play}>
          Play
        </button>
        <button type="button" className="btn btn-secondary" onClick={logout}>
          Logout
        </button>
      </div>
      {/* Error dialog */}
      <div className="modal fade" id="msgModal" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content text-dark">
            <div className="modal-body">{errorMessage}</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="quote" className="quote-box bg-light text-dark" />
      <div id="picture" className="picture-box" />
    </main>
  );
}
