import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
        <div >
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark border border-danger">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><strong>Movie Market</strong></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link " target="_blank" aria-current="page" rel="noopener noreferrer"  href="https://111.90.159.132/hollywood-movies/">Hollywood</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" target="_blank" rel="noopener noreferrer"  href="https://111.90.159.132/bollywood-movies/hindi-movies/">Bollywood</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="https://111.90.159.132/year/2022/" rel="noopener noreferrer"  target="_blank">Latest Movies</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Anime
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" target="_blank" rel="noopener noreferrer"  href="https://anime-world.in/category/pokemon/">Pokemon</a></li>
                        <li><a className="dropdown-item" target="_blank" rel="noopener noreferrer"  href="https://anime-world.in/category/doraemon/">Doremon</a></li>
                        <li><a className="dropdown-item" target="_blank" rel="noopener noreferrer"  href="https://anime-world.in/category/ben-10/">Ben10</a></li>
                        <li><a className="dropdown-item" target="_blank" rel="noopener noreferrer"  href="https://anime-world.in/category/shinchan/">Shinchan</a></li>
                        <li><a className="dropdown-item" target="_blank" rel="noopener noreferrer"  href="https://anime-world.in/category/miraculous/">Miraculous</a></li>
                        <li><a className="dropdown-item" target="_blank" rel="noopener noreferrer"  href="https://anime-world.in/category/dragon-ball/">Dragon Ball</a></li>
                    </ul>
                    </li>                    
                </ul>
                </div>
            </div>
            </nav>            
        </div>
    )
  }
}

export default Navbar
