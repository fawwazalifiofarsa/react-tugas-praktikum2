import React from "react"
 
class card extends React.Component{
    render(){
        return (
            <div className="col-lg-4 col-sm-3 p-3">
                <div className="card">
                    <div className="card-body row">
                        {/* menampilkan Gambar / cover */}
                        <div className="col-8">
                            <img src={this.props.cover} className="img"
                                height="200" />
                        </div>

                        {/* menampilkan deskripsi */}
                        <div className="col-10 mt-2">
                            <h5 className="text-info">
                                {this.props.nama}
                            </h5>
                            <h6 className="text-dark">
                                Tanggal Pelaksanaan: {this.props.tanggal}
                            </h6>

                            {/* button untuk mengedit */}
                            
                            <button className="btn btn-sm btn-primary m-1"
                                onClick={this.props.onEdit}>
                                Edit
                            </button>

                            {/* button untuk menghapus */}
                            <button className="btn btn-sm btn-danger m-1"
                                onClick={this.props.onDrop}>
                                Hapus
                            </button>                      
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default card;