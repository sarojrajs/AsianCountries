import { useState } from 'react';
import Button from '../Button/Button';
import './Search.css'
function Search(props){
    const [input,setInput]=useState('')
    const beginSearch=(e)=>{
        e.preventDefault();
        props.onClick(input);
        if(props.clear){
            setInput("")
        }
    }
    return (
        <form className="search">
            <input type='text' placeholder='Search' value={input} onChange={(e)=>{
                setInput(e.target.value)
            }}/>
            <Button btnStyle='secondary' onClick={beginSearch}>Search</Button>
        </form>
    )
}

export default Search;