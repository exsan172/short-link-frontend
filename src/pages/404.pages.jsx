import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

const Notfound = () => {
    return (
        <div className="d-flex align-items-center mt-5 flex-column">
            <div className="d-flex" style={{fontSize: "x-large"}}>
                <span style={{fontWeight: "bold"}}>
                    404
                </span>
                &nbsp;
                <span>
                    | Tidak Ditemukan
                </span>
            </div>
            <div className="d-flex mt-2">
                <Link to="/" className='justify-content-center text-decoration-none'>
                    <FontAwesomeIcon icon={faArrowLeftLong}/>
                    &nbsp;
                    Halaman utama
                </Link>
            </div>
        </div>
    )
}

export default Notfound