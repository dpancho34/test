import axios from 'axios';

export const registerService = async ( body ) => {
    let response = await axios.post('http://localhost:4000/user/register', body);
    return response;
}

export const loginService = async ( body ) => {
    let response = await axios.post('http://localhost:4000/user/login', body);
    return response;
}

export const uploadImageService = async ( body ) => {
    let response = await axios.post('http://localhost:4000/user/image', body, 
        {
            headers: { "Content-Type": "multipart/form-data" }
        });
    return response;
}