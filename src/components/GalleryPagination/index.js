import React from "react";
import {Pagination} from "antd";
import {goToPageAction} from "../../containers/MainPage/actions";
import {useDispatch, useSelector} from "react-redux";

const selectQuery = state => state.query;

export default function GalleryPagination({currentPage, pageSize, totalRecords}) {
    const dispatch = useDispatch()
    const {keyword} = useSelector(selectQuery);
    return (
        <Pagination current={currentPage} pageSize={pageSize} total={totalRecords} onChange={(page, size) => dispatch(goToPageAction(page, size, keyword))}/>
    );
}