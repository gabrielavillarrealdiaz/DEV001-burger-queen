import img from 'C:/Users/Gabriela/Desktop/BQ/DEV001-burger-queen/src/img/logo.jpeg'
export function Menu(){
    return(
        <section className='contenedor'>
        <img src={img} alt="logo" className='logoMini'/>

            <div className="menuDiv">
            <h2>Desayuno</h2>
             <p> productos : valor : cantidad </p>
             <p> productos : valor : cantidad </p>           
           
 
            </div>

            <div className="menuDiv">
            <h2>Almuerzo</h2>  
            <p> productos : valor : cantidad </p>
            </div>

            <div className="menuDiv">
            <h2>Pedido</h2>  
            <p>resumen</p>
            <button className='botonChef'>Realizar pedido</button>
     
          
           </div>

        </section>
        // configurar firebase 
        //almacenar productos en la base de datos coleccion de firestore 
        // almacena en un estado de react... antes de apretar el boton 
        // el boton hacer pedido guarda el pedido en la base de datos
        // guardar pedido en base de datos 
        // coleccion para almacenar usuarios... para el login
        //
        // vista menu, que muestre todos los productos en forma de cuadricula. seleccionar prpductos y almacena en state - useState, guardar en ese estado un array con los productos seleccionados. 
        // al presionar el boton, se envia a la base de dato de pedidos o ordenes 
        // chef ingresa y renderiza ordenes en cuadricula. cuando esta lista se elimina de base de datos.
        // para empezar, hacer base de datos de productos y en react crear vista de mesero y desplegar productos 
    )
}