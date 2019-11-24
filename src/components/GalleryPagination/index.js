import React from "react";
import {Pagination} from "antd";
import {goToPageAction} from "../../containers/SiteLayout/actions";
import {useDispatch, useSelector} from "react-redux";

const selectQuery = state => state.query;

export default function GalleryPagination({currentPage = 0, pageSize = 0, totalRecords = 0}) {
    const dispatch = useDispatch();
    const {keyword} = useSelector(selectQuery);
    return (
        <Pagination current={currentPage} pageSize={pageSize} total={totalRecords}
                    onChange={(page, size) => dispatch(goToPageAction(page, size, keyword))}>Hello</Pagination>
    );
}