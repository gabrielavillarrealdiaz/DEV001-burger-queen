import CardList from "./CardList";
import React, {useState, useEffect} from "react";
import { getFirestore, collection, getDocs} from "firebase/firestore/lite";




export function Productos({id}){
    const [data, setData] = useState([]);

    useEffect(() => {
    const db = getFirestore();
    const coleccion = collection(db,'productos')
    getDocs(coleccion)
    .then((res => setData(res.docs.map(producto =>({id: producto.id, ...producto.data()})))))


    }, [])

    
    return(
        
        <>
        
        < CardList data={data} />

        </>
        
    )
}
//<CardList data={data} />
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