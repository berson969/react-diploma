import React, {useState} from 'react';
import {selectOptions, setQueryOptions} from "../slices";
import {useDispatch} from "react-redux";
import {useGetItemsQuery} from "../api";

const More : React.FC = () => {
    const dispatch = useDispatch();
    const [offset, setOffset] = useState(0);
    const { data: items } = useGetItemsQuery({ ...selectOptions });

    const handleClick = () => {
        let newOffset = 0;
        if (items.length > 0) {
            newOffset = offset + 6;
        }
        setOffset(newOffset);
        dispatch(setQueryOptions({ ...selectOptions, offset: newOffset }));
    }

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
