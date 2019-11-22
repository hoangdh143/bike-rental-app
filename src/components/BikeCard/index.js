import React from "react";
import {Button, Card} from 'antd';
import {createNotification} from "../../utils/notification-handle";
import {BikeCardWrapper} from "./style";

const { Meta } = Card;

export default function BikeCard({bike}) {
    return (
        <BikeCardWrapper>
        <Card className="bike-card"
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={bike.image} />}
        >
            <Meta title={bike.model} description={`${bike.price} VND`} />
            <div>{bike.city}</div>
            <Button onClick={createNotification('info', 'Hello')}>Add to cart</Button>
        </Card>
        </BikeCardWrapper>
    );
}