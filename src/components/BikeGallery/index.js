import React, {useState} from "react";
import BikeCard from "../BikeCard";
import { Pagination } from 'antd';
import {Col, Row} from "antd";
import {BikeGalleryWrapper} from "./style";
import {useDispatch} from "react-redux";
import {goToPage} from "../../containers/MainPage/actions";

export default function BikeGallery({bikes, currentPage, itemsPerPage, totalRecords}) {
    const dispatch = useDispatch();
    return (
        <BikeGalleryWrapper>
            <div className="bike-gallery">
                <Row gutter={16}>
                    {bikes.map(bike => {return (
                        <Col span={8}>
                            <BikeCard bike={{key: bike.id, ...bike}}/>
                        </Col>
                    );})}
                </Row>
            </div>
            <div className="bike-pagination" >
                <Pagination current={currentPage} defaultCurrent={itemsPerPage} total={totalRecords} onChange={(page, size) => dispatch(goToPage(page, size))}/>
            </div>
        </BikeGalleryWrapper>
    );
}