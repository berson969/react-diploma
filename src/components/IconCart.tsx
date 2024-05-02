import React from 'react';
import {useSelector} from "react-redux";
import {CartCartState} from "../models";
import {Link} from "react-router-dom";

const IconCart: React.FC = () => {
    const totalQuantity = useSelector((state: CartCartState ) => state.carts.totalQuantity);

    return (
        <Link to="/cart" className="header-controls-pic header-controls-cart">
            {totalQuantity !== 0 &&
                <div className="header-controls-cart-full">{totalQuantity}</div>
            }
            <div className="header-controls-cart-menu"></div>
        </Link>
    );
};

export default IconCart;