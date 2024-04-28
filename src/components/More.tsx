import React, {useState} from 'react';
import {useGetItemsQuery} from "../api";
import Preloader from "./Preloader.tsx";

const More : React.FC = () => {
    const [offset, setOffset] = useState(0);
    const {  isLoading } = useGetItemsQuery({offset, categoryId: 13});

    const handleClick = () => {
        const newOffset: number = offset + 6;
        setOffset(newOffset)
    }

    if (isLoading) return <Preloader />;
    return (
        <div className="text-center">
            <button
                className="btn btn-outline-primary"
                onClick={handleClick}
            >
                Загрузить ещё
            </button>
        </div>
    );
};

export default More;
