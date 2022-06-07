import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi } from '@fortawesome/free-solid-svg-icons'

const NoInternet = () => {
    return (
        <div className="d-flex flex-fill">
            <div className="d-flex justify-content-center align-items-center flex-fill mt-5 flex-column">
                <div className="col-10 col-md-6 col-lg-4">
                    <div className="d-flex justify-content-center flex-column align-items-center">
                        <FontAwesomeIcon icon={faWifi} size="5x"/>
                        <h1 className='mt-5'>Jaringan Terputus</h1>
                        <p>Cek koneksi internet pada perangkat anda atau hubungkan dengan wifi.</p>
                        <p className='mt-5'>SHORTIN APPS</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NoInternet