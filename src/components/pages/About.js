import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
// import Header from '../layouts/Headerinner';
// import Header from '../layouts/Headerinner';
import Header from '../layouts/Header';
import Breadcrumbs from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/about/Content';

const pagelocation = 'About Us'
const bannerimg = "/assets/img/banner/tenali-double-horse-about-page-banner.png"
class About extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Known for quality and taste Tenali double Horse | {pagelocation}</title>
                    <meta
                        name="Come get Tenali double horse quality products like urad dal, toor dal, and moong dal for a reasonable price from stores near you"
                        content="#"
                    />
                </MetaTags> 
                <Header/>
                <Breadcrumbs breadcrumb={{ pagename: pagelocation,bannerimg:bannerimg }} />
                <Content/>
                <Footer footer={{ style:"ct-footer footer-dark", logo:"assets/img/tenali-double-horse-logo-135x73.png" }} />
            </Fragment>
        );
    }
} 

export default About;