import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import products from "../../../data/dubai.json";
import productcategory from "../../../data/productcategory.json";

class Menuitems extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
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
                    autoplay: true
                }
            }]
        }
        return (
            <div className='mt-lg-5 pt-lg-5'>
            <div className="section-title-wrap section-header text-center ">
            <h5 className="custom-primary">Leading the Way</h5>
            <h2 className="title">Introducing Our UAE Product Launches</h2>
            <p className="subtitle">
            We're thrilled to introduce our latest product lineup in the UAE, where innovation and excellence converge. Each product is designed to enhance your lifestyle, bringing convenience, style, and functionality to your fingertips.
                </p>
        </div>
            
            <div className="section  mt-5 mb-5 pt-0 pb-0 category-section light-pic"  style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/categories/two-bg.png)" }}>
             
                <div className="container mb-3">
                    {/* Arrow */}
                    <i className="slider-prev fas fa-arrow-left slick-arrow" onClick={this.previous} />
                    <Slider className="category-slider" {...settings} ref={c => (this.slider = c)}>
                        {products.map((item, i) => (
                            <div key={i} className="ct-category category-2">
                                <div className="ct-category-desc"  >
                                    {item.category.slice(0, 1).map((category) => (
                                        productcategory.filter(item => {
                                            return item.id === category
                                        }).map((cat, i) => (
                                            <h5 className="custom-primary" key={i}>{cat.title}</h5>
                                        ))
                                    ))}
                                        
                                        <h3>{item.name}</h3>
                                    <p>{item.shortdesc}</p>
                                    <a href={item.urls}className="btn-custom">Order Now</a>
                                </div>
                                
                                <img src={process.env.PUBLIC_URL + "/" + item.img}   alt={item.name} />
                               
                            </div>
                        ))}
                    </Slider>
                    {/* Arrow */}
                    <i className="slider-next fas fa-arrow-right slick-arrow" onClick={this.next} />
                </div>
            </div>
            </div>
        );
    }
}

export default Menuitems;