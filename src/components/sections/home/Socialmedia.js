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
                        <span>
                        <a target="_blank" href="https://www.facebook.com/tenalidoublehorse">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        </span>
                      </li>
                      <li class="icon twittert">
                        <span class="tooltip">Twitter</span>
                        <span>
                        <a target="_blank" href="https://twitter.com/i/flow/login?redirect_after_login=%2Ftnldoublehorse">
                          <i class="fab fa-twitter"></i>
                          </a>
                          </span>
                      </li>
                      <li class="icon instagram">
                        <span class="tooltip">Instagram</span>
                        <span>
                        <a target="_blank" href="www.instagram.com/tenalidoublehorse/">
                          <i class="fab fa-instagram"></i>
                          </a>
                          </span>
                      </li>
                      <li class="icon instagram">
                        <span class="tooltip">Linkedin</span>
                        <span>
                        <a target="_blank" href="https://www.linkedin.com/in/tenali-double-horse-877a4a250/?originalSubdomain=in">
                          <i class="fab fa-linkedin-in"></i>
                          </a>
                          </span>
                      </li>
                      <li class="icon youtubey">
                        <span class="tooltip">Youtube</span>
                        <span>
                        <a target="_blank" href="https://www.youtube.com/c/TenaliDoubleHorse">
                          <i class="fab fa-youtube"></i>
                          </a>  
                          </span>
                      </li>
              </ul>
              </div>

            </div>
          </div>
        );
    }
}

export default Socialmedia;