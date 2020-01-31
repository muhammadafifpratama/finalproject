import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import './ngetes.css';

export default () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
        <div style={{padding: 20}}>
        <p id="text">UNDER RP 90 000</p>
        <div id="tes" style={{ padding: `0 ${chevronWidth}px` }}>
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
                <div style={{ height: 200,width:361, background: 'url(https://hb.imgix.net/60149afc828f8f7a4b8973f9e48e0aa90e93316a.jpg?auto=compress,format&fit=crop&h=206&w=360&s=dd188351744577a1971d688ded948ae4)' }}></div>
                <div style={{ height: 200,width:360, background: 'url(https://hb.imgix.net/f586084149dd0c6c0ae8885e324c1abe4549f892.jpg?auto=compress,format&fit=crop&h=206&w=360&s=ff0887a86632b09a6c26f65735a720b9)' }}></div>
                <div style={{ height: 200,width:360, background: 'url(https://hb.imgix.net/dd83a457f558ec98f37d16759e7a102378630fb0.jpg?auto=compress,format&fit=crop&h=206&w=360&s=adcd9ef2228195de95115be1ad55a9cd)' }}></div>
                <div style={{ height: 200,width:360, background: 'url(https://hb.imgix.net/ab2bcc54f1aa5162f6274d5aca5fdfde33b8192b.jpeg?auto=compress,format&fit=crop&h=206&w=360&s=2a4dca2edba1baf0aee4b531d6a2f420)' }}></div>
                <div style={{ height: 200,width:360, background: 'url(https://hb.imgix.net/14ed9ec621e0360f5c30e39494b8da6b7cb67594.jpg?auto=compress,format&fit=crop&h=206&w=360&s=55cb869a50fdf7a05e85051d82ba98e0)' }}></div>
                <div style={{ height: 200,width:360, background: 'url(https://hb.imgix.net/02049997d98e5251e841f4b5919e426684b2e2a5.jpg?auto=compress,format&fit=crop&h=206&w=360&s=147f457bd7fb4f8eb4aa4fcc5885df8a)' }}></div>
            </ItemsCarousel>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={3}
                gutter={20}
                outsideChevron
                chevronWidth={chevronWidth}
            >
                <div style={{ height: 50, background: '#FFF' }}>DRAGON QUEST® XI: Echoes of an Elusive Age™ - Digital Edition of Light</div>
                <div style={{ height: 50, background: '#FFF' }}>ASTRONEER</div>
                <div style={{ height: 50, background: '#FFF' }}>RISK OF RAIN 2</div>
                <div style={{ height: 50, background: '#FFF' }}>MORDHAU</div>
                <div style={{ height: 50, background: '#FFF' }}>BORDERLANDS 2: GAME OF THE YEAR</div>
                <div style={{ height: 50, background: '#FFF' }}>JALOPY</div>
            </ItemsCarousel>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={3}
                gutter={20}
                outsideChevron
                chevronWidth={chevronWidth}
            >
                <div style={{ height: 50, background: '#FFF' }}>$10
                <button id="button">buy</button></div>
                <div style={{ height: 50, background: '#FFF' }}>$19.49
                <button id="button">buy</button></div>
                <div style={{ height: 50, background: '#FFF' }}>$15.99
                <button id="button">buy</button></div>
                <div style={{ height: 50, background: '#FFF' }}>$22.49
                <button id="button">buy</button></div>
                <div style={{ height: 50, background: '#FFF' }}>$8.89
                <button id="button">buy</button></div>
                <div style={{ height: 50, background: '#FFF' }}>$7.49
                <button id="button">buy</button></div>
            </ItemsCarousel>
        </div>
        </div>
    );
};