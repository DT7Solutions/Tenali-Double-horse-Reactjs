import React, { Component, Fragment } from 'react';
import Aboutus from "../home/Aboutus";
import Tdhabout from './Tdhabout'
import Infographics from "../home-v3/Infographics";
import Newsletter from "../home-v2/Newsletter";
import Stats from '../home/Stats';
import Rules from './Rules';
import MyComponent from '../home-v2/MyComponent';

import Greatplacetowork from '../blog-full/Greatplacetowork'
import Cardhover from './Cardhover';
import Tdhgroup from './Tdhgroup';
import Feedback from '../home/Feedback';
import Messenger from '../home/Messenger';
import Ourstory  from '../home/Ourstory';
import Tdhf from './Tdhf'

class Content extends Component {
    render() {
        return (
            <Fragment>
               <Tdhabout/>
               <Tdhgroup/>
                <Rules/>
              
                
               
              
                <Greatplacetowork/>
                <Stats/>
                
               
                
              
              
                {/* <Overview/> */}
                <Tdhf/>
               
              
                <Feedback/>
                <Messenger/>
                
              
            </Fragment>
        );
    }
}

export default Content;