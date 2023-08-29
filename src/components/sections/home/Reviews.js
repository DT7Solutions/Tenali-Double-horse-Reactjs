import React from 'react';
import Slider from 'react-slick';
class Reviews extends React.Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  
      return (
        <div className="demo">
          <div className="container">
          <div className="section-title-wrap section-header text-center pt-5">
                        <h5 className="custom-primary">Our Pillars of Success</h5>
                        <h2 className="title">Testimonials that Drive Us</h2>
                        <p className="subtitle">
                        Discover the excellence and delight that our customers can't stop talking about. Experience it for yourself and become one of our satisfied customers today!
                        </p>
                    </div>
            <div className="row">
              <div className="col-md-12">
                <Slider {...settings}>
                  <div className="testimonial">
                    <div className="testimonial-content">
                      <div className="testimonial-icon">
                        <i className="fa fa-quote-left"></i>
                      </div>
                      <p className="description">
                      It my personal experience. I came from vizag there we used tenali double horse minapagullu. After i came to tenali regularly i am sending DTH products to my family members n friends at vizag. It is good products
                      </p>
                    </div>
                    <h3 className="title">Aditya Ratnam</h3>
                    {/* <span className="post">Web Developer</span> */}
                  </div>
  
                  <div className="testimonial">
                    <div className="testimonial-content">
                      <div className="testimonial-icon">
                        <i className="fa fa-quote-left"></i>
                      </div>
                      <p className="description">
                      Good range of dalls and instant foods ...Most trusted brand in India
                      </p>
                    </div>
                    <h3 className="title">bhaskar donepudi</h3>
                    {/* <span className="post">Web Developer</span> */}
                  </div>
                  <div className="testimonial">
                    <div className="testimonial-content">
                      <div className="testimonial-icon">
                        <i className="fa fa-quote-left"></i>
                      </div>
                      <p className="description">
                      Enjoy our Sundays with tdh recipes with family not only breakfast but sweets too... meeting together with delicious food is a long lasting memory. Tq tdh
                      </p>
                    </div>
                    <h3 className="title">Radhika Mamidi</h3>
                    {/* <span className="post">Web Developer</span> */}
                  </div>
                  <div className="testimonial">
                    <div className="testimonial-content">
                      <div className="testimonial-icon">
                        <i className="fa fa-quote-left"></i>
                      </div>
                      <p className="description">
                      Good Morning sir.
I want some branding and advertising in different area.then consumer offer with promoters appointment in top outlets.
                      </p>
                    </div>
                    <h3 className="title">Subrat Nayak</h3>
                    {/* <span className="post">Web Developer</span> */}
                  </div>
  
                </Slider>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Reviews;
  