import React, {useState} from "react";
import BikeCard from "../BikeCard";
import {Col, Row} from "antd";
import {BikeGalleryWrapper} from "./style";

export default function BikeGallery({bikes = []}) {
    return (
        <BikeGalleryWrapper>
            <div className="bike-gallery" style={{background: '#ECECEC', padding: '30px'}}>
                <Row gutter={16}>
                    {bikes.map(bike => {return (
                        <Col span={8}>
                            <BikeCard bike={{key: bike.id, ...bike}}/>
                        </Col>
                    );})}
                </Row>
            </div>
        </BikeGalleryWrapper>
    );
}