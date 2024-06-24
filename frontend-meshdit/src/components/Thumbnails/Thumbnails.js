import React from 'react'
import classes from './thumbnails.module.css'
import { Link } from 'react-router-dom'

export default function Thumbnails({foods}) {
  return (
    <ul className={classes.list}>
        {
            foods.map ( food => 
                <li key={food.id}>
                    <Link to={`/foods/${food.id}`}>
                        <img className={classes.image} src= {`/foods/${food.imageURL}`}
                        alt={food.name} />
                    </Link>
                    <Link>
                        <div className={classes.content}>
                            <div className={classes.name}>{food.name}</div>
                            <span className={`${classes.favourite} ${food.favourite ? '' : classes.not}`}>
                                
                            </span> 
                        </div>
                    </Link>
                </li>
            )
        }
    </ul>
  )
}
