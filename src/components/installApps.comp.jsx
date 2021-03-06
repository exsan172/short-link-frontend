import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPlusSquare, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { Modal } from 'react-bootstrap'
import Icon from '../assets/icon-shortin.png'

const InstallApps = () => {
    const [showIos, setshowIos] = useState(false)

    const installApps = () => {
        const checkOs = getMobileOperatingSystem()
        if(checkOs === "iOS") {
            setshowIos(true)
        }
    }

    const getMobileOperatingSystem = () => {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
        if (/windows phone/i.test(userAgent)) {
            return "Windows Phone";
        }
    
        if (/android/i.test(userAgent)) {
            return "Android";
        }
    
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return "iOS";
        }
    
        return "unknown";
    }

    return (
        <div className={`sticky-bottom justify-content-center`} style={{display:"none"}} id="installAppsElements">
            <div className="col-11 col-md-5 col-lg-4 mb-2">
                <div className="d-flex bg-white border rounded m-1">
                    <div className="d-flex align-items-center justify-content-center px-3">
                        <FontAwesomeIcon icon={faTimes} id="closeInstallApps"/>
                    </div>
                    <div className="d-flex align-items-center justify-content-center p-2">
                        <img src={Icon} alt="icon shortin" style={{width:"35px"}} className="rounded"/>
                    </div>
                    <div className="d-flex align-items-center justify-content-center p-2 flex-column flex-fill">
                        <div className="d-flex">
                            <span className='font-weight-bold' style={{fontSize:"medium"}}>Shortin</span>
                        </div>
                        <div className="d-flex">
                            <span style={{fontSize:"x-small"}}>Install Apps Mobile & Desktop</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center p-2">
                        <button className="px-3 py-2 border-0 text-white rounded" id="installApps" style={{backgroundColor:"#0099ff"}} onClick={() => installApps()}>
                            <span style={{fontSize:"small"}}>
                                Install
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <Modal show={showIos} onHide={() => setshowIos(false)}>
                <Modal.Header closeButton>
                    Install aplikasi di IOS
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-column aling-items-center justify-content-center">
                        <p>1. Buka safari browser</p>
                        <p>2. Tekan Bagikan &nbsp; <FontAwesomeIcon icon={faArrowUp} style={{position:'absolute'}}/></p>
                        <p>3. Tekan Tambahkan Ke layar utama &nbsp; <FontAwesomeIcon icon={faPlusSquare}/></p>
                        <p>4. Selesai.</p>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default InstallApps