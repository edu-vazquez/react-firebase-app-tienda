import { useEffect, useState } from "react";
import ItemList from './ItemList'
import { useParams } from "react-router-dom";

// FUNCIONES PARA FIREBASE PARA UNA LISTA DE ITEMS
import { collection } from 'firebase/firestore'; // ESTO ES PARA CREAR UNA REFERENCIA LA COLECTION DE UNA BSE DE DATOS
import { getDocs } from 'firebase/firestore'; // ESTO ES PARA SOLICITAR DOCS (SERIAN ENTRADAS DE LA COLLECTION)
import { query } from 'firebase/firestore'; // ESTO ES PARA HACER UNA QUERY EN FIREBASE
import { where } from 'firebase/firestore'; // ESTO PARA FILTRAR SEGUN UN PARAMETRO 
import { db } from "../firebase/firebase-config"; // ESTA ES LA DB QUE SE CREO EN EL firebase-config

// esta es una funcion propia en ../helpers y se importo para usarla aqui 
import { toCapital }  from '../helpers/toCapital'

const ItemListContainer = () => 
{
    
    const [productos, setProductos] = useState([]);
    
    const categoria = useParams().categoria;

    useEffect(() => 
    {
        
        const productorRef = collection(db, "productos") 
        //esto recibe dos parametros, la base de datos y el nombre de la collection que esta en firebase

        const filtrar = categoria? query(productorRef, where("categoria", "==", categoria)) : productorRef; 
        // aqui si existe categoria se guardara un query sino se guardara la referencia a la coleccion sin filtro 

        getDocs(filtrar) //devuelve una promesa
            .then(resp => 
            {
                setProductos(
                    resp.docs.map( item => {
                        return {...item.data(), id: item.id}
                    })
                )
            })


    }, [categoria])
    
    return (
        <>
            <ItemList productos={productos} titulo={categoria ? toCapital(categoria) : "Productos"}/>
        </>
    )
}

export default ItemListContainer;