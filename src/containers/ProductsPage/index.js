import React, {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {goToPageAction, updatePageFromCartAction} from "../SiteLayout/actions";
import BikeSearchForm from "../../components/BikeSearchForm";
import BikeGallery from "../../components/BikeGallery";
import {DEFAULT_CURRENT_PAGE, DEFAULT_PAGE_SIZE} from "../SiteLayout";

const selectBikes = state => state.display;
const selectCart = state => state.cart;
const productsInCartNotDisabled = (cart, bikes) => {
    let result = false;
    cart.map(bikeAdded => {bikes.map(bike => {if (bike.id === bikeAdded.id && bike.addedToCart === false) {result = true}})});
    return result;
};

export default function ProductsPage() {
    const dispatch = useDispatch();
    const {bikes, page, size, totalRecords} = useSelector(selectBikes);
    const cart = useSelector(selectCart);

    useEffect(() => {
        if (page === 0) {console.log("Initial load"); dispatch(goToPageAction(DEFAULT_CURRENT_PAGE, DEFAULT_PAGE_SIZE));}
        if (productsInCartNotDisabled(cart, bikes)) {dispatch(updatePageFromCartAction(bikes, page, size, totalRecords, cart))};
    });

    return (
        <Fragment>
                    <BikeSearchForm/>
                    <BikeGallery currentPage={page} bikes={bikes} pageSize={size} totalRecords={totalRecords}/>
        </Fragment>
    );
}