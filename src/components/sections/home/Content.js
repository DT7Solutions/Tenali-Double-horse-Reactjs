import React, { Component, Fragment } from 'react';
import Socialmedia from './Socialmedia';
// import Banner from '../home-v3/Banner';
// import Banner from '../home/Banner';
import Banner from '../home-v2/Banner';
// import Banner  from '../home/Banner-demo';
import Productcards from '../blog-grid/Productcards';
import Stats from './Stats';
// import CubeSlider from "../home-v2/Cubeslider"
import Menuitems from '../home-v2/Categories';
import Aboutcompany from './Aboutcompany';
import Process from '../home-v2/Process';
import Lazyload from '../home-v3/Lazyload';
import Nobalactivity from './Nobalactivity';
import Paragraph from '../home-v2/Paragraph';
import Reviews from './Reviews';
import Feedback from './Feedback';
import Instagram from './Instagram';


class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Aboutcompany />
                <Process />

                {/* <Nobalactivity /> */}
                {/* <Instagram/> */}
                {/* <CubeSlider/> */}

                <Menuitems />

                <Productcards />
                <Stats />

                <Paragraph />
                <Lazyload />
                <Reviews/>

                <Socialmedia />
                <Feedback/>
              
            </Fragment>
        );
    }
}

export default Content;