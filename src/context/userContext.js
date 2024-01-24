import { useContext, createContext, useState } from "react";

export const userContext = createContext();

export function useUserContext() {
    return useContext(userContext);
}

export default function CustomUserContext({ children }) {

    const [userArray, setUserArray] = useState([]);
    const [userObj, setUserObj] = useState({ name: "", email: "", password: "" });
    const [messageObj, setMessageObj] = useState({ message: "", bg: "" });
    const [userLoggedIn, setUserLoggedIn] = useState(false);

    function loginUser() {
        //check if the email and password is correct
        const isValiduser = userArray.find(user => user.email == userObj.email && user.password == userObj.password);
        if (isValiduser) {
            setUserLoggedIn(true);
            setMessageObj({ message: `Hello ${isValiduser.name}, you are logged in.`, bg: "success" });
        } else {
            setUserLoggedIn(false);
            setMessageObj({ message: `Hello user, please give right credentials.`, bg: "warning" });
        }
        setUserObj({ name: "", email: "", password: "" });
    }

    function registerUser() {
        //check if the email is already registered
        const isEmailPresent = userArray.find(user => user.email === userObj.email);
        if (isEmailPresent) {
            setMessageObj({ message: `Hello ${isEmailPresent.name}, you are already registered.`, bg: "danger" });
        } else {
            setUserArray([userObj, ...userArray]);
        }
        setUserObj({ name: "", email: "", password: "" });
    }

    return (
        <userContext.Provider value={{ setUserObj, userObj, registerUser, messageObj, loginUser }}>
            {children}
        </userContext.Provider>
    )
}
