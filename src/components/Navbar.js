import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <div>
         <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a href="/" className="nav-link active" aria-current="page">{props.section1}</a>
          </li>
          <li className="nav-item">
            <a href="/About-Me" className="nav-link active" aria-current="page" >{props.section2}</a>
          </li>
          <li className="nav-item">
            <a href="/skills" className="nav-link active" aria-current="page" >{props.section3}</a>
          </li>
          <li className="nav-item">
            <a href="/projects" className="nav-link active" aria-current="page" >{props.section4}</a>
          </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" for="flexSwitchCheckDefault">Enable DarkMode</label>
          </div>
      </div>
    </div>
  </nav>
    </div>
  )
}

Navbar.propTypes = {
    title : PropTypes.string,
    section1 : PropTypes.string,
    section2 : PropTypes.string,
    section3 : PropTypes.string,
    section4 : PropTypes.string,
}

Navbar.defaultProps = {
    title : 'Set your title',
    section1 : 'Text1',
    section2 : 'Text2',
    section3 : 'Text3',
    section4 : 'Text4',
}