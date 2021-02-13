import React from 'react';
import '../App.css';

function Header() {
    return (
        
     <header>
        <div className="fluid-container header-style"> 
            <div className="row">
                <div className="col-1">
                 <div className="icon1 text-center">A</div>
                </div>
                <div className="col-4">
                  <i className="fa fa-github" aria-hidden="true"></i>My First Bot
                </div>
                <div className="col-5">                  
                </div>
                <div className="col-2">
                 username
                </div>
            </div>
        </div>
    </header>

    )
}

export default Header
