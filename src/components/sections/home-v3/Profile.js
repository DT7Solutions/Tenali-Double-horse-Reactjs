import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'magnific-popup';
import instaData from '../../../data/insta.json'; 

class PortfolioV2 extends Component {
  componentDidMount() {
   
    $('a[data-rel^=magnific]').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
      },
    });
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';

    return (
      <div className="ltn__gallery-area mt-5 mb-5">
         <div className="section-title-wrap section-header text-center">
                 <h5 className="custom-primary text-center">Get real-time updates on events </h5>
                                <h2 className="title text-center">That impact our world.</h2>
                               
                                </div>
        <div className="container">
          <div className="ltn__gallery-active row ltn__gallery-style-2 ltn__gallery-info-hide---">
            {instaData.map((item) => (
              <div
                key={item.id}
                className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12 " 
              >
                <div className="ltn__gallery-item-inner " >
                  <div className="ltn__gallery-item-img " >
                    <a href={publicUrl + item.imageUrl} data-rel="magnific:myCollection" >
                      <img src={process.env.PUBLIC_URL + item.imageUrl} alt="img" className="img-overflow overlay-image" />
                      <span className="ltn__gallery-action-icon">
                        <i className="fas fa-search" />
                      </span>
                    </a>
                     
                  </div>
                  <div className="ltn__gallery-item-info">
                    {/* <h4 className="go-top">
                      <Link to="/portfolio-details">Portfolio Link </Link>
                    </h4> */}
                    {/* <p>{item.caption}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div id="ltn__inline_description_1" style={{ display: 'none' }}>
            <h4 className="first">This content comes from a hidden element on that page</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis mi eu elit tempor
              facilisis id et neque. Nulla sit amet sem sapien. Vestibulum imperdiet porta ante ac
              ornare. Nulla et lorem eu nibh adipiscing ultricies nec at lacus. Cras laoreet
              ultricies sem, at blandit mi eleifend aliquam. Nunc enim ipsum, vehicula non pretium
              varius, cursus ac tortor.
            </p>
            <p>
              Vivamus fringilla congue laoreet. Quisque ultrices sodales orci, quis rhoncus justo
              auctor in. Phasellus dui eros, bibendum eu feugiat ornare, faucibus eu mi. Nunc
              aliquet tempus sem, id aliquam diam varius ac. Maecenas nisl nunc, molestie vitae
              eleifend vel.
            </p>
          </div>
          <div className="btn-wrapper text-center">
            <Link to="#" className="btn-custom primary mb-5">
              VIEW  MORE
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioV2;

