import React, { Component , Fragment} from 'react';



import Mapcountries from './Mapcountries';
import Mapdata from "../../../data/traildata.json";
import { Link } from "react-router-dom";




class Content extends Component {
    render() {
       
        return (
            <Fragment>
                <Mapcountries />
            </Fragment>
        );
    }
}

export default Content;