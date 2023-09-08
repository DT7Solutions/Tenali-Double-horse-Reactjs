import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import WOW from 'wow.js';
import 'animate.css';
import pdffile from '../../layouts/tdh-brouchure.pdf'

class Nobalactivity extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          isVisible: false,
        };
        this.sectionRef = React.createRef();
      }
     
    render() {
        return (
           
          <div className="container">
            <h5 className="text-center pt-5 text-danger">M2</h5>
            <h2 className='title text-center pb-4'>Premium Desi Urad Chakki Dall </h2>
            {/* <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p> */}

            <div class="why-choose-section">
                    <div class="container">
                        <div class="row justify-content-between align-items-center pb-5">
                            <div class="col-lg-7 ">
                                <h4 class="section-title1 px-3">M2 Highlights</h4>
                                <div class="row my-5">
                                    <div class="col-sm-12 col-md-6 col-lg-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                                        <div class="feature d-flex align-items-center">
                                            <div class="icon">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/banner/icons/Naturally-Processed.png"} alt="Image" class="" style={{height:'65px'}}/>
                                            </div>
                                            <div className='mt-4'>
                                              <h5>Naturally processed</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-12 col-md-6 col-lg-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                                    <div class="feature d-flex align-items-center ">
                                            <div class="icon px-2">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/banner/icons/Without-Hand-Touch.png"} alt="Image" class="" style={{height:'65px'}}/>
                                            </div>
                                            <div className='mt-4'>
                                              <h5>Packed without hand touch</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-12 col-md-6 col-lg-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                                    <div class="feature d-flex align-items-center">
                                            <div class="icon">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/banner/icons/Best-Harvesting-Fields.png"} alt="Image" class="" style={{height:'65px'}}/>
                                            </div>
                                            <div className='mt-4'>
                                              <h5>&nbsp;The best in quality, taste & yielding</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-12 col-md-6 col-lg-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                                    <div class="feature d-flex align-items-center">
                                            <div class="icon">          
                                                <img src={process.env.PUBLIC_URL + "/assets/img/banner/icons/fully-atomized-plant.png"} alt="Image" class="" style={{height:'65px'}}/>
                                            </div>
                                            <div className='mt-4'>
                                              <h5>Processed in a Fully Automated Plant</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-lg-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                                    <div class="feature d-flex align-items-center">
                                            <div class="icon">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/banner/icons/No-Added-Preservaties.png"} alt="Image" class="" style={{height:'65px'}}/>
                                            </div>
                                            <div className='mt-4'>
                                              <h5>No added preservatives</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-lg-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                                    <div class="feature d-flex align-items-center">
                                            <div class="icon">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/banner/icons/Best-Harvesting-Fields.png "} alt="Image" class="" style={{height:'65px'}}/>
                                            </div>
                                            <div className='mt-4'>
                                              <h5>Procurement from the best harvesting fields</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-lg-6 wow animate__animated animate__fadeInUp " data-wow-delay="0.9s">
                                    <div class="feature d-flex align-items-center">
                                            <div class="icon">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/banner/icons/Desi-Black-Gram.png"} alt="Image" class="" style={{height:'65px'}}/>
                                            </div>
                                            <div className='mt-4'>
                                              <h5>Processed with Desi Black Gram</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-lg-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.9s">
                                    <div class="feature d-flex align-items-center">
                                            <div class="icon">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/banner/icons/Best-Quality.png"} alt="Image" class="" style={{height:'65px'}}/>
                                            </div>
                                            <div className='mt-4'>
                                              <h5>Superior Quality</h5>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                    
                            </div>

                            <div class="col-lg-5">
                                <div class="img-wrap">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/banner/icons/m2-urad-chakki.png"} alt="Image" class="img-fluid" />
                                </div>
                                {/* <div className='m2-broacher'>
                                <a
                                    href={pdffile}
                                    download="tdh-brouchure.pdf"
                                    className="btn-custom btn-sm shadow-none"
                                    target="_blank"
                                    type="application/pdf"
                                    >
                                    Download Brochure
                                </a>
                    
                                </div> */}
                            </div>

                        </div>
                    </div>
                </div>
          </div>
        );
    }
}

export default Nobalactivity;