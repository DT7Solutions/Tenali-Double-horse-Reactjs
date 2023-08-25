import React, { Component } from 'react';
import WOW from 'wow.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

class TimelineSection extends Component {
    componentDidMount() {
        AOS.init(); // Initialize AOS when the component mounts
    }
    render() {
        return (
            <section id="timeline" style={{backgroundColor:'#fff',borderTop:'none'}}>
                <h5 className="custom-primary text-center">Unraveling Our Story</h5>
        <h2 className="title text-center">A Timeline of Growth, Innovation, and Impact</h2>
                <div className="demo-card-wrapper">
                    <div className="demo-card demo-card--step1 " data-aos="fade-left" data-aos-delay="400">
                        <div className="head">
                            <div className="number-box">
                                <span>2005</span>
                            </div>
                            <h2 className='text-white'><span className="small">Subtitle</span> Technology</h2>
                        </div>
                        <div className="body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                            <img src="http://placehold.it/1000x500" alt="Graphic" />
                        </div>
                    </div>
                    
                    <div className="demo-card demo-card--step2 " data-aos="fade-right" data-aos-delay="400">
                        <div className="head">
                            <div className="number-box">
                                <span>2010</span>
                            </div>
                            <h2  className='text-white'><span className="small">Subtitle</span> Confidence</h2>
                        </div>
                        <div className="body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                            <img src="http://placehold.it/1000x500" alt="Graphic" />
                        </div>
                    </div>
                    
                    <div className="demo-card demo-card--step3 " data-aos="fade-left" data-aos-delay="600">
                        <div className="head">
                            <div className="number-box">
                                <span>2015</span>
                            </div>
                            <h2  className='text-white'><span className="small">Subtitle</span> Adaptation</h2>
                        </div>
                        <div className="body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                            <img src="http://placehold.it/1000x500" alt="Graphic" />
                        </div>
                    </div>
                    
                    <div className="demo-card demo-card--step4 " data-aos="fade-right" data-aos-delay="800">
                        <div className="head">
                            <div className="number-box">
                                <span>2020</span>
                            </div>
                            <h2  className='text-white'><span className="small">Subtitle</span> Consistency</h2>
                        </div>
                        <div className="body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                            <img src="http://placehold.it/1000x500" alt="Graphic" />
                        </div>
                    </div>
                    
                    <div className="demo-card demo-card--step5" data-aos="fade-left" data-aos-delay="500">
                        <div className="head">
                            <div className="number-box">
                                <span>2023</span>
                            </div>
                            <h2  className='text-white'><span className="small">Subtitle</span> Conversion</h2>
                        </div>
                        <div className="body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                            <img src="http://placehold.it/1000x500" alt="Graphic" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TimelineSection;
