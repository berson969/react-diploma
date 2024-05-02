import React, {useState} from 'react';
import {ItemDetailsState, ItemState} from "../models";
import {addToCartReducer} from "../slices";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const ItemDetailsActions : React.FC<{ item: ItemDetailsState}> = ({item}) => {
    const dispatch = useDispatch();
    const navigate =useNavigate();

    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const {  sizes,  } = item;
    const sizesArray = sizes.filter(size => size.available || !size.available);

    const handleSelectedSize = (size: string) => {
        setSelectedSize(size)
    }
    const decreaseQuantity = () => quantity > 1 ? setQuantity(quantity - 1) : null;
    const increaseQuantity = () => quantity < 10 ? setQuantity(quantity + 1) : null;

    const handleAddToCart = (item: ItemState) => {
        if (selectedSize === '') return;
        const itemInCart = {
            id: item.id,
            title: item.title,
            size: selectedSize,
            count: quantity,
            price: item.price
        }
        dispatch(addToCartReducer(itemInCart));
        setQuantity(1);
        setSelectedSize('');
        navigate('/cart');
    }

    if (sizesArray.length === 0)
        return (
        <div className="text-center">
            <p>Размеры в наличии:</p>
        </div>);


    return (
        <>
            <div className="text-center">
                <p>Размеры в наличии:
                    {sizesArray.map(size =>
                            <span
                                key={size.size}
                                onClick={() => handleSelectedSize(size.size)}
                                className={`catalog-item-size ${selectedSize === size.size ? 'selected' : ''}`}
                            >
                                {size.size}
                            </span>
                    )}
                </p>
                <p>Количество:
                    <span className="btn-group btn-group-sm pl-2">
                                <button
                                    onClick={decreaseQuantity}
                                    className="btn btn-secondary"
                                >-</button>
                                <span className="btn btn-outline-primary">{quantity}</span>
                                <button
                                    onClick={increaseQuantity}
                                    className="btn btn-secondary"
                                >+</button>
                            </span>
                </p>
            </div>
            <button
                onClick={() => handleAddToCart(item)}
                className="btn btn-danger btn-block btn-lg"
            >
                В корзину
            </button>
        </>
    );
};

export default ItemDetailsActions;