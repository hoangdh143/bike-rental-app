import React, {useState} from "react";
import BikeCard from "../BikeCard";
import {Col, Row} from "antd";
import {BikeGalleryWrapper} from "./style";
import GalleryPagination from "../GalleryPagination";

export default function BikeGallery({bikes, currentPage, pageSize, totalRecords}) {
    return (
        <BikeGalleryWrapper>
            <div className="bike-gallery">
                <Row type="flex" justify="start">
                    {bikes.map(bike => {
                        return (
                            <Col span={6} key={bike.id}>
                                <BikeCard bike={{key: bike.id, ...bike}}/>
                            </Col>
                        );
                    })}
                </Row>
            </div>
            <div className="bike-pagination">
                <GalleryPagination currentPage={currentPage} pageSize={pageSize} totalRecords={totalRecords}/>
            </div>
        </BikeGalleryWrapper>
    );
}