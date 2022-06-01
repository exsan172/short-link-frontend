import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCopy, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment-timezone'
import { CopyToClipboard } from "react-copy-to-clipboard"
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import HeaderDashboard from "../components/headerDashboard.comp"
import { request } from '../config'
import Loading from '../components/loading.comp'

const Dashboard = () => {
    const [listLink, setListLink] = useState([])
    const [deletedId, setDeletedId] = useState("")
    const [updateId, setUpdateId] = useState("")
    const [nameLink, setNameLink] = useState("")
    const [urlLong, setUrlLong] = useState("")
    const [modalsUpdate, setModalsUpdate] = useState(false)
    const [modalsDelete, setModalsDelete] = useState(false)
    const [modalsCreate, setModalsCreate] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        const name = localStorage.getItem("userName")

        if(token === null || token === "" || name === null || name === ""){
            localStorage.removeItem("token")
            localStorage.removeItem("userName")
            navigate("/login")
        }

    }, [navigate])

    const getLink = async () => {
        const link = await request.get("/service/generate-url", {
            token : localStorage.getItem("token")
        }, null)

        if(link.data.statusCode === 200) {
            setListLink(link.data.data)
        }
    }

    useState(() => {
        getLink()
    }, [listLink])

    const copyLink = (link) => {
        Swal.fire({
            icon: 'success',
            title: 'Sukses!',
            text: 'Link  '+link+'  disalin!',
            showConfirmButton: false,
            timer: 1000,
        })
    }

    const setValueDelete = (id) => {
        setDeletedId(id)
        setModalsDelete(true)
    }

    const deleteLink = async () => {
        setLoading(true)
        const deleteUrl = await request.delete("/service/generate-url/"+deletedId, {
            token : localStorage.getItem("token")
        }, null)

        setLoading(false)
        setModalsDelete(false)
        if(deleteUrl.data.statusCode === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Sukses!',
                text: 'Data berhasil di hapus!',
                showConfirmButton: false,
                timer: 1000,
            })
            setDeletedId("")
            getLink()
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Gagal!',
                text: 'Tidak dapat menghapus data url!',
            })
        }
    }

    const setValueUpdate = (id, name, link) => {
        setUpdateId(id)
        setNameLink(name)
        setUrlLong(link)
        setModalsUpdate(true)
    }

    const updateLink = async () => {
        if(updateId !== "" && nameLink !== "" && urlLong !== "") {
            setLoading(true)
            const update = await request.put("/service/generate-url", {
                token : localStorage.getItem("token")
            }, {
                id : updateId,
                name : nameLink,
                longUrl : urlLong
            })

            setLoading(false)
            setModalsUpdate(false)
            if(update.data.statusCode === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Sukses!',
                    text: 'Data berhasil di perbarui!',
                    showConfirmButton: false,
                    timer: 1000,
                })
                getLink()
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Gagal!',
                    text: 'Tidak dapat memperbarui!',
                })
            }
            setUpdateId("")
            setNameLink("")
            setUrlLong("")
            
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Peringatan',
                text: 'pastikan mengisi data-data yang di perlukan !',
            })
        }
    }

    const createLink = async () => {
        if(nameLink !== "" && urlLong !== "") {
            if(urlLong.indexOf("srtin.my.id") === -1){
                setLoading(true)
                const create = await request.post("/service/generate-url", {
                    token : localStorage.getItem("token")
                }, {
                    name : nameLink,
                    longUrl : urlLong
                })

                setLoading(false)
                setModalsCreate(false)
                if(create.data.statusCode === 201) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Sukses!',
                        text: 'Data berhasil simpan!',
                        showConfirmButton: false,
                        timer: 1000,
                    })
                    getLink()
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Gagal!',
                        text: 'data gagal di simpan!',
                    })
                }
                setNameLink("")
                setUrlLong("")

            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Peringatan',
                    text: 'Jangan memasukan url yang sudah di pendekan atau link website ini !',
                })
            }
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Peringatan',
                text: 'pastikan mengisi data-data yang di perlukan !',
            })
        }
    }

    const closeModalsCreate = () => {
        setModalsCreate(false)
        setNameLink("")
        setUrlLong("")
    }

    const closeModalsUpdate = () => {
        setModalsUpdate(false)
        setUpdateId("")
        setNameLink("")
        setUrlLong("")
    }

    const closeModalsDelete = () => {
        setModalsDelete(false)
        setDeletedId("")
    }

    return (
        <div className="d-flex flex-fill flex-column">
            <HeaderDashboard/>
            <div className="d-flex container mt-4 flex-column">
                <div className="d-flex justify-content-center my-5">
                    <button className="text-white py-2 px-4 border-0 rounded" style={{background:"#0099ff"}} onClick={() => setModalsCreate(true)}>
                        <FontAwesomeIcon icon={faPlus}/>
                        &nbsp;
                        Buat Link Baru
                    </button>
                </div>
                {
                    listLink.length > 0 ?
                        listLink.map(data => {
                            return (
                                <div className="d-flex flex-fill my-2 p-3 bg-white border-bottom" key={data._id}>
                                    <div className="row w-100">
                                        <div className="col-12 col-md-6 text-capitalize">
                                            <b>
                                                {data.name}
                                            </b>
                                        </div>
                                        <div className="col-12 col-md-6 text-right">
                                            {moment(data.createdAt).format("D MMM YYYY")}
                                        </div>
                                        <div className="col-12 col-md-6">
                                            {data.shortUrl}
                                        </div>
                                        <div className="col-12 col-md-6">
                                            {data.longUrl}
                                        </div>
                                        <div className="col-12 mt-2">
                                            <CopyToClipboard text={data.shortUrl} onCopy={() => copyLink(data.shortUrl)}>
                                                <button className='px-4 py-2 text-white border-0 rounded m-1' style={{background:"#0099ff"}}>
                                                    <FontAwesomeIcon icon={faCopy}/>
                                                    &nbsp;
                                                    Salin Link
                                                </button>
                                            </CopyToClipboard>
                                            <button className='px-4 py-2 text-white border-0 rounded m-1' style={{background:"#0099ff"}} onClick={() => setValueUpdate(data._id, data.name, data.longUrl)}>
                                                <FontAwesomeIcon icon={faPen}/>
                                                &nbsp;
                                                Edit
                                            </button>
                                            <button className='px-4 py-2 text-white border-0 rounded m-1' style={{background:"#0099ff"}} onClick={() => setValueDelete(data._id)}>
                                                <FontAwesomeIcon icon={faTrash}/>
                                                &nbsp;
                                                Hapus
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    :
                        <div className="d-flex justify-content-center flex-fill my-5">
                            <p>Data link belum tersedia, buat baru <span className='text-primary' style={{cursor:"pointer"}} data-bs-toggle="modal" data-bs-target="#newLink">sini</span> atau tekan tombol <b>buat link baru</b> di atas.</p>
                        </div>
                }

                <div className="d-flex flex-column p-4 align-items-center">
                    <p>
                        Copyright &copy;&nbsp;{new Date().getFullYear()}&nbsp; <a href="https://exsan.my.id" className='text-decoration-none'>Exsan Renaldhi</a>
                    </p>
                </div>
            </div>

            {/* MODALS */}
            <div className={`${modalsUpdate === true ? "modal-backdrop" : "d-none"}`}></div>
            <div className={`${modalsDelete === true ? "modal-backdrop" : "d-none"}`}></div>
            <div className={`${modalsCreate === true ? "modal-backdrop" : "d-none"}`}></div>
            <div className={`modal ${modalsCreate === true ? "d-block" : "d-none"}`} id="newLink">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="newLinkLabel">Buat Link Baru</h5>
                        <button type="button" className="btn-close" onClick={() => closeModalsCreate()}></button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex flex-column my-2">
                            <input type="text" placeholder='Masukan nama' className='px-3 py-2 border rounded' value={nameLink} onChange={(e) => setNameLink(e.target.value)}/>
                        </div>
                        <div className="d-flex flex-column my-2">
                            <textarea cols="30" rows="5" placeholder='Masukan url yang di inginkan' className='px-3 py-2 border rounded' value={urlLong} onChange={(e) => setUrlLong(e.target.value)}></textarea>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => closeModalsCreate()}>Tutup</button>
                        <button type="button" className="btn text-white" style={{background:"#0099ff"}} onClick={() => createLink()}>
                            {
                                loading === true &&
                                <Loading/>
                            }
                            Simpan
                        </button>
                    </div>
                    </div>
                </div>
            </div>
            <div className={`modal ${modalsUpdate === true ? "d-block" : "d-none"}`} id="editLink">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editLinkLabel">Update Link</h5>
                            <button type="button" className="btn-close" onClick={() => closeModalsUpdate()}></button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex flex-column my-2">
                                <input type="text" placeholder='Masukan nama' className='px-3 py-2 border rounded' value={nameLink} onChange={(e) => setNameLink(e.target.value)}/>
                            </div>
                            <div className="d-flex flex-column my-2">
                                <textarea cols="30" rows="5" placeholder='Masukan url yang di inginkan' className='px-3 py-2 border rounded' value={urlLong} onChange={(e) => setUrlLong(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => closeModalsUpdate()}>Tutup</button>
                            <button type="button" className="btn text-white" style={{background:"#0099ff"}} onClick={() => updateLink()}>
                                {
                                    loading === true &&
                                    <Loading/>
                                }
                                Simpan
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`modal ${modalsDelete === true ? "d-block" : "d-none"}`} id="deleteConfirm">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteConfirmLabel">Hapus Link</h5>
                        <button type="button" className="btn-close" onClick={() => closeModalsDelete()}></button>
                    </div>
                    <div className="modal-body">
                        <p>Apakah anda yakin ingin menghapus data ?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => closeModalsDelete()}>Tutup</button>
                        <button type="button" className="btn text-white" style={{background:"#0099ff"}} onClick={() => deleteLink()}>
                            {
                                loading === true &&
                                <Loading/>
                            }
                            Hapus
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard