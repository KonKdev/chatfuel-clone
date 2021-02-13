import React from 'react';
import '../App.css';

 function Button(props) {
    return (
        <div>         
         <div className="unTitled-block text-center">
            <a className="link" href="/"><span className="block-style">{props.name}</span></a>
        </div>
       
    </div>
    );
}

export default Button;