import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import BrandLogo from "../assets/shortin.png"

const HeaderDashboard = () => {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("token")
        navigate("/")
    }

    return (
        <>
            <div className="d-flex p-3 w-100" style={{background:"#0099ff"}}>
                <div className="d-flex container align-items-center">
                    <div className="d-flex">
                        <img src={BrandLogo} alt="shortin" width="100px" height="20px"/>
                    </div>
                    <div className="d-flex flex-fill justify-content-end align-items-center">
                        <div className="mx-2 text-white d-none d-md-flex">
                            HI, Jancok
                        </div>
                        <div className="d-flex mx-2 border px-4 py-1 rounded" style={{cursor:"pointer"}} onClick={() => logout()}>
                            <div className='text-white text-decoration-none'>Keluar &nbsp;<FontAwesomeIcon icon={faArrowRightLong}/></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderDashboard