import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {selectTotalQuantity} from "../selectors";
const IconCart: React.FC = () => {
    const totalQuantity = useSelector(selectTotalQuantity);

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
