import React, { Component, Fragment } from 'react';

import PortfolioV1 from './PortfolioV1';
import PortfolioV2 from './Profile'
// import AppleFactsSlider from '../home/Newproduct';

class Content extends Component {
    render() {
        return (
            <Fragment>
              
               <PortfolioV2/>
               {/* <AppleFactsSlider/> */}
            </Fragment>
        );
    }
}

export default Content;