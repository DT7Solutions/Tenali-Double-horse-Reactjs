import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img3 from '../../../assets/img/team/tenali-double-horse-phir-se-udan-campaingh.webp'
let urls = "https://www.amazon.in/dp/B0CCJ825SX?ref=myi_title_dp"


class Latestproducts extends Component {
  componentDidMount() {
    AOS.init({
        duration: 1500, 
    });
}
    render() {
        return (
        
          <div>
            <div className='container mb-5'>
                  
                    <div className='row d-flex justify-content-center campaing'>

                        
                        <div className='col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center'>
                            <div className='mb-lg-5 camp-content'>
                                <div>
                                <h5 className="custom-primary mt-3">Crafting Tradition</h5>
                            <h2 className="title">Ammamma's Dosa Batter</h2>
                                    <p>
                                        {/* <b>Phir Se Udaan</b> is an initiative by your favourite <b>Tenali Double Horse</b> . With a vision to empower women inside and outside the house. Tenali Double Horse offers only the best quality and nutrition packed range of Dals and Instant foods like Idli and Dosa mixes. */}
                                        At Tenali Double Horse, we take pride in our collaboration with Ammamma's, bringing you the exquisite taste of tradition. Our journey began when Ammamma's Dosa Batter was crafted using Tenali Double Horse Urad Dal, a product that speaks of purity, quality, and a rich heritage.
                                    </p>
                                </div>
                                {/* <div>
                                    <a href={urls} target='_blank' className="btn-custom Register-campaining">Order Now</a>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-6 mb-lg-30 " style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {/* <video controls poster="/assets/img/misc/ammas-thd-collabaration with.png">
                                <source src={process.env.PUBLIC_URL + "/assets/video/ammama.mp4"} type="video/mp4" />
                            </video> */}
                             <a href="https://www.instagram.com/reel/Cyh2CcyN2Kd/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" target="_blank"><img src={process.env.PUBLIC_URL + "/assets/img/misc/Collabaration with.png"}  alt="img" className=' mb-2' /></a>

                        </div>
                    </div>
            </div>
    
          </div>
        );
    }
}

export default Latestproducts;