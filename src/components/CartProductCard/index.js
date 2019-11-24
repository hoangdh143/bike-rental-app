import React from "react";
import {Button, Card, Col, Row} from 'antd';
import {useDispatch} from "react-redux";
import {CartProductCardWrapper} from "./style";


const {Meta} = Card;
export default function CartProductCard({bike}) {
    const dispatch = useDispatch();
    return (
        <CartProductCardWrapper>
            <Card className="bike-card"
                  title={bike.model}
                  hoverable extra={<Button onClick={() => {dispatch(removeFromCartAction(bike))}}>Remove</Button>}>
                <Row>
                    <Col span={10}>
                        <img src={bike.image}/>
                    </Col>
                    <Col span={14}>
                        <Meta title={`${bike.price} VND`} description={`${bike.description}`}/>
                    </Col>
                </Row>
            </Card>
        </CartProductCardWrapper>
    );
}