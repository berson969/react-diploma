import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {CartCartState, ItemInCartState} from "../models";
import {useDispatch, useSelector} from "react-redux";
import {getCart, removeFromCartReducer, selectCart, setCartTotals} from "../slices";

const Cart : React.FC = () => {
    const dispatch = useDispatch();
    const cart: ItemInCartState[] = useSelector(selectCart);

    const totalPrice = useSelector((state: CartCartState ) => state.carts.totalPrice)

    useEffect(() => {
        dispatch(getCart());
        calculateTotal(cart);
    }, []);

    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);

    useEffect(() => {
        calculateTotal(cart);
    }, [cart]);

    const calculateTotal = (cart: ItemInCartState[]) => {
        const totalPrice = cart.reduce((acc: number, item: ItemInCartState) =>
            acc + (item.price * item.count), 0);
        const totalQuantity = cart.reduce((acc: number, item: ItemInCartState) =>
            acc + item.count, 0);
        dispatch(setCartTotals({ totalPrice, totalQuantity }));
    };

    const removeFromCart = (item: ItemInCartState) => {
        dispatch(removeFromCartReducer(item))
    };


    return (
        <section className="cart">
            <h2 className="text-center">Корзина</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Название</th>
                    <th scope="col">Размер</th>
                    <th scope="col">Кол-во</th>
                    <th scope="col">Стоимость</th>
                    <th scope="col">Итого</th>
                    <th scope="col">Действия</th>
                </tr>
                </thead>
                <tbody>
                    {cart.map((item: ItemInCartState, index: number) =>
                        <tr key={`${item.id}-${item.size}`}>
                            <td scope="row">{index+1}</td>
                            <td><Link to={`/catalog/${item.id}`} >{item.title}</Link></td>
                            <td>{item.size}</td>
                            <td>{item.count}</td>
                            <td>{item.price}</td>
                            <td>{item.price * item.count}</td>
                            <td><button
                                onClick={() => removeFromCart(item)}
                                className="btn btn-outline-danger btn-sm"
                            >Удалить</button></td>
                        </tr>
                    )}
                    <tr>
                        <td colSpan={5} className="text-right">Общая стоимость</td>
                        <td>{`${totalPrice} руб.`}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default Cart;