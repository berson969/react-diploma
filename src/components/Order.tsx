import React, {useState} from 'react';
import {usePlaceOrderMutation} from "../api";
import {useSelector} from "react-redux";
import {CartCartState} from "../models";

const Order : React.FC = () => {
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [agreement, setAgreement] = useState(false);

    const cart = useSelector((state: CartCartState) => state.carts.cart)
    const [placeOrder, { isLoading, isSuccess, isError }]
        = usePlaceOrderMutation();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!agreement) {
            alert('Согласитесь с условиями доставки');
            return;
        }
        placeOrder({
            owner: {
                phone,
                address,
            },
            items: cart
        })
        setPhone('');
        setAddress('');
    }

    return (
        <section className="order">
            <h2 className="text-center">Оформить заказ</h2>
            <div className="card" style={{ maxWidth: '30rem', margin: '0 auto'}}>
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="phone">Телефон</label>
                        <input
                            className="form-control"
                            id="phone"
                            placeholder="Ваш телефон"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Адрес доставки</label>
                        <input
                            className="form-control"
                            id="address"
                            placeholder="Адрес доставки"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="form-group form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="agreement"
                            checked={agreement}
                            onChange={(e) => setAgreement(e.target.checked)}
                        />
                            <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-outline-secondary"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Оформление...' : 'Оформить'}
                    </button>
                    {isSuccess && <p>Заказ успешно оформлен!</p>}
                    {isError && <p>Ошибка при оформлении заказа. Пожалуйста, попробуйте еще раз.</p>}
                </form>
            </div>
        </section>
    );
};

export default Order;
