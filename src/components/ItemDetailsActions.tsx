import React, {useState} from 'react';
import {ItemDetailsState, ItemState} from "../models";
import {addToCart} from "../slices";
import {useDispatch,} from "react-redux";
import {useNavigate} from "react-router-dom";
import QuantityIncDec from "./QuantityIncDec.tsx";

const ItemDetailsActions : React.FC<{ item: ItemDetailsState}> = ({item}) => {
    const dispatch = useDispatch();
	// dispatch(fetchCart());
	// const cart: ItemInCartState[] = useSelector(selectCart);
    const navigate =useNavigate();

    const [selectedSize, setSelectedSize] = useState('');
	const [quantity, setQuantity] = useState(1);
    const {  sizes,  } = item;
    const sizesArray = sizes.filter(size => size.available);

    const handleSelectedSize = (size: string) => {
        setSelectedSize(size)
    }
	const handleAddToCart = (item: ItemState) => {
        if (selectedSize === '') return;
        const itemInCart = {
            id: item.id,
            title: item.title,
            size: selectedSize,
            count: quantity,
            price: item.price
        }
		dispatch(addToCart(itemInCart));


        setQuantity(1);
        setSelectedSize('');
        navigate('/cart');
    }

    if (sizesArray.length === 0)
        return (
        <div className="text-center">
            <p>Размеры в наличии: нет</p>
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
                    <QuantityIncDec quantity={quantity} setQuantity={setQuantity}/>
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
