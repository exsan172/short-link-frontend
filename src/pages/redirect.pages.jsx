import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { request } from "../config" 

const Redirect = () => {

    let { uniqueId } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        const getRedirectUrl = async () => {
            const getUrl = await request.post("/redirect/get-redirect-url", null, {
                uniqueCode : uniqueId
            })
            
            if(getUrl.data.statusCode === 200) {
                const checkIsIp = getUrl.data.data.longUrl.split(".")
                let result = 0

                for(const i in checkIsIp) {
                    if(parseInt(checkIsIp[i])) {
                        result--
                    } else {
                        result++
                    }
                }

                const protocol = result < 0 ? "http://" : "https://"
                const detectHaveProtocol = getUrl.data.data.longUrl.indexOf("://") === -1 ? protocol : ""

                window.location.href = detectHaveProtocol+getUrl.data.data.longUrl
                
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
                    Copyright &copy; &nbsp;<a href="https://exsan.my.id">Exsan Renaldhi</a>
                </div>
            </div>
        </div>
    )
}

export default Redirect