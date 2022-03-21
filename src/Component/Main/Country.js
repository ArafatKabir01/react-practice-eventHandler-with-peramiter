import React, { useEffect, useState } from 'react';

const Country = () => {
    const [countries , setCountries] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[]);


    return (
        <div>
            {
                countries.map(country => <Person
                key={country.id}
                countryData = {country}
                ></Person>)
            }
            
        </div>
    );
};
const addProduct = (id)=>{
    console.log('add product' , id);
                
};
const Person = (props)=>{
    const {name,id,age,balance} = props.countryData;
    return(
        <div>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{id}</p>
            <button onClick={ () => addProduct(id)}>Click me</button>

        </div>
    )
};

export default Country;