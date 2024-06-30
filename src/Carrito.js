import CajaProdDescr from './carrito/CajaProdDescr'
import ResumenPedido from './carrito/ResumenPedido'

export default function Carrito() {

    return (
        <>

            <div className=' general_carrito'>
                <div className='cabezera_carrito'>
                    <i class="fi fi-rr-cart-shopping-fast"></i>
                    <h2>Carrito de productos</h2>


                </div>

                <div className='bienbenidad_carrito'>
                    <p>"¡Bienvenido/a a tu carrito de compras!
                        Aquí encontrarás todo lo que has seleccionado
                        cuidadosamente. Es el momento de revisar cada
                        artículo y asegurarte de que tienes todo lo que
                        necesitas. Una vez que estés listo/a, solo tienes que
                        seguir adelante y completar tu compra. ¡Gracias por
                        elegirnos y esperamos que disfrutes de tus productos!"</p>
                </div>

                <div className='descr_carrito'>

                    <div className='column_product'>
                        <CajaProdDescr />
                        <CajaProdDescr />
                        <CajaProdDescr />
                        <CajaProdDescr />
                        <CajaProdDescr />
                        <CajaProdDescr />
                        <CajaProdDescr />
                        <CajaProdDescr />
                    </div>
                    <div className=' resumen_pedido_general'>

                        <ResumenPedido />
                    </div>


                </div>
            </div>
        </>
    )




}