import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import HeaderComp from "../components/header.comp"

const Home = () => {
    const navigate = useNavigate()
    
    useEffect(() => {
        const token = localStorage.getItem("token")
        const name  = localStorage.getItem("userName")

        if(token !== null && name !== null) {
            navigate("/dashboard")
        }
    }, [navigate])

    return (
        <div>
            <HeaderComp/>
            <div className="d-flex flex-column px-4 pb-4 pt-0 align-items-center mt-5">
                <h1>SHORTIN</h1>
                <p>adalah aplikasi website yang berfungsi untuk memperpendek link yang dapat di gunakan secara gratis. daftar sekarang dan kamu bisa menyimpan dan mengelola link yang kamu inginkan!</p>
            </div>
            <div className="d-flex flex-column p-4 align-items-center">
                <p>
                    Copyright &copy;&nbsp;{new Date().getFullYear()}&nbsp; <a href="http://exsan-renaldhi.herokuapp.com" className='text-decoration-none'>Exsan Renaldhi</a>
                </p>
            </div>
        </div>
    )
}

export default Home