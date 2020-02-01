import React from 'react';

export const Gambar = (props) => {
    return (
        <div style={{ height: 200, width: 361, background: `url(${props.image})` }}></div>
    )
}

export const Nama = (props) => {
    return (
        <div style={{ height: 50, background: '#FFF' }}>{props.nama}</div>
    )
}

export const Harga = (props) => {
    return (
        <div style={{ height: 50, background: '#FFF' }}>{props.harga}
            <button id="button">buy</button></div>
    )
}