import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
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
                        <input type="email" placeholder="Masukan email" className="border p-2 w-100 rounded"/>
                    </div>
                    <div className="d-flex w-100 my-2">
                        <input type="password" placeholder="Masukan Password" className="border p-2 w-100 rounded"/>
                    </div>
                    <div className="d-flex w-100 my-2">
                        <button className="border p-2 w-100 rounded bg-primary text-white">Masuk</button>
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