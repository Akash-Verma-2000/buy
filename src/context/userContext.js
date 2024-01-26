// Import necessary dependencies and components
import { useContext, createContext, useState, useEffect } from "react";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseInit";

// Create a context for user-related data
export const userContext = createContext();

// Custom hook to access the user context
export function useUserContext() {
    return useContext(userContext);
}

// Define the CustomUserContext component
export default function CustomUserContext({ children }) {

    // State variables for user data, messages, and login status
    const [userObj, setUserObj] = useState({ name: "", email: "", password: "" });
    const [messageObj, setMessageObj] = useState({ message: "", bg: "" });
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("loggedInUserEmail"));

    // Function to log out the user
    function logoutUser() {
        localStorage.removeItem("loggedInUserEmail");
        setIsLoggedIn(false);

    }

    // Asynchronous function to log in the user
    async function loginUser() {

        //check if the email and password is correct
        const q = query(collection(db, "user"), where("email", "==", userObj.email));
        let isValidUser = null;
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            isValidUser = doc.data();
        });

        // Check if the password is correct
        if (isValidUser.password != userObj.password) {
            isValidUser = null;
        }

        // If the user is valid, set the logged-in status, display a success message, and store the email in localStorage
        if (isValidUser) {
            localStorage.setItem("loggedInUserEmail", isValidUser.email);
            setIsLoggedIn(true);
            // getCartProducts();
            setMessageObj({ message: `Hello ${isValidUser.name}, You are logged in.`, bg: "success" });
        } else {
            // If the user is not valid, display a warning message
            setMessageObj({ message: `Hello user, Please give right credentials.`, bg: "warning" });
        }
        // Clear the user object
        setUserObj({ name: "", email: "", password: "" });
    }

    // Asynchronous function to register a new user
    async function registerUser() {
        try {

            //check if the email is already registered
            const q = query(collection(db, "user"), where("email", "==", userObj.email));
            let isEmailPresent = null;
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                isEmailPresent = doc.data();
            });

            // If the email is present, display a danger message; otherwise, add the user and display a success message
            if (isEmailPresent) {
                setMessageObj({ message: `Hello ${isEmailPresent.name}, You are already registered.`, bg: "danger" });
            } else {
                await addDoc(collection(db, "user"), userObj);
                setMessageObj({ message: `Hello ${userObj.name}, Welcome to our family.`, bg: "success" });
            }

            // Clear the user object
            setUserObj({ name: "", email: "", password: "" });

        } catch (err) {
            console.log(err)
            console.log("There is some issue in adding user to the firestore");
        }
    }

    // Return the user context provider with various functions and state variables
    return (
        <userContext.Provider value={{ setUserObj, userObj, registerUser, messageObj, loginUser, logoutUser, isLoggedIn }}>
            {children}
        </userContext.Provider>
    )
}
