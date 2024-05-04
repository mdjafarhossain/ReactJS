import React, { useState } from "react";
import './MobileList.css';


function MobileList(){

const product=[
    {   id:1,
        name:'Apple',
        description:'14x 6 inch disp',
        price: 500,
        rating:'Good',
        instock:'Yes'
    },
    {
        id:2,
        name:'Samsung',
        description:'F14 5 inch',
        price: 200,
        rating:'Excellent',
        instock:'Yes'
    },
    {
        id:3,
        name:'MIn',
        description:'6 inch dual camp',
        price: 23500,
        rating:'Avg',
        instock:'No'
    }
    ];


    return (
    <div>
         <table>
            <thead>
           <tr>
             <th>Name</th>
             <th>Description</th>
             <th>Price</th>
             <th>Rating</th>
             <th>InStock</th>
         </tr>
         </thead>
         <tbody>
            {
            product.map((prod,index)=>(
                
                <tr key={prod.id}>
                <td>{prod.name}</td>
                <td>{prod.description}</td>
                <td>{prod.price}</td>
                <td>{prod.rating}</td>
                <td>{prod.instock}</td>
                </tr>
            )
            )
        }
         </tbody>
        
         </table>
         </div>
     );
}

export default MobileList;