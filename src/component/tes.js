import React, { Component } from "react";
import Slider from "react-slick";
import "./tes.css"

export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };
        return (
            <div style={{margin: 20}}>
                <h2> Multiple items </h2>
                <Slider {...settings}>
                    <div>
                        1
          </div>
                </Slider>
            </div>
        );
    }
}