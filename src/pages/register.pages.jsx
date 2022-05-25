import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import { request } from "../config"
import Loading from '../components/loading.comp'

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const register = async () => {
        if(email !== "" && password !== "" && name !== "") {
            setLoading(true)
            const reg = await request.post("/service/register", null, {
                name     : name,
                email    : email,
                password : password
            })

            setLoading(false)
            if(reg.data.statusCode === 201) {
                Swal.fire({
                    icon: 'success',
                    title: 'Sukses!',
                    text: 'Pendaftaran anda berhasil, silahkan login !',
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate("/login")
                    }
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Gagal!',
                    text: 'maaf pendaftaran anda gagal gunakan email lain atau coba lagi nanti !',
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

    return (
        <div className="d-flex justify-content-center">
            <div className="col-10 col-md-5 col-lg-3 shadow p-3 mt-5 border">
                <div className="d-flex justify-content-center mt-2 mb-4 align-items-center">
                    <div className="d-flex align-items-center">
                        <Link to="/" className='text-dark text-decoration-none'>
                            <FontAwesomeIcon icon={faArrowLeftLong}/>
                            &nbsp;
                            Kembali
                        </Link>
                    </div>
                    <div className="d-flex flex-fill justify-content-end">
                        <span>Daftar Akun</span>
                    </div>
                </div>
                <div className="d-flex justify-content-center w-100 flex-column px-4 mt-3 mb-3">
                    <div className="d-flex w-100 my-2">
                        <input type="text" placeholder="Masukan nama" className="border p-2 w-100 rounded" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="d-flex w-100 my-2">
                        <input type="email" placeholder="Masukan email" className="border p-2 w-100 rounded" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="d-flex w-100 my-2">
                        <input type="password" placeholder="Masukan Password" className="border p-2 w-100 rounded" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="d-flex w-100 my-2">
                        <button className="border p-2 w-100 rounded bg-primary text-white" onClick={() => register()}>
                            {
                                loading === true &&
                                <Loading/>
                            }
                            Daftar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register