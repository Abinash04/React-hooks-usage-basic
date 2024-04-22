import React, { useEffect, useState } from 'react'
const apiURL = "https://api.coindesk.com/v1/bpi/currentprice.json"

function GetDataFromApi() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const fetchData = async() =>{
        try{
            setIsLoading(true);
            const response = await fetch(apiURL);
            const result = await response.json();
            
            setData(result);
            setIsLoading(false);
        } catch(error){
            setError(error)
            setIsLoading(false)
        }
        };
        fetchData();

        // componenent unmounts if any clean up needed
        return () => {
            // clean up here
        };
    },[])
  return (
    <div>
      <h2>API data</h2>
      {isLoading && <p>is loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (<h2>Data: <pre>{JSON.stringify(data)}</pre></h2>)}
    </div>
  )
}

export default GetDataFromApi
