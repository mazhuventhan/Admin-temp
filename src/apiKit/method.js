import apiKit from "./apiKit";
import { appConstants } from './appConstant'

// headers
const jsonHeader = { "access-control-allow-origin": "*", "Content-Type": "application/json", Accept: "application/json" }
const formDataHeader = { "access-control-allow-origin": "*", "Content-Type": "multipart/form-data", Accept: "application/json" }

let navigate = null;

export const getNavigate = (data) => navigate = data

// common api handler
const apiHandlerFunction = (handler) => {


    return handler

        .then(result => { return { success: true, status: result.status, message: result.data.message, data: result?.data } })

        .catch((err) => {

            if (err?.response?.status && err?.response?.status >= 400 && err?.response?.status < 500) {

                if (err?.response?.status === 401 || err?.response?.status === 403) {

                    localStorage.removeItem("token");
                    sessionStorage.clear();

                    navigate("/login")

                    return { success: false, status: err.response.status, message: err?.response?.data?.message }
                }
                else return { success: false, status: err.response.status, message: err?.response?.data?.message }
            }
            else return { success: false, status: 500, message: appConstants.offlineMessage }

        })

}

// Methods
export const Method = {

    // post method
    post: (url, body, formData) => window.navigator.onLine ? apiHandlerFunction(apiKit.post(url, body, { headers: formData ? formDataHeader : jsonHeader })) : ({ success: false, status: 500, message: appConstants.offlineMessage }),

    // get method
    get: (url) => window.navigator.onLine ? apiHandlerFunction(apiKit.get(url, { headers: jsonHeader })) : ({ success: false, status: 500, message: appConstants.offlineMessage }),

    // put method 
    put: (url, body, formData) => window.navigator.onLine ? apiHandlerFunction(apiKit.put(url, body, { headers: formData ? formDataHeader : jsonHeader })) : ({ success: false, status: 500, message: appConstants.offlineMessage }),

    // delete method
    delete: (url) => window.navigator.onLine ? apiHandlerFunction(apiKit.delete(url, { headers: jsonHeader })) : ({ success: false, status: 500, message: appConstants.offlineMessage }),
};


export default Method;
