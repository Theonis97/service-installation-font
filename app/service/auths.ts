import api from "../api"


//conexion 

export const login = async (email , password) => {

    const response = await  api.post("/login", {email, password});
}



