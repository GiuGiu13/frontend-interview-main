import React from 'react';
import Data from './data/content.json';
import Header from './views/header'; 
import Footer from './views/footer'; 

function Head() {
    return (
      <html>
        <head>
          <title>Cats Page</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" crossOrigin="anonymous"></link>
          <link rel="stylesheet" href="style.css" />
        </head>
        <body></body>
      </html>
    );
  }


const catsPage = () => {
    return (
        <>
            <Head />
 
            <div className={['catsPage__container']}>
              <Header />
              {/* <div className={'catsPage__main'}>
                <div className={'row catsPage__main-row'}>
                  <div className={'col-12 col-lg-4 catsPage__left'}>
                      <h2 className={'catsPage__left-title'}>{Data.courses[0].title}</h2>
                      <div className={'divider'}></div>
                      <h3 className={'catsPage__left-subtitle'}>{Data.courses[0].subtitle}</h3>
                      <div className={'catsPage__left-article'} dangerouslySetInnerHTML={{__html:Data.courses[0].article}}></div>
                  </div>
                  <div className={'col-12 col-lg-8 catsPage__right'}>
                    <div className={'catsPage__right-image'}
                        style={
                          {
                            backgroundImage: 'url(' + `./images/courses/${Data.courses[0].image}` + ')'
                          }
                        }>
                      </div>
                  </div>
                </div>
              </div> */}
              <Footer />
            </div>
        </>

    )
}

export default catsPage
