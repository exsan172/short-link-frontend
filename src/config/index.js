import axios from "axios"

export const request = {
    get : async (path, header, data) => {
        return await axios({
            url     : process.env.REACT_APP_API_URL+path,
            method  : "GET",
            headers : header,
            params  : data
        })
    },

    post : async (path, header, data) => {
        return await axios({
            url     : process.env.REACT_APP_API_URL+path,
            method  : "POST",
            headers : header,
            data    : data
        })
    },

    delete : async (path, header, data) => {
        return await axios({
            url     : process.env.REACT_APP_API_URL+path,
            method  : "DELETE",
            headers : header,
            params  : data
        })
    },
    
    put : async (path, header, data) => {
        return await axios({
            url     : process.env.REACT_APP_API_URL+path,
            method  : "PUT",
            headers : header,
            data    : data
        })
    },
}