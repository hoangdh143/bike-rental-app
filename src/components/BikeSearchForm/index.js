import React from "react";
import {Input} from 'antd';
import {BikeSearchFormWrapper} from "./style";
import {useDispatch} from "react-redux";
import {searchAction} from "../../containers/SiteLayout/actions";

const {Search} = Input;

export default function BikeSearchForm() {
    const dispatch = useDispatch();
    return (
        <BikeSearchFormWrapper>
            <div className="bike-search-form">
                <h2 className="bike-search-item">Please enter your city</h2>
                <Search
                    className="bike-search-input bike-search-item"
                    placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    onSearch={value => dispatch(searchAction({keyword: value}))}
                />
            </div>
        </BikeSearchFormWrapper>
    );
}