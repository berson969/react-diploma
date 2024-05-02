import React from 'react';
import {useGetTopSalesQuery} from "../api";
import Preloader from "./Preloader.tsx";
import {ItemState} from "../models";
import ItemCard from "./ItemCard.tsx";

const TopSales : React.FC = () => {
    const { data, isLoading, error } = useGetTopSalesQuery(undefined);

    if (isLoading) return <Preloader />;
    if (error) return <h2>{error.message}</h2>
    return (
        data.length > 0 &&
            <section className="top-sales">
                <h2 className="text-center">Хиты продаж!</h2>
                <div className="row row-align">
                    {data.map((item: ItemState) =>
                        <div key={`ts-${item.id}`} className="card card-col">
                            <ItemCard item={item} />
                        </div>
                    )}
                </div>
            </section>
    );
};

export default TopSales;
