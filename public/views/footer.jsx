import React from 'react';

const footer = () => {
    return (
        <div className={'Footer container-fluid'}>
            <div className={'row'}>
                <div className={'col-6 col-md-8 Footer__copyright-container'}>
                    <p className={'Footer__copyright'}>Copyright</p>
                </div>
                <div className={'col-6 col-md-4 Footer__btn-container'}>
                    <a className={'Footer__btn btn-hover'} href="">
                        <div className={'Footer__btn-icon Footer__back-btn'}></div>
                    </a>
                    <a className={'Footer__btn btn-hover'} href="">
                        <div className={'Footer__btn-icon Footer__next-btn'}></div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default footer
