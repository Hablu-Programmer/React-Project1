import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src="./logo.png" alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto gap-3  ">
                <li className="nav-item">
                <a className="nav-link"  href="#">Used Cars</a>
                </li>
                <li className="nav-item">
                <a className="nav-link font-weight-bold " href="#">Auctions </a>
                </li>
                <li className="nav-item">
                <a className="nav-link font-weight-bold ">New Cars</a>
                </li>
                <li className="nav-item">
                <a className="nav-link font-weight-bold  ">Sell Cars</a>
                </li>
                <li className="nav-item">
                <a className="nav-link font-weight-bold ">Local Dealers</a>
                </li>
                <li className="nav-item">
                <a className="nav-link font-weight-bold  ">Support</a>
                </li>
                <li className="nav-item SignUp">
                <a className="nav-link font-weight-bold "> <i className="bi bi-person-fill"></i> <span>Sign Up</span></a> 
                </li>
    
            </ul>
            </div>
        </div>
        </nav>

    </div>
  )
}

export default Navbar