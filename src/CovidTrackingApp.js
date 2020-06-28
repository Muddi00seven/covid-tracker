import React from 'react';
import {Card , Chart , CountryPicker} from './Components';
import { fetchData } from './api';

class CovidTrackingApp extends React.Component {
    async componentDidMount() {
        const data = await fetchData();
        console.log(data)
         }
    render() {
return (

    <div>
     <Card/> 
     <Chart/> 
     <CountryPicker/>
  </div>
)

    }
}
export default CovidTrackingApp;