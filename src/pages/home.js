import React, { Component } from 'react';
import Axios from "axios"
import { API_URL } from "../helper/API_URL"
import Carousel from "../component/carousel"
import Kartu from "../component/kartu"
import Sembarang from "../component/grus"

class home extends Component {
    state = { data: [] }

    componentDidMount() {
        Axios.get(API_URL + "mongo/home")
            .then((res) => {
                // console.log(res.data)
                this.setState({ data: res.data })
            })
    }

    tes = () => {
        return this.state.data.map((val) => {
            return (
                <Sembarang image={val.gambar} judul={val.nama}></Sembarang>
            )
        })
    }

    renderkartu = () => {
        return this.state.data.map((val) => {
            return (
                <Kartu image={val.gambar} judul={val.nama}></Kartu>
            )
        })
    }

    renderCarousel = () => {
        return this.state.data.map((val) => {
            console.log(val.nama)
            return (
                <Carousel nama={val.nama} gambar={val.gambar} harga={val.harga}>

                </Carousel>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderCarousel()}
            </div>
        );
    }
}

export default home;