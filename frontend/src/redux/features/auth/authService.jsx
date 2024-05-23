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

//Get login status
const getLoginStatus = async () => {
    const response = await axios.get(API_URL + "getLoginStatus");
    return response.data.message;
};

//Get User
const getUser = async () => {
    const response = await axios.get(API_URL + "getUser");
    return response.data;
};

//update user profile
const updateUser = async (userData) => {
    const response = await axios.patch(API_URL + "updateUser", userData);
    return response.data;
};

//update photo
const updatePhoto = async (userData) => {
    const response = await axios.patch(API_URL + "updatePhoto", userData);
    return response.data;
};

const authService = {
    register, login, logout, getLoginStatus, getUser, updateUser, updatePhoto
};

export default authService;
