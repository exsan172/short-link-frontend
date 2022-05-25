import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

const ChangePassword = () => {
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
                        <span>Ganti password</span>
                    </div>
                </div>
                <div className="d-flex justify-content-center w-100 flex-column px-4 mt-3 mb-2">
                    <div className="d-flex w-100 my-2">
                        <input type="password" placeholder="Masukan Password lama" className="border p-2 w-100 rounded"/>
                    </div>
                    <div className="d-flex w-100 my-2">
                        <input type="password" placeholder="Masukan Password baru" className="border p-2 w-100 rounded"/>
                    </div>
                    <div className="d-flex w-100 my-2">
                        <button className="border p-2 w-100 rounded bg-primary text-white">Simpan</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword