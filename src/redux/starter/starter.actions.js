import { API } from "../../shared/Api";
import store from "../store";

const { dispatch } = store;

export const registerStrategy = async (user, data, navigate) => {

    dispatch({ type: "LOADING" });

    try {
        await API("multipart/form-data").post("users", user);
        console.log(user.values);
        const objectLogin = {
            userName: data.userName,
            password: data.password
        }
        console.log(objectLogin);
        loginStrategy(objectLogin, navigate);
    } catch (error) {
        console.log(error);
        dispatch({ type: "ERROR", payload: error.message })
    }

}

export const loginStrategy = async (user, navigate) => {

    dispatch({ type: "LOADING" });

    try {
        const newUser = await API("application/json").post("users/login", user).catch((error) => console.log(error));
        console.log(newUser.data);
        dispatch({ type: "LOGIN_OK", payload: newUser.data });
        navigate("/perfil");
    } catch (error) {
        console.log(error);
        dispatch({ type: "ERROR", payload: error.message })
    }

}