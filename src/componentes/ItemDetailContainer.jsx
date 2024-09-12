import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";

// esto es un hook para poder recibir parametros dinamicos de rutas
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

// FUNCIONES PARA FIREBASE PARA UN ITEM
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    const id = useParams().id; {/*IMPORTANTE ACA SE RECIVE EL PARAMETRO COMO STRING*/}

    useEffect(() => {
        const docRef = doc(db, "productos", id);
        getDoc(docRef)
            .then( resp => {
                setItem( { ...resp.data(), id: resp.id } );
            })
    }, [item])

    return (
        <div>
            { item && <ItemDetail item={item}/> }
        </div>
    )
}

export default ItemDetailContainer;