import React, { Component, Fragment } from 'react';
import Aboutus from "../home/Aboutus";
import Aboutcompany from '../home/Aboutcompany';
import Infographics from "../home-v3/Infographics";
import Newsletter from "../home-v2/Newsletter";
import Stats from '../home/Stats';
import Rules from './Rules';
import MyComponent from '../home-v2/MyComponent';
import Overview from './Overview'
import Greatplacetowork from '../blog-full/Greatplacetowork'
import Cardhover from './Cardhover';
import Tdhgroup from './Tdhgroup';


class Content extends Component {
    render() {
        return (
            <Fragment>
               <Aboutcompany/>
               <Tdhgroup/>
                <Rules/>
                {/* <Aboutus /> */}
                
               
                {/* <Cardhover/> */}
                <Greatplacetowork/>
                <Stats/>
                
               
                {/* <div className="enquires">
                    <h1 className="heading">For export enquires mail us</h1>
                    <button className="button-gmail">exports@tenalidoublehorse.com</button>
                </div> */}
              
                {/* <MyComponent/> */}
                <Overview/>
              
        
                {/* <Newsletter/> */}
            </Fragment>
        );
    }
}

export default Content;