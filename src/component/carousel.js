import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';


export default (props) => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (<div>
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={3}
                    gutter={20}
                    leftChevron={<button>{'<'}</button>}
                    rightChevron={<button>{'>'}</button>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                >
                    {/* <div style={{ height: 200, width: 361, background: `url(${props.gambar})` }}></div> */}
                    <div style={{ height: 200, width: 361, background: `url(${props.gambar})` }}></div>
                </ItemsCarousel>
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={3}
                    gutter={20}
                    outsideChevron
                    chevronWidth={chevronWidth}
                >
                    <div style={{ height: 50, background: '#FFF' }}>{props.nama}</div>
                    {/* <div style={{ height: 50, background: '#FFF' }}>{props.nama}</div> */}
                </ItemsCarousel>
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={3}
                    gutter={20}
                    outsideChevron
                    chevronWidth={chevronWidth}
                >
                    {/* <div style={{ height: 50, background: '#FFF' }}>{props.harga}
                        <button id="button">buy</button></div> */}
                    <div style={{ height: 50, background: '#FFF' }}>{props.harga}
                        <button id="button">buy</button></div>
                </ItemsCarousel>
                </div>
    );
};