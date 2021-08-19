import React from 'react';
import im from './img/img1.png';

const header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid">
                    <div ><a className="navbar-brand text-white" href="#"><h1>Axiom</h1><h6>SHIP MANAGER</h6></a></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-white mt-3 mx-3" style={{width:'2erm'}} aria-current="page" href="#">
                                <i className="fa fa-phone"  aria-hidden="true"></i></a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link text-white mt-3" href="#"><i className="fa fa-user" aria-hidden="true"></i></a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#">
                                <img className="  mt-2 rounded-circle" style={{width:'2rem',height:'2rem'}} src={im} alt="img" /></a>
                            </li>
                        </ul>
                            <form className="d-flex">
                                <input className="form-control me-2 text-secondary" type="search" placeholder="QUICK QUOTE" aria-label="Search" />
                            </form>
                </div>
         </div>
</nav>
        </>
            );
}
            export default header;