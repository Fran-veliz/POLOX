 import React from "react"



const Seccion4=()=>{
    const features=[
{
        titulo: "Rendimiento mejorado",
        descripcion: "Tecnología antihumedad para mantenerte fresco y seco."
      },
      {
        titulo: "Comodidad durante todo el día",
        descripcion: "Tecnología antihumedad para mantenerte seco en días calurosos."
      },
      {
        titulo: "Tejido transpirable",
        descripcion: "Libertad de movimiento y comodidad con circulación de aire óptima."
      },
      {
        titulo: "Frescura duradera",
        descripcion: "Transpirabilidad natural para mantenerte fresco y seco."
      },
      {
        titulo: "Durabilidad superior",
        descripcion: "Polos que resisten el paso del tiempo y el uso diario."
      },
      {
    titulo: "Elegancia atemporal",
        descripcion: "Polos con diseño clásico y sofisticado con algodón egipcio de alta calidad."
      }



]

return (

<>
 <div className="row">
     {features.map((features)=>(
            
            <div key={features.titulo} >
                  <i className="fi fi-ro-square-right"></i>
                <div className="caja_content">
                <h3 className="h33">{features.titulo} </h3>
            
                <p>{features.descripcion} </p>
           
                </div>
            </div>
           
        ))}
  
 </div>

</>

)

}
export default  Seccion4;