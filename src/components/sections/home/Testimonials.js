import React, { Component } from 'react';
import Slider from 'react-slick';
import testimonials from "../../../data/testimonials.json";

class Testimonials extends Component {
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
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        }
        return (
            <section className="section testimonials  pt-0">
                <div className="container">
                    <div className="section-title-wrap section-header text-center">
                        <h5 className="custom-primary">Voices of Delight</h5>
                        <h2 className="title">Customer Testimonials</h2>
                        <p className="subtitle">
                        Discover the experiences that define Tenali Double Horse through the words of our valued customers. Read their authentic feedback and join the chorus of satisfied voices.
                        </p>
                    </div>
                    <Slider className="ct-testimonials-slider" {...settings} ref={c => (this.slider = c)}>
                        {/* Testimonial item start */}
                        {testimonials.map((item, i) => (
                            <div key={i} className="ct-testimonial-slider-item">
                                <div className="ct-testimonial-item">
                                    <div className="ct-testimonial-thumb">
                                        <img src={process.env.PUBLIC_URL + "/" + item.img} alt={item.name} />
                                    </div>
                                    <div className="ct-testimonial-content">
                                        <i className="flaticon-left-quote" />
                                        <p className='justify'>{item.comment}</p>
                                        <h5>{item.name}</h5>
                                        {/* <span>{item.desig}</span> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Testimonial item end */}
                    </Slider>
                    <div className="ct-arrows centered-arrows with-margin">
                        <i className="fas fa-arrow-left slider-prev slick-arrow" onClick={this.previous} />
                        <i className="fas fa-arrow-right slider-next slick-arrow" onClick={this.next} />
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonials;