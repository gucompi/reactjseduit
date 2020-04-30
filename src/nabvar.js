import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    //Cuando llamemos esta Clase, va a ejecutar el metodo render para RENDERIZAR.
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <NavLink className="nav-link " exact activeStyle={{fontWeight: 'bold',color: 'red'}} to="/">
                  Home 
                </NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link"  activeStyle={{fontWeight: 'bold',color: 'red'}} to="/table/33">
                    Table
                  </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Ropa
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink className="dropdown-item" to="/ropa/niños" activeStyle={{fontWeight: 'bold',color: 'red'}}>Niños</NavLink>
                  <NavLink className="dropdown-item" to="/ropa/jovenes" activeStyle={{fontWeight: 'bold',color: 'red'}}>Jovenes</NavLink>
                  
                  <div className="dropdown-divider" />
                  <NavLink className="dropdown-item" to="/ropa">Todos</NavLink>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>

      </React.Fragment>
    )
  }
}
