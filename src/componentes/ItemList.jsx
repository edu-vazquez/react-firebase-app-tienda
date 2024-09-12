import { useState } from "react";
import Item from "./Item";

const ItemList = (props) => {

    return (
        <div className="container">
            <h2 className="main-title">{props.titulo}</h2>
            <div className="productos">
                { props.productos.map(item => <Item producto={item} key={item.id}/>) }
            </div>
        </div>
    )
}

export default ItemList;