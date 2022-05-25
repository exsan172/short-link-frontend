import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import Loading from '../components/loading.comp'
import { request } from '../config'

const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)

    const forgotPassword = async () => {
        if(email !== "") {
            setLoading(true)
            const forgot = await request.post("/service/forgot-password", null, {
                email : email,
            })

            setLoading(false)
            if(forgot.data.statusCode === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Sukses!',
                    text: 'Email verifikasi sudah di kirim, silahkan cek email',
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Gagal!',
                    text: 'email tidak terdaftar !',
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
                        <span>Lupa password</span>
                    </div>
                </div>
                <div className="d-flex justify-content-center w-100 flex-column px-4 mt-3 mb-2">
                    <div className="d-flex w-100 my-2">
                        <input type="email" placeholder="Masukan email" className="border p-2 w-100 rounded" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="d-flex w-100 my-2">
                        <button className="border p-2 w-100 rounded bg-primary text-white" onClick={() => forgotPassword()}>
                            {
                                loading === true &&
                                    <Loading/>
                            }
                            Pulihkan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword