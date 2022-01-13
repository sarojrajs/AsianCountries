import axios from "axios";
import { useEffect, useState } from "react";
import { getCountries } from "../../api";
import CountryCard from "../../components/CountryCard/CountryCard";
import './Home.css'
import Search from "../../components/Search/Search";
import { FiRefreshCw } from "react-icons/fi";
import Button from "../../components/Button/Button";
function Home (){
    const [defaultCountries,setDefaultCountries]=useState([]);
    const [countries,setCountries]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(false);

    const getAsianCountries=()=>{
        axios.get(getCountries).then((response)=>{
            setDefaultCountries(response.data);
            setCountries(response.data);
            setLoading(false);
            setError(false);
        }).catch(error=>{
            setError(true);
            setLoading(false);
        })
    }

    useEffect(()=>{
        setLoading(true);
        getAsianCountries();
    },[])

    const beginSearch=(searchInput)=>{
        if(searchInput===''){
            setCountries(defaultCountries);
        }else{
            const filteredCountries=defaultCountries.filter((country)=>country.name.official.toLowerCase().includes(searchInput.toLowerCase()))
            setCountries(filteredCountries)
        }
    }

    const refresh=()=>{
        setLoading(true)
        getAsianCountries()
    }


    if(error){
        return(
            <p>Error Loading</p>
        )
    }
    return(
        <div className="home">
            <div className="homeSearch">
                <div className="homeRefresh">
                    <Button icon={<FiRefreshCw/>} btnStyle='primary' onClick={refresh}>
                        Refresh
                    </Button>
                </div>
                <Search 
                    onClick={beginSearch}
                    clear={true}
                />
            </div>
            {
                loading ?(
                    <p>Loading...</p>
                ):(
                    <div className="homeCountryGrid">
                    {
                        countries.map((country,index)=>(
                            <CountryCard 
                            key={index}
                            name={country.name.official}
                            region={country.region}
                            subRegion={country.subregion}
                            population={country.population}
                            borders={country.borders}
                            capital={country.capital}
                            languages={country.languages}
                            flag={country.flags.png}
                            />
                        ))
                    }
                    </div>
                )
            }
        </div>
    )
}

export default Home;