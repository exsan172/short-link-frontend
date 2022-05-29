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
                <div className="col-10 col-md-7 px-0">
                    <h1>SHORTIN</h1>
                    <p className='mt-3'>adalah aplikasi website yang berfungsi untuk memperpendek link yang dapat di gunakan secara gratis. daftar sekarang dan kamu bisa menyimpan dan mengelola link yang kamu inginkan!</p>
                </div>
                <div className="col-10 col-md-7 px-0 mt-5">
                    <div className="row">
                        <div className="col-12 col-md-4 mb-3 mb-md-0">
                            <h4 className='border-bottom pb-2'>Aman</h4>
                            <p>SSL memberikan enskripsi data melalui HTTPS yang akan melindungi data pengunjung website </p>
                        </div>
                        <div className="col-12 col-md-4 my-3 my-md-0">
                            <h4 className='border-bottom pb-2'>Cepat</h4>
                            <p>Hanya beberapa detik saja dalam memproses link anda menjadi pendek.</p>
                        </div>
                        <div className="col-12 col-md-4 mt-3 mt-md-0">
                            <h4 className='border-bottom pb-2'>Sederhana</h4>
                            <p>dengan tampilan yang sederhana dapat dengan mudah mengunakan aplikasi.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column p-4 align-items-center">
                <p>
                    Copyright &copy;&nbsp;{new Date().getFullYear()}&nbsp; <a href="https://exsan.my.id" className='text-decoration-none'>Exsan Renaldhi</a>
                </p>
            </div>
        </div>
    )
}

export default Home