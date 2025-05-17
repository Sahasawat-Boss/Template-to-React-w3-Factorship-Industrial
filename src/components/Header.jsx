import React from 'react'

const Header = () => {
    return (
        <div>
            {/*---- Header ----*/}
            <header id="site-header" className="fixed-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light stroke py-lg-0">
                        <h1><a className="navbar-brand" href="index.html">
                            <span className="sub-color">Factor</span>ship
                        </a></h1>
                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                            <span className="navbar-toggler-icon fa icon-close fa-times"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav mx-lg-auto my-2 my-lg-0 navbar-nav-scroll">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="about.html">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="services.html">Services</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="contact.html">Contact</a>
                                </li>
                            </ul>
                            {/*---- /search ----*/}
                            <button id="trigger-overlay" className="searchw3-icon me-xl-4 me-lg-3" type="button"><i className="fas fa-search"></i></button>
                            {/*----  open/close  ----*/}
                            <div className="overlay overlay-slidedown">
                                <button type="button" className="overlay-close"><i className="fas fa-times"></i></button>
                                <nav className="w3l-formhny">
                                    <form action="#" method="GET" className="d-sm-flex search-header">
                                        <input className="form-control me-2" type="search" placeholder="Search here..." aria-label="Search" required />
                                        <button className="btn btn-style btn-secondary me-lg-3" type="submit">Search</button>
                                    </form>
                                </nav>
                            </div>
                            {/*---- //search ----*/}
                        </div>
                        {/*----  toggle switch for light and dark theme  ----*/}
                        <div className="mobile-position">
                            <nav className="navigation">
                                <div className="theme-switch-wrapper">
                                    <label className="theme-switch" for="checkbox">
                                        <input type="checkbox" id="checkbox" />
                                        <div className="mode-container">
                                            <i className="gg-sun"></i>
                                            <i className="gg-moon"></i>
                                        </div>
                                    </label>
                                </div>
                            </nav>
                        </div>
                        {/*----  //toggle switch for light and dark theme  ----*/}
                    </nav>
                </div>
            </header>
            {/*---- //Header ----*/}
        </div>
    )
}

export default Header