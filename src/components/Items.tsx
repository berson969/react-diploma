import React from 'react';
import {useGetItemsQuery} from "../api";
import {ItemState} from "../models";
import Preloader from "./Preloader";
import ItemCard from "./ItemCard";

const Items : React.FC = () => {
    const { data, isLoading } = useGetItemsQuery({ offset: 0 });
    // const items: ItemsState = useSelector<ShopState>(selectItems)
    // console.log("ITEMS",items)
   //  const { data,  isLoading, error } = useGetItemsQuery({offset: 0});
   //
   // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(data);
    // }, []);


	console.log(data)
    if (isLoading) return <Preloader />;
    if (!data) return null;
    return (
       data.length > 0 &&
            <div className="row row-align">
                {data.map((item: ItemState) =>
                    <div key={item.id} className="card card-col">
                     <ItemCard item={item} />
                    </div>
                )}
            </div>
    );
};

export default Items;
