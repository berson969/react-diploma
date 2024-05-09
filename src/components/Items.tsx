import React, {useEffect} from 'react';
import {useGetItemsQuery} from "../api";
import {ItemState} from "../models";
import Preloader from "./Preloader";
import ItemCard from "./ItemCard";
import {useDispatch, useSelector} from "react-redux";
import {selectOptions, setQueryOptions} from "../slices";
import Component404 from "./Component404.tsx";

const Items : React.FC = () => {
    const dispatch = useDispatch();
    const options = useSelector(selectOptions);
    const { data: items, isLoading, isError } = useGetItemsQuery({ ...options });

    useEffect(() => {
        if (items && items.length === 0) {
            const newOptions = { ...options, offset: 0 };
            dispatch(setQueryOptions(newOptions))
        }
    }, [options, items]);

    if (isLoading) return <Preloader />;
    if (isError) return <Component404 />
    if (!items) return null;
    return (
       items.length > 0 &&
            <div className="row row-align">
                {items.map((item: ItemState) =>
                    <div key={item.id} className="card card-col">
                     <ItemCard item={item} />
                    </div>
                )}
            </div>
    );
};

export default Items;
