import React from  'react';

import {Link, Route} from 'react-router-dom'




export default class  Servizi extends React.Component{
    render(){
        const array=[{
            id:1,
            name:"Sviluppo Software",
            path:'/Sviluppo_software',
            
        },
        {
            id:2,
            name:"Consulenza e informazione",
            path:'/cons&inf',
            
        },
        {
    
        id:3,
        name:"assistenza tecnica",
        path:'/assistenza_tecnica',
        
    },
    {
    
        id:4,
        name:"richiedi un preventivo",
        path:'/preventivo',
        
    }];
        
        return(
            <div>
                
                <p>
                   <ul>
                      { array.map((temp)=>{
                          return(
                               <div>
                                   <li >
                                       <Link to={temp.name}>{temp.name}</Link>
                                   </li>
                               </div>
                          )
                       })}
                   </ul>
                </p>
                </div>
        
        );
    }
}