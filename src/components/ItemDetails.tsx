import React from 'react';
import {useGetSingleItemQuery} from "../api";
import Preloader from "./Preloader.tsx";
import {useLocation} from "react-router-dom";
import ItemDetailsActions from "./ItemDetailsActions.tsx";
import Component404 from "./Component404.tsx";
import {ItemDetailsState} from "../models";

const ItemDetails : React.FC = () => {
    const location = useLocation();

    const { data, isLoading, error } =
        useGetSingleItemQuery<ItemDetailsState>(location.pathname.replace(/\D/g, ''));

    if (isLoading) return <Preloader />;
	if (error && error.status === 'FETCH_ERROR') return <Component404 />;
	if (!data) return <div>No data available</div>;

    return (
        <section className="catalog-item">
            <h2 className="text-center">{data.title}</h2>
            <div className="row">
                <div className="col-5">
                    <img
                        src={data.images[0]}
                        className="img-fluid"
                        alt={data.title}
                    />
                </div>
                <div className="col-7">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Артикул</td>
                                <td>{data.sku}</td>
                            </tr>
                            <tr>
                                <td>Производитель</td>
                                <td>{data.manufacturer}</td>
                            </tr>
                            <tr>
                                <td>Цвет</td>
                                <td>{data.color}</td>
                            </tr>
                            <tr>
                                <td>Материалы</td>
                                <td>{data.material}</td>
                            </tr>
                            <tr>
                                <td>Сезон</td>
                                <td>{data.season}</td>
                            </tr>
                            <tr>
                                <td>Повод</td>
                                <td>{data.reason}</td>
                            </tr>
                        </tbody>
                    </table>
                    <ItemDetailsActions item={data} />
                </div>
            </div>
        </section>
    );
};

export default ItemDetails;
