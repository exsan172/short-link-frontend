import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Redirect = () => {

    let { uniqueId } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        const getRedirectUrl = async () => {
            const getUrl = await axios({
                url : "http://localhost:3012/redirect/get-redirect-url",
                method : "POST",
                data : {
                    uniqueCode : uniqueId
                }
            })
    
            if(getUrl.data.statusCode === 200) {
                window.location.href = getUrl.data.data.longUrl
                
            } else {
                navigate("/not-found")
            }
        }

        getRedirectUrl()
    }, [uniqueId, navigate])

    return (
        <div className="d-flex justify-content-center align-items-center mt-5 flex-column">
            <div className="d-flex mb-3">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center">
                <div className="d-flex my-2">
                    <span style={{fontSize:"large"}}>
                        Redirecting to destination, please wait ...
                    </span>
                </div>
                <div className="d-flex" style={{fontSize:"small"}}>
                    Copyright &copy; &nbsp;<a href="http://exsan-renaldhi.herokuapp.com">Exsan Renaldhi</a>
                </div>
            </div>
        </div>
    )
}

export default Redirect