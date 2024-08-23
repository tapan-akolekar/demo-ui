import React from 'react';

const Navigation = () => {
    return (
        <div>
                 <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">Navbar</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav> 
        </div>
    );
};

export default Navigation;