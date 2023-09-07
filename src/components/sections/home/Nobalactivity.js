import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import WOW from 'wow.js';
import 'animate.css';


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
            <h5 className="text-center pt-5">M2</h5>
            <h2 className='title text-center pb-4'>Premium Desi Urad Chakki Dall </h2>
            {/* <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p> */}

            <div class="why-choose-section">
                    <div class="container">
                        <div class="row justify-content-between align-items-center pb-5">
                            <div class="col-lg-6">
                                <h4 class="section-title1">M2 Highlights</h4>
                                <div class="row my-5">
                                    <div class="col-6 col-md-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                                        <div class="feature d-flex align-items-center">
                                            <div class="icon">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/home/Nutritional.png"} alt="Image" class="" style={{height:'50px'}}/>
                                            </div>
                                            <div className='mt-4'>
                                              <h5>Superior Quality</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-6 col-md-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                                    <div class="feature d-flex align-items-center ">
                                            <div class="icon">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/home/Nutritional.png"} alt="Image" class="" style={{height:'50px'}}/>
                                            </div>
                                            <div className='mt-4'>
                                              <h5>Superior Quality</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-6 col-md-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                                    <div class="feature d-flex align-items-center">
                                            <div class="icon">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/home/Nutritional.png"} alt="Image" class="" style={{height:'50px'}}/>
                                            </div>
                                            <div className='mt-4'>
                                              <h5>Superior Quality</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-6 col-md-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                                    <div class="feature d-flex align-items-center">
                                            <div class="icon">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/home/Nutritional.png"} alt="Image" class="" style={{height:'50px'}}/>
                                            </div>
                                            <div className='mt-4'>
                                              <h5>Superior Quality</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6 col-md-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                                    <div class="feature d-flex align-items-center">
                                            <div class="icon">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/home/Nutritional.png"} alt="Image" class="" style={{height:'50px'}}/>
                                            </div>
                                            <div className='mt-4'>
                                              <h5>Superior Quality</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6 col-md-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                                    <div class="feature d-flex align-items-center">
                                            <div class="icon">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/home/Nutritional.png"} alt="Image" class="" style={{height:'50px'}}/>
                                            </div>
                                            <div className='mt-4'>
                                              <h5>Superior Quality</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6 col-md-6 wow animate__animated animate__fadeInUp " data-wow-delay="0.9s">
                                    <div class="feature d-flex align-items-center">
                                            <div class="icon">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/home/Nutritional.png"} alt="Image" class="" style={{height:'50px'}}/>
                                            </div>
                                            <div className='mt-4'>
                                              <h5>Superior Quality</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6 col-md-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.9s">
                                    <div class="feature d-flex align-items-center">
                                            <div class="icon">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/home/Nutritional.png"} alt="Image" class="" style={{height:'50px'}}/>
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
                                    <img src={process.env.PUBLIC_URL + "/assets/img/prods-sm/tenali-double-horse-m2-bag.png"} alt="Image" class="img-fluid" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
          </div>
        );
    }
}

export default Nobalactivity;