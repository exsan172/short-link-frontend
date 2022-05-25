import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import { request } from "../config"
import Loading from '../components/loading.comp'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const login = async () => {
        if(email !== "" && password !== "") {
            setLoading(true)
            const log = await request.post("/service/login", null, {
                email    : email,
                password : password
            })

            setLoading(false)
            if(log.data.statusCode === 200) {
                localStorage.setItem("token", log.data.data.token)
                localStorage.setItem("userName", log.data.data.name)
                navigate("/dashboard")

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Gagal!',
                    text: 'username atau password anda tidak terdaftar !',
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
                        <span>Masuk</span>
                    </div>
                </div>
                <div className="d-flex justify-content-center w-100 flex-column px-4 mt-3">
                    <div className="d-flex w-100 my-2">
                        <input type="email" placeholder="Masukan email" className="border p-2 w-100 rounded" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="d-flex w-100 my-2">
                        <input type="password" placeholder="Masukan Password" className="border p-2 w-100 rounded" onChange={(e) => setPassword(e.target.value)} value={password}/>
                    </div>
                    <div className="d-flex w-100 my-2">
                        <button className="border p-2 w-100 rounded bg-primary text-white" onClick={() => login()}>
                            {
                                loading === true &&
                                <Loading/>
                            }
                            Masuk
                        </button>
                    </div>
                </div>
                <div className="d-flex justify-content-center flex-column">
                    <div className="d-flex w-100 my-1 justify-content-center">
                        <Link to="/register" className='font-weight-bold text-decoration-none' style={{fontSize:"large"}}>Daftar</Link>
                    </div>
                    <div className="d-flex w-100 my-3 justify-content-center">
                        Lupa password ?&nbsp; <Link to="/forgot-password" className='text-decoration-none'>Pulihkan disini</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login