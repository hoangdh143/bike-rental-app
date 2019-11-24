import React from "react";
import {Button, Card, Col, Row} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {CartProductCardWrapper} from "./style";
import {removeFromCartAction} from "../../containers/SiteLayout/actions";

const selectCart = state => state.cart;

const {Meta} = Card;
export default function CartProductCard({bike}) {
    const dispatch = useDispatch();
    const cart = useSelector(selectCart);
    return (
        <CartProductCardWrapper>
            <Card className="bike-card"
                  title={bike.model}
                  hoverable extra={<Button onClick={() => {
                dispatch(removeFromCartAction(cart, bike))
            }}>Remove</Button>}>
                <Row>
                    <Col span={10}>
                        <img src={bike.image}/>
                    </Col>
                    <Col span={14}>
                        <Meta title={`${bike.price} USD`} description={`${bike.description}`}/>
                    </Col>
                </Row>
            </Card>
        </CartProductCardWrapper>
    );
}