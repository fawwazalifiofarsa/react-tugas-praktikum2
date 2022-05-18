import React, { Component } from "react";
import $ from "jquery";
import Card from "../components/cardEvent";

class Event extends Component {
    constructor() {
        super()
        this.state = {
            event: [
                {
                    nama: "Pergi ke pantai", tanggal: "15-10-22",
                    cover: "https://drive.google.com/uc?id=1rUiqTsBwrET4bS4wGfIatzKT1Uv9--8k"
                },
                {
                    nama: "Ulang Tahun", tanggal: "18-11-22",
                    cover: "https://drive.google.com/uc?id=18w2en0IL9byoJJ4cpRPiCIV3lBTD8owF"
                },
                {
                    nama: "Berkemah", tanggal: "19-12-22",
                    cover: "https://drive.google.com/uc?id=1HXAOkNjlVPCn64XHE7DDXqbMYi844B05"
                }
            ],

            action: "",
            nama: "",
            tanggal: "",
            cover: "",
            selectedItem: null,
        }
        this.state.filterEvent = this.state.event
    }

    searching = event => {
        if (event.keyCode === 13) {
            // 13 adalah kode untuk tombol enter

            let keyword = this.state.keyword.toLowerCase()
            let tempEvent = this.state.event
            let result = tempEvent.filter(item => {
                return item.nama.toLowerCase().includes(keyword) ||
                    item.tanggal.toLowerCase().includes(keyword)
            })

            this.setState({ filterEvent: result })
        }
    }


    render() {
        return (
            <div className="container">
                <input type="text" className="form-control my-2 mt-5" placeholder="Pencarian"
                    value={this.state.keyword}
                    onChange={ev => this.setState({ keyword: ev.target.value })}
                    onKeyUp={ev => this.searching(ev)}
                />

                <div className="row">
                    {this.state.filterEvent.map((item, index) => (
                        <Card
                            nama={item.nama}
                            tanggal={item.tanggal}
                            cover={item.cover}
                            onEdit={() => this.Edit(item)}
                            onDrop={() => this.Drop(item)}
                            onCart={() => this.addToCart(item)}
                        />
                    ))}
                </div>

                <button className="btn btn-success" onClick={() => this.Add()}>
                    Tambah Data
                </button>

                {/* component modal sbg control manipulasi data */}
                <div className="modal" id="modal_event">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* modal header */}
                            <div className="modal-header">
                                Form Event
                            </div>

                            {/* modal body */}
                            <div className="modal-body">
                                <form onSubmit={ev => this.Save(ev)}>
                                    Nama event
                                    <input type="text" className="form-control mb-2"
                                        value={this.state.nama}
                                        onChange={ev => this.setState({ nama: ev.target.value })}
                                        required />

                                    Tanggal Pelaksanaan
                                    <input type="text" className="form-control mb-2"
                                        value={this.state.tanggal}
                                        onChange={ev => this.setState({ tanggal: ev.target.value })}
                                        required />

                                    Cover event
                                    <input type="url" className="form-control mb-2"
                                        value={this.state.cover}
                                        onChange={ev => this.setState({ cover: ev.target.value })}
                                        required />

                                    <button className="btn btn-danger btn-block" type="submit">
                                        Simpan
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    Add = () => {
        // menampilkan komponen modal
        $("#modal_event").show()
        this.setState({
            nama: "",
            tanggal: "",
            cover: "",
            action: "insert"
        })
    }
    Edit = (item) => {
        // menampilkan komponen modal
        $("#modal_event").show()
        this.setState({
            nama: item.nama,
            tanggal: item.tanggal,
            cover: item.cover,
            action: "update",
            selectedItem: item
        })
    }
    Save = (event) => {
        event.preventDefault();
        let tempEvent = this.state.event
        // menampilkan komponen modal
        if (this.state.action === "insert") {
            // menambah data baru
            tempEvent.push({
                nama: this.state.nama,
                tanggal: this.state.tanggal,
                cover: this.state.cover,
            })
        } else if (this.state.action === "update") {
            // menyimpan perubahan data
            let index = tempEvent.indexOf(this.state.selectedItem)
            tempEvent[index].nama = this.state.nama
            tempEvent[index].tanggal = this.state.tanggal
            tempEvent[index].cover = this.state.cover
        }

        this.setState({ event: tempEvent })

        // menutup komponen modal_buku
        $("#modal_event").hide()
    }

    Drop = (item) => {
        // beri konfirmasi untuk menghapus data
        if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
            // menghapus data
            let tempEvent = this.state.event
            // posisi index data yg akan dihapus
            let index = tempEvent.indexOf(item)

            // hapus data
            tempEvent.splice(index, 1)

            this.setState({ event: tempEvent })
        }
    }
}

export default Event;