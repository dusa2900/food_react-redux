import React from 'react';
import {connect } from 'react-redux';
import {Link} from 'react-router-dom';
import './style1.css'

const City=({CityPlaces,match})=>
{
    console.log(match.url)
    return(
        <>
       <div className="city-main" >
       <h1>Food items</h1>
       <Link to="/foods">
       {
            CityPlaces.map(
                x=> (
                    <div className="city">
                        <div className="background" style={{ backgroundImage:`url(${x.image})`}}>
                            <div className="title">
                                <h2>{x.cityname.toUpperCase()}</h2>
                            </div>
                        </div>
                    </div>
                )


            )
        }
       </Link>
       </div>
        </>
    )
}

const f1=(store)=>
{
    return {CityPlaces:store.c1.Cities}
}



export const CityHoc=connect(f1,null)(City);