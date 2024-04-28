import React from 'react';
import {useGetItemsQuery} from "../api";
import {ItemState} from "../models";
import Preloader from "./Preloader.tsx";
import ItemCard from "./ItemCard.tsx";

const Items : React.FC = () => {
    const { data, isLoading } = useGetItemsQuery({offset: 0});

    if (isLoading) return <Preloader />;
    return (
       data && data.length > 0 &&
            <div className="row">
                {data.map((item: ItemState) =>
                    <div key={item.id} className="col-4">
                     <ItemCard item={item} />
                    </div>
                )}
            </div>
    );
};

export default Items;
