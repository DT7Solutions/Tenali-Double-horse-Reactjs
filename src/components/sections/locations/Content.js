import React, { Component } from 'react';
import location from '../../../data/restaurant.json';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const customMarker = L.icon({
    iconUrl: process.env.PUBLIC_URL + "/assets/img/misc/marker.png",
    iconSize: [32, 32],
});

class Content extends Component {
    render() {
        return (
            
            <div className="section">
                 
                <div className="container locations-wrapper">
                <div className="container">
                <div className="section-title-wrap text-center mb-5">
                <h5 className="custom-primary">Let's Chat</h5>
                                <h2 className="title">Contact Us for Any Questions or Business Inquiries</h2>
                                <p className="subtitle">
                                Connect with us for questions, business inquiries & support. Let's chat! 
                                  </p>
                            </div>
                    <div className="row ">
                        <div className="col-lg-6 mb-lg-30 ">
                            <img src={process.env.PUBLIC_URL + "/assets/img/misc/tenali-double-horse-factory-image.jpeg"}  alt="img" className='shadow-sm p-2  bg-white rounded' />
                        </div>
                        <div className="col-lg-6">
                        
                        <form className='mb-5'>
                                <div className="row">
                                    <div className="form-group col-lg-6">
                                        <input type="text" placeholder="First Name" className="form-control" name="fname"  />
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <input type="text" placeholder="Last Name" className="form-control" name="lname"  />
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <input type="email" placeholder="Email Address" className="form-control" name="email"  />
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <input type="text" placeholder="Subject" className="form-control" name="subject"  />
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <textarea name="message" className="form-control" placeholder="Type your message" rows={8} />
                                    </div>
                                </div>
                                <button type="submit" className="btn-custom primary" name="button">Send Message</button>
                            </form> 
                        </div>
                    </div>
                </div>
                {/* <div className="section-title-wrap text-center">
                <h5 className="custom-primary">Let's Chat</h5>
                                <h2 className="title">Contact Us for Any Questions or Business Inquiries</h2>
                                <p className="subtitle">
                                Connect with us for questions, business inquiries & support. Let's chat! 
                                  </p>
                            </div> */}
                {/* <form className='mb-5'>
                                <div className="row">
                                    <div className="form-group col-lg-6">
                                        <input type="text" placeholder="First Name" className="form-control" name="fname"  />
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <input type="text" placeholder="Last Name" className="form-control" name="lname"  />
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <input type="email" placeholder="Email Address" className="form-control" name="email"  />
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <input type="text" placeholder="Subject" className="form-control" name="subject"  />
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <textarea name="message" className="form-control" placeholder="Type your message" rows={8} />
                                    </div>
                                </div>
                                <button type="submit" className="btn-custom primary" name="button">Send Message</button>
                            </form> */}
                    {location.map((item, i) => (
                        <div key={i} className="location-item">
                            <div className="row">
                                <div className="col-md-6" style={{order:1}}>
                                    <div className="location-item-inner">
                                        <img src={process.env.PUBLIC_URL + "/" + item.img} alt={item.title} />
                                        <div className="location-desc">
                                            <h3>{item.title}</h3>
                                            <p>{item.brancetype}</p>
                                        </div>
                                        <div className="location-info">
                                            <div className="row">
                                                <div className="col-6">
                                                    {item.location.map((item, i) => (
                                                        <span key={i}>{item}</span>
                                                    ))}
                                                </div>
                                                <div className="col-6">
                                                    <span> Give us a call: <a rel={'external'} href={"tel:" + item.contactno}>{item.contactno}</a> </span>
                                                    <span> Email Us: <a rel={'external'} href={"mailto:" + item.emailid}>{item.emailid}</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6" style={{order:0}}>
                                    <div className="ct-contact-map-wrapper">
                                        <MapContainer
                                            className="markercluster-map ct-contact-map"
                                            center={item.mapdata}
                                            zoom={16}
                                            scrollWheelZoom={false}
                                        >
                                            <TileLayer
                                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                attribution='&copy; Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
                                                maxZoom={16}
                                            />
                                            <Marker position={item.mapdata} icon={customMarker}></Marker>
                                        </MapContainer>
                                        <a  className="btn-custom shadow-none" href={"http://maps.google.com/?q=" + item.mapdata}>View in Google Maps</a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Content;