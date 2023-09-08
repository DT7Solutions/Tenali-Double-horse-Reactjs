import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pdffile from './tdh-brouchure.pdf'



class Footer extends Component {
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    render() {
        return (
            <footer id="footer-bg"className={this.props.footer.style} style={{ position: 'relative'}}>
                {/* Top Footer */}
                <div className="container">
                    <div className="footer-top">
                        {/* <div className="footer-logo">
                            <img src={process.env.PUBLIC_URL + "/" + this.props.footer.logo} alt="logo" />
                        </div> */}
                        <div className="footer-buttons" style={{ position: 'absolute', top: '-22px', right: '-1%' }}>
                            <img src={process.env.PUBLIC_URL + "/assets/img/redesgin-great-place-work.png"} style={{ height: '100%', width: '100%' }} className='img-responsive' alt="logo" />
                        </div>

                    </div>
                </div>
                {/* Middle Footer */}
                <div className="footer-middle ">
                    <div className="container ">
                        <div className="row">
                            
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget link-1 link-2">
                                <h5 className="widget-title">Quick Links</h5>
                                <ul>
                                    {/* <li> <Link to="/">Gallery</Link> </li> */}
                                    <li> <Link to="/about">Our Company</Link> </li>
                                    <li> <Link to="/tenali-double-horse-products">Tdh Products</Link> </li>
                                    <li> <a href="https://tdhfoodproducts.com/shop/"  target="_blank">Tdh Food Products</a> </li>
                                    {/* <li> <Link to=" ">Recipes</Link> </li>
                                    <li> <Link to=" ">Blog</Link> </li> */}
                                     <li> <Link to="/usa-shops">Usa</Link> </li>
                                    <li> <Link to="/Contactus">Contact</Link> </li>
                                   
                                </ul>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget link-1 link-2">
                                <h5 className="widget-title">Legal Links</h5>
                                <ul>
                                    <li> <Link to="/terms-and-condation"  >Terms of Use</Link> </li>
                                    <li> <Link to="/privacy-policy"  >Privacy Policy</Link> </li>
                                    <li> <Link to="/shipping-policy"  >Shipping Policy</Link> </li>
                                    <li> <Link to="/refund-policy"  >Refund Policy</Link> </li>
                                    <li> <Link to="/payment-ploicy"  >Payment Services</Link> </li>
                                </ul>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget link-1 ">
                                <h5 className="widget-title">Reach out to us</h5>
                                
                                 
                                <ul>
                                    <li><a href="tel:1800 270 567567" target="_blank">Call Us</a></li>
                                    <li> <a href="mailto:info@tenalidoublehorse.com" target="_blank">Email</a> </li>
                                    <li> <Link to="/Contactus" target="_blank">Locate</Link> </li>
                                </ul>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 footer-widget">
                                <h5 className="widget-title">Follow us on Social Media</h5>
                                <ul className="social-media">
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href={"https://www.facebook.com/tenalidoublehorse"} className="facebook">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href={"https://www.youtube.com/c/TenaliDoubleHorse"} className="youtube">
                                            <i className="fab fa-youtube" />
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href={"https://www.instagram.com/tenalidoublehorse/"} className="youtube">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href={"https://twitter.com/tnldoublehorse"} className="twitter">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/company/tenalidoublehorse/"} className="linkedin">
                                            <i className="fab fa-linkedin" />
                                        </a>
                                    </li>
                                </ul>

                                <div className="footer-offer">
                                    <p className='text-dark'>Know More Information!</p>
                                    {/* <Link to="/tdh-brouchure.pdf" className="btn-custom btn-sm shadow-none">Download Brochure</Link> */}
                                    <a
                                        href={pdffile}
                                        download="tdh-brouchure.pdf" // Set the desired filename
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
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="container">
                       
                        <div className="footer-copyright">
                            <p> Copyright © 2023 <Link to=" ">Tenali Double Horse </Link> All Rights Reserved. </p>
                            <Link to="#" className="back-to-top" onClick={() => this.scrollToTop()}><i className="fas fa-chevron-up" /> </Link>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;


