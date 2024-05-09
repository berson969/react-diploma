import React from 'react';
import {Link} from "react-router-dom";
import {ItemInCartState} from "../models";
import {useDispatch, useSelector} from "react-redux";
import {removeFromCart, selectCart, updateToCart} from "../slices";
import {selectTotalPrice} from "../selectors";
import QuantityIncDec from "./QuantityIncDec.tsx";

const Cart : React.FC = () => {
    const dispatch = useDispatch();
    const cart: ItemInCartState[] = useSelector(selectCart);
    const totalPrice = useSelector(selectTotalPrice);

	const updateQuantity = (item: ItemInCartState, quantity: number) => {
		const updatedItem = { ...item, count: quantity };
		dispatch(updateToCart(updatedItem));
	}
    const removeClick = (item: ItemInCartState) => {
			dispatch(removeFromCart(item));
    };

    return (
        <section className="cart">
            <h2 className="text-center">Корзина</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th className="text-center" scope="col">#</th>
                    <th className="text-center" scope="col">Название</th>
                    <th className="text-center" scope="col">Размер</th>
                    <th className="text-center" scope="col">Кол-во</th>
                    <th className="text-center" scope="col">Стоимость</th>
                    <th className="text-center" scope="col">Итого</th>
                    <th className="text-center" scope="col">Действия</th>
                </tr>
                </thead>
                <tbody>
                    {cart.map((item: ItemInCartState, index: number) =>
                        <tr key={`${item.id}-${item.size}`}>
                            <td scope="row">{index+1}</td>
                            <td><Link to={`/catalog/${item.id}`} >{item.title}</Link></td>
                            <td className="text-center">{item.size}</td>
							<td className="text-center"><QuantityIncDec
								quantity={item.count}
								setQuantity={(newCount) => updateQuantity(item, newCount)}
							/></td>
                            <td className="text-center">{item.price}</td>
                            <td className="text-center">{item.price * item.count}</td>
                            <td className="text-center"><button
                                onClick={() => removeClick(item)}
                                className="btn btn-outline-danger btn-sm"
                            >Удалить</button></td>
                        </tr>
                    )}
                    <tr>
                        <td colSpan={5} className="text-right">Общая стоимость</td>
                        <td className="text-center">{`${totalPrice} руб.`}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default Cart;
