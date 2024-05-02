import React, {useState} from 'react';
import IconCart from "./IconCart";
import SearchForm from "./SearchForm";

const HeaderControls: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const toggleSearchForm = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <div className="header-controls-pics">
                <div
                    data-id="search-expander"
                    className="header-controls-pic header-controls-search"
                    onClick={toggleSearchForm}
                ></div>
                <IconCart />
            </div>
            <div className={visible ? '' : 'invisible'}>
                <SearchForm type="header-search-form" />
            </div>
        </div>
    );
};

export default HeaderControls;