import React, {useState} from "react";
import BikeCard from "../BikeCard";
import { Pagination } from 'antd';
import {Col, Row} from "antd";
import {BikeGalleryWrapper} from "./style";
import {useDispatch} from "react-redux";
import {goToPageAction} from "../../containers/MainPage/actions";

export default function BikeGallery({bikes, currentPage, itemsPerPage, totalRecords}) {
    console.log(totalRecords);
    const dispatch = useDispatch();
    return (
        <BikeGalleryWrapper>
            <div className="bike-gallery">
                <Row gutter={16}>
                    {bikes.map(bike => {return (
                        <Col span={8} key={bike.id}>
                            <BikeCard bike={{key: bike.id, ...bike}}/>
                        </Col>
                    );})}
                </Row>
            </div>
            <div className="bike-pagination" >
                <Pagination current={currentPage} pageSize={itemsPerPage} total={totalRecords} onChange={(page, size) => dispatch(goToPageAction(page, size))}/>
            </div>
        </BikeGalleryWrapper>
    );
}