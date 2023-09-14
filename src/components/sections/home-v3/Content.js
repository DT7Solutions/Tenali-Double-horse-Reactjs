import React, { Component, Fragment } from 'react';

import PortfolioV1 from './PortfolioV1';
import PortfolioV2 from './Profile'

class Content extends Component {
    render() {
        return (
            <Fragment>
              
               <PortfolioV2/>
            </Fragment>
        );
    }
}

export default Content;