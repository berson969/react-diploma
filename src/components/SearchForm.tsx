import React, {useState} from 'react';
import {selectOptions, setQueryOptions} from "../slices";
import {useDispatch} from "react-redux";

const SearchForm: React.FC<{ type: string }>= ({ type }) => {
    const dispatch = useDispatch();
    const [searchPattern, setSearchPattern] = useState('');

    const handleChange = (value: string) => {
        setSearchPattern(value.trim());
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchPattern !== '') {
            dispatch(setQueryOptions({ ...selectOptions, searchPattern: searchPattern }));
        }
    }

    const searchClassName = type === 'search-form'
        ? "catalog-search-form form-inline"
        : `header-controls-search-form form-inline`


    return (
        <form
            onSubmit={handleSubmit}
            data-id={type}
            className={searchClassName}
        >
            <input
                id={type}
                value={searchPattern}
                onChange={(e) => handleChange(e.target.value)}
                className="form-control"
                placeholder="Поиск"
            />
        </form>
    );
};

export default SearchForm;
