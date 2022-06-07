import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CopyToClipboard } from "react-copy-to-clipboard"
import Swal from 'sweetalert2'
import { request } from '../config'
import Loading from '../components/loading.comp'
import BrandLogo from "../assets/shortin.png"
import "./header.style.css"

const HeaderComp = () => {
    const [generated, setGenerated] = useState(false)
    const [loading, setLoading] = useState(false)
    const [urlLong, setUrlLong] = useState("")
    const [shortLink, setShortLink] = useState("")

    const createLink = async () => {
        if(urlLong !== "") {

            if(urlLong.indexOf("srtin.my.id") === -1){
                setLoading(true)
                const create = await request.post("/redirect/anonymous-generate-url", null, {
                    longUrl : urlLong
                })
    
                setLoading(false)
                if(create.data.statusCode === 201) {
                    setShortLink(create.data.data.shortUrl)
                    setUrlLong(create.data.data.shortUrl)
                    setGenerated(true)
                    Swal.fire({
                        icon: 'success',
                        title: 'Sukses!',
                        text: 'Link berhasil generate!',
                        showConfirmButton: false,
                        timer: 1500,
                    })
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Gagal!',
                        text: 'Link gagal generate!',
                    })
                }
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

    const copyLink = (link) => {
        setGenerated(false)
        setShortLink("")
        setUrlLong("")
        Swal.fire({
            icon: 'success',
            title: 'Sukses!',
            text: 'Link  '+link+'  disalin!',
            showConfirmButton: false,
            timer: 1500,
        })
    }

    return (
        <>
            <div className="d-flex p-3" style={{background:"#0099ff"}}>
                <div className="d-flex container align-items-center">
                    <div className="d-flex">
                        <img src={BrandLogo} alt="shortin" className='image-brand'/>
                    </div>
                    <div className="d-flex flex-fill justify-content-end align-items-center">
                        <div className="d-flex mx-2">
                            <Link to="/login" className='text-white text-decoration-none'>Masuk</Link>
                        </div>
                        <div className="d-flex mx-2 border px-4 py-1 rounded register">
                            <Link to="/register" className='text-white text-decoration-none'>Daftar</Link>
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,218.7C672,256,768,288,864,288C960,288,1056,256,1152,208C1248,160,1344,96,1392,64L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            <div className="d-flex justify-content-center align-items-center my-5 my-md-0" style={{position:"relative"}}>
                <div className="col-10 col-md-5 position-inputbar">
                    <div className="row">
                        <div className="col-8 col-md-9 col-lg-10 px-0">
                            <input type="text" className='border shadow rounded align-items-center px-3 w-100 bg-white' style={{height:"50px"}} placeholder="Masukan link ex: https://srtin.my.id" value={urlLong} onChange={(e) => setUrlLong(e.target.value)}/>
                        </div>
                        <div className="col-4 col-md-3 col-lg-2 px-1">
                            {
                                generated === false ?
                                <button className='rounded border px-2 text-white w-100 shadow' style={{background:"#0099ff", fontSize:"small", height:"50px"}} onClick={() => createLink()}>
                                    {
                                        loading === true &&
                                        <Loading/>
                                    }
                                    SHORTIN
                                </button>
                                :
                                <CopyToClipboard text={shortLink} onCopy={() => copyLink(shortLink)}>
                                    <button className='rounded border px-2 text-white w-100 shadow' style={{background:"#0099ff", fontSize:"small", height:"50px"}} onClick="">
                                        SALIN
                                    </button>
                                </CopyToClipboard>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderComp