import React from "react";
import {Carousel} from "react-bootstrap";

export const Slider = props => {

    return(
        <Carousel>
            <Carousel.Item style={{'height': '600px'}}>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/5324749/pexels-photo-5324749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="First Slider"
                />
                <Carousel.Caption>
                    <h3>Web Developer Blog</h3>
                    <p>Do do sdalkfjasdfh</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '600px'}}>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/5560376/pexels-photo-5560376.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="First Slider"
                />
                <Carousel.Caption>
                    <h3>Web Developer Blog</h3>
                    <p>Do do sdalkfjasdfh</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '600px'}}>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/5303464/pexels-photo-5303464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="First Slider"
                />
                <Carousel.Caption>
                    <h3>Web Developer Blog</h3>
                    <p>Do do sdalkfjasdfh</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}