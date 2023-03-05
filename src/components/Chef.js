import img from 'C:/Users/Gabriela/Desktop/BQ/DEV001-burger-queen/src/img/logo.jpeg'
export function Chef(){
    return(
        <section className="contenedorChef">
             <img src={img} alt="logo" className='logoMini'/>

           
            <div className="divChef" >
                pedido1 
                <p>fecha</p>
                <p>comida</p>
                <p>estatus (pendiente, preparacion, ok)</p>
                x    
                <button className="botonChef">Preparacion</button>
                <button className="botonChef">Ok</button>
            </div>
            
            <div className="divChef" >
                pedido1 
                <p>fecha</p>
                <p>comida</p>
                <p>estatus</p>
                <button className="botonChef">Preparacion</button>
                <button className="botonChef">Ok</button>
            </div>
        </section>
    )
}