import React from 'react';
import { connect } from 'react-redux';
import './style.css'

const Foods=({foodItems})=>
{

    return(
        <>
        <div className="foods">
            {
                foodItems.map(
                    (x)=>(
                      <div className="background">
                          <img src={x.image} alt="food pics"/>
                          <div className="footer"> 
                          <span>{x.title.toUpperCase()}</span>&nbsp;
                          <span>Rs:{x.price}/-</span>
                          </div>

                      </div>  
                    )
                )
            }
        </div>
        </>
    )
}

const f1=(store)=>
{
    return{foodItems:store.f1.Foods}
}
export const FoodHoc=connect(f1,null)(Foods)