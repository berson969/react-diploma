import React from 'react';
import {QuantityState} from "../models";

const QuantityIncDec: React.FC<QuantityState> = ({ quantity, setQuantity }) => {


	const decreaseQuantity = () => quantity > 1 ? setQuantity(quantity - 1) : null;
	const increaseQuantity = () => quantity < 10 ? setQuantity(quantity + 1) : null;

	return (
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
	);
};

export default QuantityIncDec;
