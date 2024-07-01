import method from "./method";

const apiFunctions = {

    loginApi: (payload) => method.post("login", payload),
    signUpApi: (payload) => method.post("register", payload),
    dataApi: (payload) => method.get("catlist", payload),

}

export default apiFunctions;