import React, {useState} from 'react';
import {useGetCategoriesQuery} from "../api";
import Preloader from "./Preloader.tsx";
import {setQueryOptions} from "../slices";
import {useDispatch} from "react-redux";
import {CategoriesState} from "../models";

const Categories: React.FC = () => {
    const dispatch = useDispatch();
    const { data: categories, isLoading, isError } = useGetCategoriesQuery<CategoriesState>(undefined);
    const [categoryId , setCategoryId] = useState<number | undefined>(undefined);

     const handleClick = (id: number | undefined) => {
         setCategoryId(id);
         dispatch(setQueryOptions({ categoryId: id, offset: 0 }));
     }

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
