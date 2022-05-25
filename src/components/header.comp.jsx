import { Link } from 'react-router-dom'
import BrandLogo from "../assets/shortin.png"

const HeaderComp = () => {
    return (
        <>
            <div className="d-flex p-3" style={{background:"#0099ff"}}>
                <div className="d-flex container align-items-center">
                    <div className="d-flex">
                        <img src={BrandLogo} alt="shortin" width="100px" height="20px"/>
                    </div>
                    <div className="d-flex flex-fill justify-content-end align-items-center">
                        <div className="d-flex mx-2">
                            <Link to="/login" className='text-white text-decoration-none'>Masuk</Link>
                        </div>
                        <div className="d-flex mx-2 border px-4 py-1 rounded">
                            <Link to="/register" className='text-white text-decoration-none'>Daftar</Link>
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,218.7C672,256,768,288,864,288C960,288,1056,256,1152,208C1248,160,1344,96,1392,64L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </>
    )
}

export default HeaderComp