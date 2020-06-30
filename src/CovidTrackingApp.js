import React from 'react';
import {Card , Chart , CountryPicker} from './Components';
import { fetchData } from './api';
import styles from './App.module.css'
class CovidTrackingApp extends React.Component {
    state = {
        data: {},
    }

    async componentDidMount() {
        const data = await fetchData();
    
        this.setState({ data });
      }
    
      handleCountryChange = async (country) => {
            const fetchedData = await fetchData(country);
this.setState({data : fetchedData });
    }
    render() {
        const { data } = this.state;
return (

    <div className={styles.container}>
     <Card data={data}/> 
     <CountryPicker handleCountryChange={this.handleCountryChange}/>

     <Chart/> 
  </div>
)

    }
}
export default CovidTrackingApp;