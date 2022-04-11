import { uiActions } from "../store/ui-slice";
import { postAction } from "../store/post-slice";

import {
    getAllPosts,
    getPost,
    deletePost,
    getCategories,
} from "../services/post.service";

const allPosts = (search) => {
    return async(dispatch) => {
        try {
            const result = await getAllPosts(search);
            if (result.status === 200) {
                dispatch(postAction.loadPosts(result.data));
            }
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    message: "Something went wrong..",
                })
            );
        }
    };
};

const getSinglePost = (id) => {
    return async(dispatch) => {
        try {
            const result = await getPost(id);
            console.log(result);
            if (result.status === 200) {
                dispatch(postAction.loadSinglePost(result.data));
            }
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    message: "Something went wrong..",
                })
            );
        }
    };
};
const deleteSinglePost = (id) => {
    return async(dispatch) => {
        console.log("Before delte user", id);
        try {
            console.log("Before delte user", id);
            const result = await deletePost(id);
            if (result.status === 200) {
                dispatch(
                    uiActions.showNotification({
                        status: "success",
                        message: "User Deleted successfully",
                    })
                );
            }
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    message: "Something went wrong..",
                })
            );
        }
    };
};

const getAllCategories = () => {
    return async(dispatch) => {
        try {
            const result = await getCategories();
            console.log("Get Categories", result);
            if (result.status === 200) {
                dispatch(postAction.loadCategories(result.data));
            }
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    message: "Something went wrong..",
                })
            );
        }
    };
};

/*const userAdd = (obj) => {
        return async(dispatch) => {
            try {
                const result = await addUser(obj);
                if (result.status === 200) {
                    dispatch(
                        uiActions.showNotification({
                            status: "success",
                            message: "User added successfully",
                        })
                    );
                }
            } catch (error) {
                dispatch(
                    uiActions.showNotification({
                        status: "error",
                        message: "Something went wrong..",
                    })
                );
            }
        };
    };*/
export { allPosts, deleteSinglePost, getSinglePost, getAllCategories };