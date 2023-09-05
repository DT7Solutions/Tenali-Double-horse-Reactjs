import React, { Component, Fragment } from 'react';
// import location from '../../../data/restaurant.json';
import L from 'leaflet';
// import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import Factorylocation from './Factorylocation';
import Messenger from '../home/Messenger';
import Feedback from '../home/Feedback';

import emailjs from 'emailjs-com';



const customMarker = L.icon({
    iconUrl: process.env.PUBLIC_URL + "/assets/img/misc/marker.png",
    iconSize: [32, 32],
});

class Content extends Component {
    constructor(props) {
        super(props);
        this.form = React.createRef();
        this.state = {
          isSubmitted: false,
          formData: {
            fname: '',
            lname: '',
            email: '',
            Phonenumber: '',
            purpose: '',
            subject: '',
            message: '',
          },
        };
      }
    
      handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
          formData: {
            ...prevState.formData,
            [name]: value,
          },
        }));
      };
    
      sendEmail = async (e) => {
        e.preventDefault();
    
        try {
          await emailjs.sendForm('service_u0jehlt', 'template_3b2mxe5', this.form.current, 'cjCRUWDX0cKAQSKL6')
          
          // Reset the form fields
          this.setState((prevState) => ({
            formData: {
              fname: '',
              lname: '',
              email: '',
              Phonenumber: '',
              purpose: '',
              subject: '',
              message: '',
            },
            isSubmitted: true,
          }));
          alert("Message successfully sent!");
        } catch (error) {
          console.log(error.text);
        }
      };
    
    render() {
        const { formData, isSubmitted } = this.state;
        return (
            <Fragment>
            
            <div className="section" style={{paddingBottom:'0px'}}>

                <div className="fluid-container locations-wrapper">
                    <div className="container">
                        <div className="section-title-wrap text-center mb-5">
                            <h5 className="custom-primary">Connect with Us</h5>
                            <h2 className="title">Reach Out to Tenali Double Horse</h2>
                            <p className="subtitle">
                            Find our corporate and factory addresses along with contact information. We're here to assist you. Feel free to get in touch for inquiries, feedback, or any assistance you need.
                            </p>
                        </div>
                        <div className="row  p-2">
                            <div className="col-lg-7 mb-lg-30 ">
                    
                                <div className="row row-cols-1 row-cols-md-2">
                                    <div className="col-lg-12 col-md-7 col-sm-12  mb-lg-30  ">
                                        <div className="row  top-row">
                                        <div className="col-lg-6 col-sm-12 mb-3 d-flex email-toll-card1">
                                                <div><i className='fas fa-envelope mt-3 phone-email' style={{ fontSize: '30px', color: 'white' }} /></div> &nbsp;
                                                <div className='mt-1'>email<h5 className="card-title"> <a href = "mailto: info@tenalidoublehorse.com">info@tenalidoublehorse.com</a></h5></div>
                                            </div>
                                            <div className="col-lg-6 col-sm-12   mb-3 d-flex email-toll-card2">
                                                <div><i className='fas fa-phone-volume mt-3 phone-icon' style={{ fontSize: '33px', color: '#ED4E53' }} /></div> &nbsp;
                                                <div className='mt-1'>Toll Free Number<h5 className="card-title"> <a href = "tel: 1800 270 567567">1800 270 567567</a></h5></div>
                                            </div>
                                        </div> 
                                    </div>
                                    </div>
                                    {/* <div className='container'> */}
                                       
                                    <div className="col-lg-12 pt-3 pb-3 mb-3 shadow " style={{borderRadius:'20px'}}>
                                    <h5 className="custom-primary">Corporate Address</h5>
                                    <p><i className='fas fa-phone' style={{ fontSize: '20px', color: '#7e8083' }} /> +91 9666389389</p>
                                    <p><i class='fas fa-location-arrow'  style={{ fontSize: '20px', color: '#7e8083' }} /> JK TOWERS, 8-2-293/82/B/S-7,2nd Floor,Road Number 10C,</p>
                                     <p>Gayatri Hills,Jubilee Hills,Hyderabad, Telangana 500033</p>   
                                     
                                    <button type="button" className="btn-custom btn-sm order-btn">
                                        <a href="https://goo.gl/maps/XiEweexpzdsBQoC96" target='_blank'>Get directions</a>
                                    </button>
                                        </div>
                                            
                                    <div className="col-lg-12 pt-3 pb-3 mb-5 shadow bg-rounded " style={{borderRadius:'20px'}}>
                                    <h5 className="custom-primary">Factory  Address</h5>
                                    <p><i className='fas fa-phone' style={{ fontSize: '20px', color: '#7e8083' }} /> +91 9666389389</p>
                                    <p><i class='fas fa-location-arrow'  style={{ fontSize: '20px', color: '#7e8083' }} /> Nandivelugu, Nandivelugu (Post)</p>
                                     <p> – 522 306 TENALI,   Guntur Dist, A.P</p>   
                                   
                                     <button type="button" className="btn-custom btn-sm order-btn">
                                        <a href="https://goo.gl/maps/kFJS3WnhyJWUNGbu5" target='_blank'>Get directions</a>
                                    </button>
                                        </div>
                                      
                                        {/* </div> */}
                                       
                               
                            </div>
                            <div className="col-lg-5 ">
                            <div className="row  top-row">
                                            <div className="col-lg-12 col-sm-12 mb-3 p-2 d-flex email-toll-card3" style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                                           
                                            <div> <h5 className="text-white mb-0"> We Value Your Input</h5></div>
                                           
                                            <div><i className='fas fa-truck mt-3 phone-icon' style={{ fontSize: '33px', color: ' #ED4E53' }} /></div> &nbsp;
                                               
                                            </div>
                                        </div> 


                                        <div>
                           <form className='mb-5' ref={this.form} onSubmit={this.sendEmail}>
                                    <div className="row">
                                        <div className="form-group col-lg-6">
                                        <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="form-control"
                  name="fname"
                  value={formData.fname}
                  onChange={this.handleInputChange}
                />
                                        </div>
                                        <div className="form-group col-lg-6">
                                        <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="form-control"
                  name="lname"
                  value={formData.lname}
                  onChange={this.handleInputChange}
                />
                                        </div>
                                        <div className="form-group col-lg-12">
                                            
                                            <input
                  type="text"
                  placeholder="Email Address"
                  required
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={this.handleInputChange}
                />
                                        </div>
                                        <div className="form-group col-lg-6">
                                        <input
                  type="text"
                  placeholder="Phone no"
                  required
                  className="form-control"
                  name="Phonenumber"
                  value={formData.Phonenumber}
                  onChange={this.handleInputChange}
                />
                                          
                                        </div>
                                        <div className="form-group col-lg-6">
  <select
    className="form-control"
    name="purpose"
    required
    value={formData.purpose}
    onChange={this.handleInputChange}
  >
    <option value="" disabled>Purpose of Contact</option>
    <option value="export">Export</option>
    <option value="distribution">Distribution Enquiry</option>
    <option value="Feedback">Feedback</option>
    <option value="Suggestions">Suggestions</option>
    <option value="Other">Job Enquiry</option>
  </select>
</div>
<div className="form-group col-lg-12">
  <input
    type="text"
    placeholder="Subject"
    required
    className="form-control"
    name="subject"
    value={formData.subject}
    onChange={this.handleInputChange}
  />
</div>
<div className="form-group col-lg-12">
  <textarea
    name="message"
    className="form-control"
    required
    placeholder="Type your message"
    rows={9}
    value={formData.message}
    onChange={this.handleInputChange}
  />
</div>
                                    </div>
                                    <button type="submit"  value="Send" className="btn-custom primary" name="button">Send Message</button>
                                </form>
                               
                                </div>
                            </div>
                        </div>
                    </div>

                  
                   <Factorylocation/>
                </div>
            </div>
            <Messenger/>
            <Feedback/>
            </Fragment>
        );
    }
}

export default Content;