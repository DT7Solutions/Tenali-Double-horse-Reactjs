import React, { Component } from 'react';
import location from '../../../data/restaurant.json';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import Factorylocation from './Factorylocation';



const customMarker = L.icon({
    iconUrl: process.env.PUBLIC_URL + "/assets/img/misc/marker.png",
    iconSize: [32, 32],
});

class Content extends Component {
    render() {
        return (
            
            <div className="section" style={{paddingBottom:'0px'}}>

                <div className="fluid-container locations-wrapper">
                    <div className="container">
                        <div className="section-title-wrap text-center mb-5">
                            <h5 className="custom-primary">Let's Chat</h5>
                            <h2 className="title">Contact Us for Any Questions or Business Inquiries</h2>
                            <p className="subtitle">
                                Connect with us for questions, business inquiries & support. Let's chat!
                            </p>
                        </div>
                        <div className="row  p-2">
                            <div className="col-lg-7 mb-lg-30 ">
                    
                                <div className="row row-cols-1 row-cols-md-2">
                                    <div className="col-lg-12 col-md-7 col-sm-12  mb-lg-30  ">
                                        <div className="row  top-row">
                                            <div className="col-lg-6 col-sm-12 mb-3 d-flex email-toll-card12">
                                                <div><i className='fas fa-envelope mt-3 phone-email' style={{ fontSize: '30px', color: 'white' }} /></div> &nbsp;
                                                <div className='mt-1'>email<h5 className="card-title"> <a href = "mailto: info@tenalidoublehorse.com">info@tenalidoublehorse.com</a></h5></div>
                                            </div>
                                            <div className="col-lg-6 col-sm-12   mb-3 d-flex email-toll-card2">
                                                <div><i className='fas fa-phone-volume mt-3 phone-icon' style={{ fontSize: '33px', color: ' #ED4E53' }} /></div> &nbsp;
                                                <div className='mt-1'>Toll Free Number<h5 className="card-title"> <a href = "tel: 1800 270 567567">1800 270 567567</a></h5></div>
                                            </div>
                                        </div> 
                                    </div>
                                    </div>
                                    {/* <div className='container'> */}
                                       
                                    <div className="col-lg-12 pt-3 pb-3 mb-3 shadow " style={{borderRadius:'20px'}}>
                                    <h5 className="custom-primary">Corporate Address</h5>
                                    <p>+919666389389</p>
                                    <p>JK TOWERS, 8-2-293/82/B/S-7,2nd Floor,Road Number 10C,</p>
                                     <p> Gayatri Hills,Jubilee Hills,Hyderabad, Telangana 500033</p>   
                                     
                                    <button type="button" className="btn-custom btn-sm order-btn">
                                        <a href="https://goo.gl/maps/XiEweexpzdsBQoC96" target='_blank'>Get directions</a>
                                    </button>
                                        </div>
                                            
                                    <div className="col-lg-12 pt-3 pb-3 mb-5 shadow bg-rounded " style={{borderRadius:'20px'}}>
                                    <h5 className="custom-primary">Factory  Address</h5>
                                    <p>+919666389389</p>
                                    <p>Nandivelugu, Nandivelugu (Post)  </p>
                                     <p> – 522 306 TENALI,   Guntur Dist, A.P</p>   
                                   
                                     <button type="button" className="btn-custom btn-sm order-btn">
                                        <a href="https://goo.gl/maps/kFJS3WnhyJWUNGbu5" target='_blank'>Get directions</a>
                                    </button>
                                        </div>
                                      
                                        {/* </div> */}
                                       
                               
                            </div>
                            <div className="col-lg-5  p-2">

                                <form className='mb-5'>
                                    <div className="row">
                                        <div className="form-group col-lg-6">
                                            <input type="text" placeholder="First Name" required className="form-control" name="fname" />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input type="text" placeholder="Last Name" required className="form-control" name="lname" />
                                        </div>
                                        <div className="form-group col-lg-12">
                                            <input type="email" placeholder="Email Address" required className="form-control" name="email" />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input type="text" placeholder="Phone no" required className="form-control" name="Phonenumber" />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <select className="form-control" name="purpose" required>
                                                <option value="" disabled selected>Purpose of Contact</option>
                                                <option value="export">Export</option>

                                                <option value="distribution">Distribution Enquiry </option>
                                                <option value="Feedback">Feedback</option>
                                                <option value="Suggestions">Suggestions</option>
                                                <option value="Other">Job Enquiry</option>

                                            </select>
                                        </div>
                                        <div className="form-group col-lg-12">
                                            <input type="text" placeholder="Subject" required className="form-control" name="subject" />
                                        </div>
                                        <div className="form-group col-lg-12">
                                            <textarea name="message" className="form-control" required placeholder="Type your message" rows={9} />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn-custom primary" name="button">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>

                  
                   <Factorylocation/>
                </div>
            </div>
        );
    }
}

export default Content;