import axios from "axios";
import { Cookies } from "react-cookie";

// const API_URL = "http://localhost:5000/api/v1/auth";

const API_URL = "https://blogger-gmkumaran87.herokuapp.com/api/v1/auth";

const register = async(obj) => {
    const result = await axios.post(`${API_URL}/register`, obj);

    return result;
};

const login = async(obj) => {
    console.log("Before login", API_URL, obj);
    const oneDay = 1000 * 60 * 60 * 24; // One day in milli seconds

    const options = {
        expires: new Date(Date.now() + oneDay),
        httpOnly: true,
        // secure: true,
        signed: true,
    };
    const result = await axios.post(`${API_URL}/login`, obj);

    const cookies = new Cookies();

    if (result.status === 201) {
        console.log(result.data);
        cookies.set("token", result.data.token, { path: "/" }, options);
        localStorage.setItem("user", JSON.stringify(result.data));
    }
    return result;
};

const logout = async() => {
    const result = await axios.get(`${API_URL}/logout`);
    console.log("before clearing the Token", result);
    if (result.status === 200) {
        localStorage.removeItem("user");
    }
    return result;
};

const forgotPassword = async(email) =>
    await axios.post(`${API_URL}/forgot-password`, email);

const emailLink = async(userId, randomStr) =>
    await axios.post(
        `${API_URL}/validation/${userId}/${randomStr}`, {}, { timeout: 4000 }
    );

const passwordReset = async(obj) =>
    await axios.post(`${API_URL}/update-password`, obj);

const verifyUser = async(confirmCode) =>
    await axios.get(`${API_URL}/activate/${confirmCode}`);

export {
    register,
    login,
    logout,
    emailLink,
    forgotPassword,
    passwordReset,
    verifyUser,
};