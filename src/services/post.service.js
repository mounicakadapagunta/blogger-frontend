import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://blogger-gmkumaran87.herokuapp.com/api/v1/posts";
// const API_URL = "http://localhost:5000/api/v1/posts";

const getAllPosts = async(search) => {
    const result = await axios.get(`${API_URL}${search}`);
    return result;
};

const createPost = async(post) => {
    return await axios.post(`${API_URL}`, post, { headers: authHeader() });
};

const getPost = async(id) =>
    await axios.get(`${API_URL}/${id}`, { headers: authHeader() });

const deletePost = async(id) => {
    console.log("deleteuser", id, API_URL);
    const result = await axios.delete(`${API_URL}/${id}`, {
        headers: authHeader(),
    });
    return result;
};
const updatePost = async(id, obj) =>
    await axios.patch(`${API_URL}/${id}`, obj, { headers: authHeader() });

const getCategories = async() =>
    // await axios.get("http://localhost:5000/api/v1/category");
    await axios.get("https://blogger-gmkumaran87.herokuapp.com/api/v1/category");

const uploadImage = async(obj, config) =>
    await axios.post(`${API_URL}/image-upload`, obj, {
        headers: authHeader(),
    });
export {
    getAllPosts,
    createPost,
    deletePost,
    updatePost,
    getPost,
    getCategories,
    uploadImage,
};