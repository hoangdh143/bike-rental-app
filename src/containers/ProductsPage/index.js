import React, {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {goToPageAction} from "../SiteLayout/actions";
import BikeSearchForm from "../../components/BikeSearchForm";
import BikeGallery from "../../components/BikeGallery";
import {DEFAULT_CURRENT_PAGE, DEFAULT_PAGE_SIZE} from "../SiteLayout";

const selectBikes = state => state.display;

export default function ProductsPage() {
    const dispatch = useDispatch();
    const {bikes, page, size, totalRecords} = useSelector(selectBikes);

    useEffect(() => {
        if (page === 0) {console.log("Initial load"); dispatch(goToPageAction(DEFAULT_CURRENT_PAGE, DEFAULT_PAGE_SIZE));}
    });

    return (
        <Fragment>
                    <BikeSearchForm/>
                    <BikeGallery currentPage={page} bikes={bikes} pageSize={size} totalRecords={totalRecords}/>
        </Fragment>
    );
}