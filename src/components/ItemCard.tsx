import React from 'react';
import {ItemState} from "../models";
import {Link} from "react-router-dom";

const ItemCard : React.FC<{ item: ItemState }> = ({ item }) => {
    return (
        <div className=" catalog-item-card">
            <img src={item.images[0]}
                 className="card-img-top img-fluid item-image"
                 alt={item.title}
            />
            <div className="card-body">
                <p className="card-text">{item.title}</p>
                <p className="card-text">{`${item.price} руб.`}</p>
                <Link to={`/catalog/${item.id}`} className="btn btn-outline-primary">Заказать</Link>
            </div>
        </div>
    );
};

export default ItemCard;
