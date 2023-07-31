import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Content from '../sections/home/Content';

const pagelocation = 'Homepage';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Tenali  doublehorse | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags> 
                <Header/>
            
                <Content/>
                <Footer className="footer-with-border"   footer={{ style: "ct-footer", logo: "assets/img/transparent-logo.png", backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/footer/footer-bg-image.png)" }} />
                {/* <Footer footer={{ style:"ct-footer footer-dark", logo:"assets/img/transparent-logo.png" }} /> */}
            </Fragment>
        );
    }
}

export default Home;