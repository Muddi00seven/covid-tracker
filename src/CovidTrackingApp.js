import React from 'react';
import {Card , Chart , CountryPicker} from './Components';
import { fetchData } from './api';
class CovidTrackingApp extends React.Component {
    state = {
        data: {},
    }

    async componentDidMount() {
        const data = await fetchData();
    
        this.setState({ data });
      }
    
    render() {
        const { data } = this.state;
return (

    <div>
     <Card data={data}/> 
     <Chart/> 
     <CountryPicker/>
  </div>
)

    }
}
export default CovidTrackingApp;