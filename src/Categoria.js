
import React from "react";



const customStyles = {
    color: 'orange',
    fontSize: '29px',
    textAlign: 'start',
    margin: '2rem',

};
//------------------------------------------------------------------------------------------------------


      
//------------------------------------------------------------------------------------------------------






export default function Categoria( {tipo,categoria} ) {

    return(
    <>


    <div className='caja_seccion'>
        <h2 style={customStyles}>{tipo} </h2>

        <div className='botones_seguir'>  <i class="fi fi-rr-angle-double-left"></i>
            <i class="fi fi-rr-angle-double-right"></i>  </div>

    </div>
    <div className='fila_productos'>
 {categoria}
    </div>



</> 

)

}