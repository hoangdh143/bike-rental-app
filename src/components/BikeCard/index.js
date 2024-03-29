import React from "react";
import {Button, Card} from 'antd';
import {createNotification} from "../../utils/notification-handle";
import {BikeCardWrapper} from "./style";
import {useDispatch} from "react-redux";
import {addToCartAction} from "../../containers/SiteLayout/actions";

const { Meta } = Card;

export default function BikeCard({bike}) {
    const dispatch = useDispatch();
    return (
        <BikeCardWrapper>
        <Card className="bike-card"
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={bike.image} />}
        >
            <Meta title={bike.model} description={`${bike.price} USD`} />
            <div className="bike-card-city">{bike.city}</div>
            {bike.addedToCart ? <Button className="bike-card-button" disabled={true}>Added to cart</Button> :
                <Button className="bike-card-button" onClick={() => {dispatch(addToCartAction(bike))}}>Add to cart</Button>
            }
        </Card>
        </BikeCardWrapper>
    );
}