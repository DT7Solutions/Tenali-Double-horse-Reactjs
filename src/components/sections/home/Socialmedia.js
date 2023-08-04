import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class Socialmedia extends Component {
    render() {
        return (
          <div className="subheader subfooter-icons   pt-5">
            <div className="container">

              <div className="icon-row ">
              <ul class="wrapper">
                      <li class="icon facebookf">
                        <span class="tooltip">Facebook</span>
                        <span><i class="fab fa-facebook-f"></i></span>
                      </li>
                      <li class="icon twittert">
                        <span class="tooltip">Twitter</span>
                        <span><i class="fab fa-twitter"></i></span>
                      </li>
                      <li class="icon instagram">
                        <span class="tooltip">Instagram</span>
                        <span><i class="fab fa-instagram"></i></span>
                      </li>
                      <li class="icon instagram">
                        <span class="tooltip">Instagram</span>
                        <span><i class="fab fa-linkedin-in"></i></span>
                      </li>
                      <li class="icon youtubey">
                        <span class="tooltip">Youtube</span>
                        <span><i class="fab fa-youtube"></i></span>
                      </li>
                    </ul>
              </div>

            </div>
          </div>
        );
    }
}

export default Socialmedia;