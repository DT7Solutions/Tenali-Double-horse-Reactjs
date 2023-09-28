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
           
          <div className="container-fluid  notabule-sec" style={{backgroundImage:`url(${process.env.PUBLIC_URL} + /assets/img/banner/icons/ganesh-bg.jpg)`}}>
            {/* <h5 className="text-center pt-5 text-danger">Vinayaka Chaturthi</h5> */}
            <h2 className='title text-center pb-4'>Premium Desi Urad Chakki Dall </h2>
            {/* <h2 className='title text-center pb-4'>Seed Ganesha </h2> */}
            {/* <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p> */}

            <div class="why-choose-section ">
                    <div class="container">
                        <div class="row d-flex justify-content-between align-items-center pb-5">
                            <div class="col-lg-7 ">
                                <h4 class="section-title1 text-center">Step By Step Process</h4>
                                <div class="row d-flex my-5">
                                  <div className='col-lg-6 border-right'>
                                    <div class="col-sm-12 col-md-6 col-lg-12 d-flex  wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                                       
                                            <div class="m-icon col-lg-4 ">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/mtwo/1.png"} alt="Image"  />
                                            </div>
                                            <div className=' col-lg-8 '>
                                              <h6>Naturally Processed</h6>
                                          
                                        </div>
                                    </div>

                                    <div class="col-sm-12 col-md-6 col-lg-12 d-flex mt-2 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                                    
                                            <div class="m-icon col-lg-4">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/mtwo/3.png"} alt="Image"  />
                                            </div>
                                            <div className=' col-lg-8'>
                                              <h6>Packed Without Hand Touch</h6>
                                           
                                        </div>
                                    </div>

                                    <div class="col-sm-12 col-md-6 col-lg-12 d-flex mt-2 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                                    
                                            <div class="m-icon col-lg-4">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/mtwo/6.png"} alt="Image"  />
                                            </div>
                                            <div className=' col-lg-8'>
                                              <h6>The Best In Quality, Taste</h6>
                                            </div>
                                      
                                    </div>

                                    <div class="col-sm-12 col-md-6 col-lg-12 d-flex mt-2 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                                   
                                            <div class="m-icon col-lg-4 ">          
                                                <img src={process.env.PUBLIC_URL + "/assets/img/mtwo/7.png"} alt="Image"  />
                                            </div>
                                            <div className='col-lg-8 '>
                                              <h6>Processed In a Fully Automated Plant</h6>
                                            </div>
                                       
                                    </div>
                                    </div> 
                                    <div className='col-lg-6'>
                                    <div class="col-sm-12 col-md-6 col-lg-12 d-flex  mt-2 wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                                   
                                            <div class="m-icon col-lg-4">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/mtwo/2.png"} alt="Image" />
                                            </div>
                                            <div className='col-lg-8'>
                                              <h6>No Added Preservatives</h6>
                                            </div>
                                       
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-lg-12 d-flex mt-sm-2 wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                                    
                                            <div class="m-icon col-lg-4">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/mtwo/5.png"} alt="Image"  />
                                            </div>
                                            <div className=' col-lg-8'>
                                              <h6>Optimal Harvest Sourcing</h6>
                                            </div>
                                       
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-lg-12 d-flex  mt-2 wow animate__animated animate__fadeInUp " data-wow-delay="0.9s">
                                   
                                            <div class="m-icon  col-lg-4 ">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/mtwo/9.png"} alt="Image"  />
                                            </div>
                                            <div className=' col-lg-8'>
                                              <h6>Processed With Desi Black Gram</h6>
                                            </div>
                                       
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-lg-12 d-flex  mt-2 wow animate__animated animate__fadeInUp"   data-wow-delay="0.9s">
                                  
                                            <div class="m-icon col-lg-4">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/mtwo/8.png"} alt="Image" />
                                            </div>
                                            <div className='col-lg-8 '>
                                              <h6>Superior Quality</h6>
                                            </div>
                                       
                                    
                                    </div>
                                    </div>
                                </div>
                                 {/* <div class="row d-flex my-5">
                                  <div className='col-lg-6'>
                                    <div class="col-sm-12 step-1  col-md-6 col-lg-12 d-flex mb-2 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                                       
                                            <div class="m-icon ">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/banner/icons/setp-1.png"} alt="Image" className="pr-2 " style={{height:'160px'}}/>
                                            </div>
                                            
                                    </div>

                                    <div class="col-sm-12  step-2 col-md-6 col-lg-12 d-flex mb-2 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                                    
                                            <div class="m-icon  px-2 ">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/banner/icons/setp-3.png"} alt="Image" className="pr-2 " style={{height:'160px'}}/>
                                            </div>
                                           
                                    </div>
                                    <div class="col-sm-12 step-3 col-md-6 col-lg-12 d-flex mb-2 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                                       
                                            <div class="m-icon ">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/banner/icons/step-3.png"} alt="Image" className="pr-2 " style={{height:'135px'}}/>
                                            </div>
                                            <div className='mt-4'>
                                              <h6>step-3</h6>
                                          
                                        </div>
                                    </div>

                                    <div class="col-sm-12 step-4 col-md-6 col-lg-12 d-flex mb-2 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                                    
                                            <div class="m-icon ">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/banner/icons/step-4.png"} alt="Image" className="pr-2 " style={{height:'120px'}}/>
                                            </div>
                                            <div className='mt-2'>
                                              <h6>step-4</h6>
                                           
                                        </div>
                                    </div>

                                   
                                    </div> 
                                    <div className='col-lg-6'>
                                    <div class="col-sm-12  col-md-6 col-lg-12 d-flex  mb-2 wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                                   
                                            <div class="m-icon ">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/banner/icons/setp-2.png"} alt="Image" className="pr-2 " style={{height:'160px'}}/>
                                            </div>
                                            
                                       
                                    </div>
                                    <div class="col-sm-12   col-md-6 col-lg-12 d-flex mb-2 wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                                    
                                            <div class="m-icon ">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/banner/icons/setp-4.png"} alt="Image" className="pr-2" style={{height:'160px'}}/>
                                            </div>
                                           
                                       
                                    </div>
                                    </div>
                                </div> */}
                    
                            </div>

                            <div class="col-lg-5">
                              
                                <div class="img-wrap3  ">
                                 
                                    <img  src={process.env.PUBLIC_URL + "/assets/img/banner/icons/m2-urad-chakki.webp"} alt="Image" class="img-fluid"  />
                                </div>
                                <div className='m2-broacher'>
                                <a
                                    href={pdffile}
                                    download="tdh-brouchure.pdf"
                                    className="btn-custom btn-sm shadow-none"
                                    target="_blank"
                                    type="application/pdf"
                                    >
                                    Download Brochure
                                </a>
                    
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