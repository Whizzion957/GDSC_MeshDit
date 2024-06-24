import React, { useState } from 'react'
import classes from './search.module.css'
import { useNavigate, useParams } from 'react-router-dom';

export default function Search() {
    const [term, setTerm] = useState('');
    const navigate = useNavigate();
    const {serachTerm} =useParams();

    const search = async() => {
        term? navigate('/search/' + term) : navigate('/');
    };
  return (
    <div className={classes.container}>
        <input type='text' placeholder='Seach FoodFat!!' onChange={e=> setTerm(e.target.value)} onKeyUp = {e => e.key==='Enter' && search()}
        defaultValue={serachTerm} />
        <button onClick={search}>Search</button>
    </div>
  )
}
