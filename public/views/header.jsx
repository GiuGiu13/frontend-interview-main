import React from 'react';

const Header = () => {

    return (
        <div className={'container-fluid Header'}>
            <div className={'row'}>
                <div className={'col-6'}>
                    <a  href="/">
                    <div className={'Header__THM-logo btn-hover'}></div> 
                    </a>
                </div>
                <div className={'col-6 Header__profile-picture-container'}>
                    <div className={'Header__profile-picture'}></div>
                </div>
            </div>

           
        </div>
    )
}

export default Header
