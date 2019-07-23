import React from "react";

function Header() {
    return (
        <>

        <div className="small-nav">
            <div className="container">
                <p className="text-right mb-0 p-1">Track Order</p>
            </div>
        </div>
        
        <div className="big-nav">
            <div className="container-fluid">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="#">
                        <img src="../../images/logo.png" alt="logo" className="logo-img"/>
                        <img src="../../images/eyes.png" alt="eyes"  className="eyes"/>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-lg-between" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Shop <i class="fa fa-angle-down ml-2"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Official merch <i class="fa fa-angle-down ml-2"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Joggers<sup>NEW</sup></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Exclusive<sup>NEW</sup></a>
                            </li>
                        </ul>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <input type="text" className="search" placeholder="What are u looking for"/>
                                    <i class="fa fa-search"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fa fa-user-o"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fa fa-shopping-cart"></i></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

    </>
        
    );
}

export default Header;