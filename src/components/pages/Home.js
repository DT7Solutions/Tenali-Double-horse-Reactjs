import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
// import Header from '../layouts/Headerinner';
import Footer from '../layouts/Footer';
import Content from '../sections/home/Content';

const pagelocation = 'Home';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Best Quality Urad Dal in India by Tenali Double Horse | {pagelocation}</title>
                    <meta
                        name="Discover unbeatable prices for high-quality Tenali Double Horse products such as Urad Dal, Toor Dal, and Moong Dal."
                        content="#"
                    />
                </MetaTags> 
                <Header/>
            
                <Content/>
                <Footer className="footer-with-border"   footer={{ style: "ct-footer", logo: "assets/img/tenali-double-horse-logo-250x73.png", backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/bg/tenali-double-horse-footer-banner-1900x500.webp)" }} />
                {/* <Footer footer={{ style:"ct-footer footer-dark", logo:"assets/img/transparent-logo.png" }} /> */}
            </Fragment>
        );
    }
}

export default Home;