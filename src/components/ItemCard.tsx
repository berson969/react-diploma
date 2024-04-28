import React from 'react';
import {ItemState} from "../models";

const ItemCard : React.FC<{ item: ItemState }> = ({ item }) => {
    return (
        <div className="card catalog-item-card">
            <img src={item.images[0]}
                 className="card-img-top img-fluid" alt={item.title} />
            <div className="card-body">
                <p className="card-text">{item.title}</p>
                <p className="card-text">{`${item.price} руб.`}</p>
                <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
            </div>
        </div>
    );
};

export default ItemCard;
