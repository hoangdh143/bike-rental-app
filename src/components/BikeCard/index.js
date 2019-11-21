import React from "react";
import {Button, Card} from 'antd';
import {createNotification} from "../../utils/notification-handle";

const { Meta } = Card;

export default function BikeCard({bike}) {
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={bike.image} />}
        >
            <Meta title={bike.model} description={`${bike.price} VND`} />
            <Button onClick={createNotification('info', 'Hello')}>Add to cart</Button>
        </Card>
    );
}