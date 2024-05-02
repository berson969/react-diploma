import React, {useState} from 'react';
import {useGetCategoriesQuery, useGetItemsQuery} from "../api";
import Preloader from "./Preloader.tsx";
import {selectOptions, setQueryOptions} from "../slices";
import {useDispatch} from "react-redux";
import {ItemsState} from "../models";

const Categories: React.FC = () => {
    const dispatch = useDispatch();
    const { data: categories } = useGetCategoriesQuery<ItemsState>(undefined);
    console.log('categories', categories)
    const [categoryId , setCategoryId] = useState<number | undefined>(undefined);

     const handleClick = (id: number | undefined) => {
         setCategoryId(id);
         dispatch(setQueryOptions({ categoryId: id, offset: 0 }));

     }

    const {  isLoading, isError } = useGetItemsQuery({...selectOptions});
    if (isLoading) return <Preloader />;
    if (isError) return <div>Error fetching categories</div>;
    if (!categories) return null;
    return (
        <ul className="catalog-categories nav justify-content-center">
            <li key="All" className="nav-item">
                    <span
                        className={`nav-link ${categoryId === undefined ? 'active' : ''}`}
                        onClick={()=>handleClick(undefined)}
                    >
                        Все
                    </span>
            </li>
            {categories.map(category =>
                <li key={category.id} className="nav-item">
                    <span
                        className={`nav-link ${categoryId === category.id ? 'active' : ''}`}
                        onClick={()=>handleClick(category.id)}
                    >
                        {category.title}
                    </span>
                </li>
            )}
        </ul>
    );
};

export default Categories;
