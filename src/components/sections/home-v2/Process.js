import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Controller, Scene } from 'react-scrollmagic';

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
    render() {
        return (
            <div className="container-fluid mb-5">
                <div className="section-title-wrap section-header text-center ">
                    <h5 className="custom-primary">We Committed for </h5>
                    <h2 className="title">Tenali Double horse</h2>
                    <p className="subtitle">
                        Tenali Double Horse industry-leading all-in-one platform makes it simple to set a healthy breakfast regime. To provide the best quality Urad Gota and Urad Dall near you.
                    </p>
                </div>

                <div className="row1-container four-philers">
                    <Controller>
                        <Scene
                            duration={300}
                            pin={false}
                            classToggle="fade-up"
                        >
                            <div className="box box-down cyan">
                                <h2>Superior Quality</h2>
                                <p>delivering excellence in every bite,High-quality standards in terms of freshness, purity, and taste.</p>
                                <img className="box-img" src={process.env.PUBLIC_URL + "/assets/img/home/Quality.png"} alt="topicon" />
                            </div>
                        </Scene>

                        <Scene
                            duration={300}
                            pin={false}
                            classToggle="fade-up"
                            triggerHook={1} 
                        >
                            <div className="box red">
                                <h2>Trusted Brand</h2>
                                <p>Building trust with our customers by consistently delivering exceptional quality and reliability.</p>
                                <img className="box-img" src={process.env.PUBLIC_URL + "/assets/img/home/Trusted.png"} alt="topicon" />
                            </div>
                        </Scene>

                        <Scene
                            duration={300}
                            pin={false}
                            classToggle="fade-up"
                        >
                            <div className="box box-down blue">
                                <h2>High Nutritional Value</h2>
                                <p>Abundant nutrients, vitamins, minerals for optimal health through our products.</p>
                                <img className="box-img" src={process.env.PUBLIC_URL + "/assets/img/home/Nutritional.png"} alt="topicon" />
                            </div>
                        </Scene>
                    </Controller>
                </div>

                <div className="row2-container">
                    <div className="box orange">
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
