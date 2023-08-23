import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class Socialmedia extends Component {
    render() {
        return (
        
          <div className="social-icons mb-5 mt-3"style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
          <span className="title text-center text-dark" style={{fontFamily:'Helvetica',lineHeight:'48px',fontWeight:'700'}}> Follow us :</span>
          <ul className="wrapper" >
            <li className="icon facebookf">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="icon facebookf">
              <span className="tooltip">Facebook</span>
              <span>
                <i className="fab fa-facebook-f"></i>
              </span>
              </a>
            </li>
            <li className="icon twittert">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="icon twittert">
              <span className="tooltip">Twitter</span>
              <span>
                <i className="fab fa-twitter"></i>
              </span>
              </a>
            </li>
            <li className="icon instagram">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="icon instagram">
              <span className="tooltip">Instagram</span>
              <span>
                <i className="fab fa-instagram"></i>
              </span>
              </a>
            </li>
           
            <li className="icon youtubey">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="icon youtubey">
              <span className="tooltip">Youtube</span>
              <span>
                <i className="fab fa-youtube"></i>
              </span>
              </a>
            </li>
            <li className="icon linked-m">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="icon linked-m">
              <span className="tooltip">Linkedin</span>
              <span>
                <i className="fab fa-linkedin"></i>
              </span>
              </a>
            </li>
          </ul>
          </div>
        );
    }
}

export default Socialmedia;