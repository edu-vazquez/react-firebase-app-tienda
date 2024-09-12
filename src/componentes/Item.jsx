import { Link } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";

const Item = ({ producto }) => {
    return (
        <div className="producto">
            <img src={producto.imagen} alt={producto.titulo} />
            <div>
                <h4>{producto.titulo}</h4>
                <p>${producto.precio}</p>
                <p>{producto.categoria}</p>
                <Link to={`/item/${producto.id}`} className="ver-mas">Ver mas</Link>
            </div>
        </div>
    )
}

export default Item;