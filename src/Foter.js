import { Productos_data } from "./Data";
import Targeta from "./Targeta";
import Categoria from "./Categoria";


const CategoriaHombre = Productos_data.filter(person =>
    person.categoria === 'hombre'
  );
  const totalHombres = CategoriaHombre.map(person =>
    <Targeta

    product={person}
  />
  )
  const CategoriaMujer = Productos_data.filter(person =>
    person.categoria === 'mujer'
  );
  const totalMujer = CategoriaMujer.map(person =>
    <Targeta
   
    product={person}
  />
  )


  export default function Foter(){


    return(

<>

<Categoria
tipo={'cater'}
categoria={totalMujer}


/>
<Categoria
tipo={'cater'}
categoria={totalHombres}


/>



</>

    )
  }