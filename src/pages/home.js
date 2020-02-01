import React, { Component, useState } from 'react';
import Axios from "axios"
import { API_URL } from "../helper/API_URL"
import { Nama, Gambar, Harga } from "../component/carousel"
import Kartu from "../component/kartu"
import ItemsCarousel from 'react-items-carousel';

class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activeItemIndex: 0
        };
      }
    state = { data: [] }

    componentDidMount() {
        Axios.get(API_URL + "mongo/home")
            .then((res) => {
                // console.log(res.data)
                this.setState({ data: res.data })
            })
    }

    renderkartu = () => {
        return this.state.data.map((val) => {
            return (
                <Kartu image={val.gambar} judul={val.nama}></Kartu>
            )
        })
    }

    // salahtotal = () => {
    //     return this.state.data.map((val) => {
    //         return (
    //             <div style={{ padding: 20 }}>
    //                 <p id="text">UNDER RP 90 000</p>
    //                 <div id="tes" style={{ padding: `0 40px` }}>
    //                     <ItemsCarousel
    //                         requestToChangeActive= {useState(0)}
    //                         activeItemIndex={this.state.activeItemIndex}
    //                         numberOfCards={3}
    //                         gutter={20}
    //                         leftChevron={<button>{'<'}</button>}
    //                         rightChevron={<button>{'>'}</button>}
    //                         outsideChevron
    //                         chevronWidth={40}>
    //                         <Gambar gambar={val.gambar}></Gambar>
    //                     </ItemsCarousel>
    //                     <ItemsCarousel
    //                         requestToChangeActive={useState(0)}
    //                         activeItemIndex={this.state.activeItemIndex}
    //                         numberOfCards={3}
    //                         gutter={20}
    //                         outsideChevron
    //                         chevronWidth={40}>
    //                         <Nama nama={val.nama}></Nama>
    //                     </ItemsCarousel>
    //                     <ItemsCarousel
    //                         requestToChangeActive={useState(0)}
    //                         activeItemIndex={this.state.activeItemIndex}
    //                         numberOfCards={3}
    //                         gutter={20}
    //                         outsideChevron
    //                         chevronWidth={40}>
    //                         <Harga Harga={val.harga}></Harga>
    //                     </ItemsCarousel>
    //                 </div>
    //             </div>
    //         )
    //     })
    // }
            
    render() {
        return (
            <div>
            {/* {this.salahtotal()} */}
            </div>
            );
        }
    }
            
export default home;