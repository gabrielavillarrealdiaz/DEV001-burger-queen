
import img from 'C:/Users/Gabriela/Desktop/BQ/DEV001-burger-queen/src/img/logo.jpeg'
import imgName from 'C:/Users/Gabriela/Desktop/BQ/DEV001-burger-queen/src/img/imgName.jpeg'
export function Home(){
    return(
        <section className="contenedor">
            
            <img src={imgName} alt="name" className='name'/>
            <div>  
             
                <img src={img} alt="logo" className='logo'/>
            </div>
            <div>
                <button className='boton'>Mesera</button>
                <button className='boton'>Chef</button>
            </div>


        </section>
    )
}