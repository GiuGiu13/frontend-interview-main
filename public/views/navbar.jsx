import React from 'react';

// I wanted to use tthe following, due the structure of the project it's not ideal
// import { useHistory } from "react-router-dom";


const Navbar = () => {

    return (
        <div className={'container-fluid Navbar'}>
            <div className={'row'}>
                <div className={'col-6'}>
                    <a  href="/">
                    <div className={'Navbar__THM-logo btn-hover'}></div> 
                    </a>
                </div>
                <div className={'col-6 Navbar__profile-picture-container'}>
                    <div className={'Navbar__profile-picture'}></div>
                </div>
            </div>

           
        </div>
    )
}

export default Navbar
