import React, { Component , Fragment} from 'react';


import L from "leaflet";
import Mapcountries from './Mapcountries';
import Newsletter from '../home-v2/Newsletter';
import Cards from './Productcards';
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