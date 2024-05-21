import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_REACT_BACKEND_URL;
export const API_URL = `${BACKEND_URL}/api/users/`;

//register User
const register = async (userData) => {
    const response = await axios.post(API_URL + "register", userData, {
        withCredentials: true,
    });
    return response.data;
};

//Login user
const login = async (userData) => {
    const response = await axios.post(API_URL + "login", userData);
    return response.data;
};

//Logout user
const logout = async () => {
    const response = await axios.get(API_URL + "logout");
    return response.data.message;
};

const authService = {
    register, login, logout
};

export default authService;
