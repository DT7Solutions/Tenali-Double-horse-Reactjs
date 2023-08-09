import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { hometwo as bannerpost} from '../../../data/banner.json'

class Banner extends Component {
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    dots: false,
                }
            }]
        }
        return (
            <div className="banner banner-2">
                <Slider className="banner-slider-2" {...settings}>
                    {bannerpost.map((item, i) => (
                        
                        <img src={process.env.PUBLIC_URL + "/" + item.bg} alt={item.title} />
                    ))}
                </Slider>
                <div className='header-marque'>
                <marquee width="97%" direction="left">
                    This is a sample scrolling text that has scrolls texts to left.
                </marquee>
                </div>

            </div>
        );
    }
}

export default Banner;