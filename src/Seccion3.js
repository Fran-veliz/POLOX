 import React from 'react';
import polo1 from './polo1.png';

function  Imge(){

    return(
       <div className="img_sec3">
        <img  src={polo1} alt="Diseños mas populares"></img>
       </div> );
}

export default function Seccion3(){

 return(
    <>
 <div className="section_3">

    <h3 className="titulo"> Diseños mas populares</h3>
    <div className="cajas_populares">

    <Imge/>
    <Imge/>
    <Imge/>
    <Imge/>
    <Imge/>
    <Imge/>
   
   
    </div>
    <p>
    "Más de 1000 pedidos satisfechos y contando... ¡Únete a nuestra lista de clientes felices hoy mismo!"?
    </p>
    </div>
     </>
 )

}

