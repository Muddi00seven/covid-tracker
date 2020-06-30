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
this.setState({data : fetchedData , country : country});
    }
    render() {
        const { data , country } = this.state;
return (

    <div className={styles.container}>
     <Card data={data}/> 
     <CountryPicker handleCountryChange={this.handleCountryChange}/>

     <Chart data={data} country={country}/> 
  </div>
)

    }
}
export default CovidTrackingApp;