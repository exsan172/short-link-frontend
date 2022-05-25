import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import Loading from '../components/loading.comp'
import { request } from '../config'

const ConfirmPassword = () => {
    let { token } = useParams()
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const updatePassword = async () => {
        if(password !== "") {
            setLoading(true)
            const update = await request.post("/service/confirm-password", null, {
                token : token,
                password : password,
            })

            setLoading(false)
            if(update.data.statusCode === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Sukses!',
                    text: 'password sukses di perbaharui, silahkan login',
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate("/login")
                    }
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Gagal!',
                    text: 'password gagal di perbaharui !',
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
                        <span>Konfirmasi password</span>
                    </div>
                </div>
                <div className="d-flex justify-content-center w-100 flex-column px-4 mt-3 mb-2">
                    <div className="d-flex w-100 my-2">
                        <input type="password" placeholder="Masukan Password" className="border p-2 w-100 rounded" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="d-flex w-100 my-2">
                        <button className="border p-2 w-100 rounded bg-primary text-white" onClick={() => updatePassword()}>
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
    )
}

export default ConfirmPassword