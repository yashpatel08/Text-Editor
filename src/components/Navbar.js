import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-default navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="navbar-header ">  
          <a className="navbar-brand mx-2" href="/home">
            {props.title}
          </a>
          <ul className="nav nav-pills column">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href="/about" className="nav-link" >
               {props.aboutText}
              </a>  
            </li>
          </ul>
        </div>

           {/* multiple color palete */}
        {/* <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick={() => {props.toggleMode('primary')}} style={{height: '30px',width: '30px',cursor: 'pointer',border: '2px solid white' }}> </div>
          <div className="bg-danger rounded mx-2" onClick={() => {props.toggleMode('danger')}} style={{height: '30px',width: '30px',cursor: 'pointer',border: '2px solid white'}}> </div>
          <div className="bg-success rounded mx-2" onClick={() => {props.toggleMode('success')}} style={{height: '30px',width: '30px',cursor: 'pointer',border: '2px solid white'}}> </div>
          <div className="bg-warning rounded mx-2" onClick={() => {props.toggleMode('warning')}} style={{height: '30px',width: '30px',cursor: 'pointer',border: '2px solid white'}}> </div>
          <div className="bg-light rounded mx-2" onClick={() => {props.toggleMode('light')}} style={{height: '30px',width: '30px',cursor: 'pointer',border: '2px solid white'}}> </div>
          <div className="bg-dark rounded mx-2" onClick={() => {props.toggleMode('dark')}} style={{height: '30px',width: '30px',cursor: 'pointer',border: '2px solid white'}}> </div>
        </div> */}



      <div
          className={`form-check form-switch text-${
            props.mode === "light" ? "dark" : "light"} mx-3`}>
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            onClick={() => {props.toggleMode(null)}}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Toggle Mode
          </label> 
        </div> 


        {/* for green dark mode */}
        {/* <div className={`form-check form-switch text-${props.mode==='light' ? 'green' : 'light' } mx-3`}>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={props.toggleModeOthers }
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable Dark Green Mode
            </label>
          </div> */}
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li>
              <a href="/">{props.aboutText}</a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/">Link</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
