import React,{useState,useEffect,createContext} from 'react';
import{housesData} from '../data';

export const HouseContext=createContext();
const HouseContextProvider=({children}) => {
  const[houses,setHouses]=useState(housesData);
  const[country,setCountry]=useState('Location (any)');
  const[countries,setCountries]=useState([]);
  const[property,setProperty]=useState('Property Type (any)');
  const[properties,setProperties]=useState([]);
  const[price,setPrice]=useState('Price range (any)');
  const[room,setRoom]=useState('Bedrooms (any)');
  const[loading,setLoading]=useState([false]);

  useEffect(()=>{
    const allCountries=houses.map((house)=>{
      return house.country;
    });
    
    const UniqueCountries=['Location (any)', ...new Set(allCountries)]
    
    setCountries(UniqueCountries);
  },[]);


  useEffect(()=>{
    const allProperties=houses.map((house)=>{
      return house.type;
    });
     
    const UniqueProperties=['Property Type (any)', ...new Set(allProperties)]
    
    setProperties(UniqueProperties);
  },[]);

const handleClick=()=>{
  
setLoading(true);
  const isDefault=(str)=>{
    return str.split(' ').includes('(any)');
  };
  const minPrice=parseInt(price.split( ' ')[0]);
  const maxPrice=parseInt(price.split( ' ')[2]);

  const noRoom=parseInt(room);
 
  const newHouses=housesData.filter((house)=>{
    const housePrice=parseInt(house.price);
    const houseRoom=parseInt(house.bedrooms);

    if(house.country==country && house.type==property && housePrice>=minPrice
      && housePrice<=maxPrice && houseRoom==noRoom){
        return house;
      }

      if(isDefault(country) && isDefault(property) &&isDefault(price) && isDefault(room)){
        return house;
      }
      if(!isDefault(country) && isDefault(property) &&isDefault(price) && isDefault(room)){
        return house.country===country;
      }
      if(isDefault(country) && !isDefault(property)&&isDefault(price) &&isDefault(room)){
        return house.type===property;
      }
      if(isDefault(country) && isDefault(property)&& !isDefault(price) && isDefault(room)){
        if(housePrice>=minPrice && housePrice<=maxPrice){
          return house;
        }
      }
      if(isDefault(country) && isDefault(property)&&isDefault(price) && !isDefault(room)){
        if(houseRoom==noRoom){
          return house;
        }
      }
      if(!isDefault(country) && !isDefault(property)&& isDefault(price) && isDefault(room)){
        return house.country===country && house.type===property;
      }
      if(isDefault(country) && !isDefault(property)&& !isDefault(price) &&isDefault(room)){
        if(housePrice>=minPrice && housePrice<=maxPrice){
          return house.type===property;
        }
      }
      if(!isDefault(country) && isDefault(property)&& !isDefault(price) && isDefault(room)){
        if(housePrice>=minPrice && housePrice<=maxPrice){
          return house.country===country;
        }
      }
      if(!isDefault(country) && isDefault(property)&&  isDefault(price) && !isDefault(room)){
        if(houseRoom==noRoom){
          return house.country===country;
        }
      }
      if(isDefault(country) && !isDefault(property)&& isDefault(price) && !isDefault(room)){
        if(houseRoom==noRoom){
          return house.type===property;
        }
      }
      if(isDefault(country) && isDefault(property)&& !isDefault(price) && !isDefault(room)){
        if(housePrice>=minPrice && housePrice<=maxPrice && houseRoom==noRoom){
          return house;
        }
      }
      if(!isDefault(country) && isDefault(property)&& !isDefault(price) && !isDefault(room)){
        if(housePrice>=minPrice && housePrice<=maxPrice && houseRoom==noRoom){
          return house.country===country;
        }
      }
      if(isDefault(country) && !isDefault(property)&& !isDefault(price) && !isDefault(room)){
        if(housePrice>=minPrice && housePrice<=maxPrice && houseRoom==noRoom){
          return house.type===property;
        }
      }
      if(!isDefault(country) && !isDefault(property)&& !isDefault(price) && isDefault(room)){
        if(housePrice>=minPrice && housePrice<=maxPrice){
          return house.country===country && house.type===property;
        }
      }
      if(!isDefault(country) && !isDefault(property)&& isDefault(price) && !isDefault(room)){
        if(houseRoom==noRoom){
          return house.country===country && house.type===property;
        }
      }
      

});

setTimeout(()=>{
  return newHouses.length< 1 ? setHouses([]) : setHouses(newHouses),
  setLoading(false);
   
},500);

};

  return (
  <HouseContext.Provider value={{
  country,
  setCountry,
  countries, 
  property,
  setProperty,
  properties,
  price,
  setPrice,
  room,
  setRoom,
  houses,
  loading,
  handleClick,
  loading, 

   

  }}>
  {children}
  </HouseContext.Provider>
  );
};

export default HouseContextProvider;

