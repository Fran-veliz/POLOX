  import visa from '../visa.png'
  import yape from '../yape.jpeg'
  import tunki from '../tunki.png'
  import plin from '../plin.jpeg'



export default function ResumenPedido(){


    return (

        <>
         
                <div className="order-summary">
                    <button className="pay-button">IR A PAGAR</button>
                    <div className="summary">
                        <h2>RESUMEN DEL PEDIDO</h2>
                        <div className="details">
                            <div className="item">
                                <span>2 productos</span>
                                <span>S/ 1,248.00</span>
                            </div>
                            <div className="item">
                                <span>Entrega</span>
                                <span>Gratis</span>
                            </div>
                            <div className="total">
                                <span>Total</span>
                                <span>S/ 1,248.00</span>
                            </div>
                            <div className="tax">
                                <span>(IGV incluido S/ 190.37)</span>
                            </div>
                        </div>
                        <div className="promo-code">
                            <input type="text" placeholder="Introduce tu código promocional" />
                            <button className="add-code-button">+</button>
                        </div>
                    </div>
                    <div className="payment-options">
                        <img src={visa}  alt="Visa" />
                        <img src={yape} alt="Yape" />
                        <img src={tunki} alt="Tunki" />
                        <img src={plin} alt="Plin" />
                      
                    </div>
                </div>
           


        </>
    )
}