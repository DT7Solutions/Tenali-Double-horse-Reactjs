import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const processpost = [
    {
        icon: "flaticon-online-booking",
        title: "Superior Quality",
        text: "delivering excellence in every bite,High-quality standards in terms of freshness, purity, and taste."
    },
    {
        icon: "flaticon-medal",
        title: "Trusted Brand",
        text: "Building trust with our customers by consistently delivering exceptional quality and reliability."
    },
    {
        icon: "flaticon-grocery",
        title: "High Nutritional Value",
        text: "Abundant nutrients, vitamins, minerals for optimal health through our products"
    }
];

class Process extends Component {
    componentDidMount() {
        AOS.init({
            duration: 1500, 
        });
    }
    render() {
        return (
            <div className="container-fluid mb-5">
                <div className="section-title-wrap section-header text-center ">
                    <h5 className="custom-primary">Where Quality Meets Commitment </h5>
                    <h2 className="title">Nourishing Lives with Trusted Nutrition</h2>
                    <p className="subtitle">
                    Experience the goodness of high nutritional value and affordability with Tenali Double Horse. Elevate your breakfast routine with our superior products.
                    </p>
                </div>

                <div className="row1-container four-philers">
                   
                            <div className="box box-down cyan"  data-aos="slide-up" data-aos-anchor-placement="top-center"  data-aos-easing="ease-in-sine" data-aos-delay="400">
                                <h2>Superior Quality</h2>
                                <p>delivering excellence in every bite,High-quality standards in terms of freshness, purity, and taste.</p>
                                <img className="box-img" src={process.env.PUBLIC_URL + "/assets/img/home/Quality.png"} alt="topicon" />
                            </div>
                        

                      
                            <div className="box red" data-aos="slide-up" data-aos-easing="ease-in-sine" data-aos-delay="400">
                                <h2>Trusted Brand</h2>
                                <p>Building trust with our customers by consistently delivering exceptional quality and reliability.</p>
                                <img className="box-img" src={process.env.PUBLIC_URL + "/assets/img/home/Trusted.png"} alt="topicon" />
                            </div>
                        
                       
                            <div className="box box-down blue" data-aos="slide-up"  data-aos-easing="ease-in-sine" data-aos-delay="400">
                                <h2>High Nutritional Value</h2>
                                <p>Abundant nutrients, vitamins, minerals for optimal health through our products.</p>
                                <img className="box-img" src={process.env.PUBLIC_URL + "/assets/img/home/Nutritional.png"} alt="topicon" />
                            </div>
                        
                </div>

                <div className="row2-container">
                    <div className="box orange" data-aos="slide-up" data-aos-easing="ease-in-sine"  data-aos-delay="400">
                        <h2>Affordable</h2>
                        <p>Regularly evaluates our talent to ensure quality</p>
                        <img className="box-img" src={process.env.PUBLIC_URL + "/assets/img/home/Affordable.png"} alt="topicon" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Process;
