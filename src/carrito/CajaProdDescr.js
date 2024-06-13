import polo1 from '../polo1.png'
import thor from '../thor.png'





export default function CajaProdDescr() {

    return (
        <>

            <div className='caja_general_carrito' >
                  {/*caja1*/} 
 <div className='CAJASUB1'>
    <img className='imgdescr' src={thor}alt='' ></img>
 </div>
                
                  {/*caja2*/} 
                <div className='CAJASUB2'>
                    <div className='caja_descripcion ajustar'>
                        <div className='descripcion_title'>
                            <span className='card-title'>Santa Cruz</span>
                            <span className='card-title'>S/50</span>

                        </div>
                        <div className='parr'>Este polo deportivo fusiona tecnología de vanguardia y materiales premium',
                      </div>

                    </div>

                    <div className='descripcion_title'>
                        <div>
                            <span>Talla</span>
                            <select value='1' onChange=''>
                                <option value="">Selecciona...</option>
                                <option value="1">xs</option>
                                <option value="2"> xxs</option>
                                <option value="3">xl</option>
                            </select>
                        </div>

                        <div>
                            <label for="inputValue">Cantidad</label>
                            <input className='inputt' type="text" id="inputValue" name="inputValue"></input>

                        </div>
                    </div> 
                   
            
                   
                </div>  
                
                
                {/*caja3*/}  
                <div className='CAJASUB3'>
                <i class="fi fi-rr-cross"></i>
              
      <i className="fi fi-rr-heart"></i>

                </div>
          
                   
            </div>


        </>
    )


}