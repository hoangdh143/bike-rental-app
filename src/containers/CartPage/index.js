import React from "react";
import {useSelector} from "react-redux";
import CartProductCard from "../../components/CartProductCard";
import {Row, Col} from "antd";
import {CartPageWrapper} from "./style";

const selectCart = state => state.cart;

export default function CartPage() {
    const cart = useSelector(selectCart);
    return (
        <CartPageWrapper>
            <div className="cart-list">
                <Row type="flex" justify="space-around">
                    <Col span={12}>
                        {cart.map(bike => {
                            return (
                                <CartProductCard bike={bike}/>
                            );
                        })}
                    </Col>
                </Row>
            </div>
        </CartPageWrapper>
    );
}