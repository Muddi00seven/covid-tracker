import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';
const CountryPicker = () => {
    return (
 <FormControl className={styles.formControl}>
     <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
         <option value=''>
            Global
         </option>
         <option>
             {fetchCountries.map((country, i) => <option key={i} value={country}>{country} </option>)}
         </option>
     </NativeSelect>
 </FormControl>

    )
}

export default CountryPicker;
