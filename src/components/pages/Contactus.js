import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";

import Header from '../layouts/Header';
import Breadcrumbs from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/Contactus/Content';

const pagelocation = 'Contact'
const bannerimg = "/assets/img/bg/tenali-double-horse-contact-page-banner.png"

class Locations extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Contact Tenali Double Horse - Reach Out to Us for Quality Indian Products | {pagelocation}</title>
                    <meta
                        name="Have questions or inquiries? Contact Tenali Double Horse today! We're here to assist you with all your needs for premium Indian groceries and products. Reach out for top-quality ingredients and exceptional service."
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

export default Locations;