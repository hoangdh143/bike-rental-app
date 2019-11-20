import React from "react";
import BikeCard from "../BikeCard";
import {Col, Row} from "antd";
import {BikeGalleryWrapper} from "./style";

export default function BikeGallery({filter}) {
    return (
        <BikeGalleryWrapper>
            <div className="bike-gallery" style={{background: '#ECECEC', padding: '30px'}}>
                <Row gutter={16}>
                    <Col span={8}>
                        <BikeCard/>
                    </Col>
                    <Col span={8}>
                        <BikeCard/>
                    </Col>
                    <Col span={8}>
                        <BikeCard/>
                    </Col>
                </Row>
            </div>
        </BikeGalleryWrapper>
    );
}