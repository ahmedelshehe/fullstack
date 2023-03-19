const CountriesList =({countries,handleShowCountry})=>{
    return (
    <>
      {countries.map((country,i)=> {
        return (
            <p key={i}>{country.name.common}   <button onClick={()=>{handleShowCountry(country)}}>show</button></p>  
            
            ) })}
    </>
    )
    
}
export default CountriesList;