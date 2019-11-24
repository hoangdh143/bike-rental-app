import React, {useState} from "react";
import BikeCard from "../BikeCard";
import { Pagination } from 'antd';
import {Col, Row} from "antd";
import {BikeGalleryWrapper} from "./style";
import {useDispatch} from "react-redux";
import {goToPageAction} from "../../containers/SiteLayout/actions";
import GalleryPagination from "../GalleryPagination";

export default function BikeGallery({bikes, currentPage, pageSize, totalRecords}) {

    const dispatch = useDispatch();
    return (
        <BikeGalleryWrapper>
            <div className="bike-gallery">
                <Row gutter={16}>
                    {bikes.map(bike => {return (
                        <Col span={6} key={bike.id}>
                            <BikeCard bike={{key: bike.id, ...bike}}/>
                        </Col>
                    );})}
                </Row>
            </div>
            <div className="bike-pagination" >
                <GalleryPagination currentPage={currentPage} pageSize={pageSize} totalRecords={totalRecords}/>
            </div>
        </BikeGalleryWrapper>
    );
}