// Import necessary dependencies and components
import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { db } from "../firebaseInit";
import productsData from "../data/products.json";
import { collection, addDoc, query, where, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

// Create a context for product-related data
export const productContext = createContext();

// Custom hook to access the product context
export function useProductContext() {
    return useContext(productContext);
}

// Define the CustomProductContext component
export default function CustomProductContext({ children }) {
    // State variables to manage product data and filters
    const [productsArray, setProductsArray] = useState(productsData);
    const [cartProductsArray, setCartProductsArray] = useState([]);
    const [menCat, setMenCat] = useState(false);
    const [womCat, setWomCat] = useState(false);
    const [jelCat, setJelCat] = useState(false);
    const [eleCat, setEleCat] = useState(false);
    const [maxPrice, setMaxPrice] = useState(1200);
    const [totalProducts, setTotalProducts] = useState(productsArray.length);
    const [searchResultArray, setSearchResultArray] = useState([]);
    const [searchResultCount, setSearchResultCount] = useState(0);
    const [searchValue, setSearchValue] = useState("");

    // Function to get search results based on the searchValue
    function getSearchResults() {
        if (searchValue == "") {
            setSearchResultArray([]);
            setSearchResultCount(0);

        } else {

            const temp = productsData.filter((product) => {
                return product.title.toUpperCase().indexOf(searchValue.toUpperCase()) > -1;
            })
            setSearchResultArray(temp);
            setSearchResultCount(temp.length);
        }
    }

    // useEffect to call getSearchResults when searchValue changes
    useEffect(() => {
        getSearchResults();
    }, [searchValue]);

    // Function to filter products based on the maxPrice
    function filterPrice() {
        const filteredProductArray = productsData.filter((product) => product.price <= maxPrice);
        setProductsArray(filteredProductArray);
        setTotalProducts(productsArray.length);
    }

    // useEffect to call filterPrice when maxPrice changes
    useEffect(() => {
        filterPrice();
    }, [maxPrice])

    // Function to filter products based on categories
    function categoryByFilter() {
        let man = [];
        if (menCat) {
            man = productsData.filter((product) => product.category == "men's clothing" && product.price <= maxPrice);
        }
        let woman = [];
        if (womCat) {
            woman = productsData.filter((product) => product.category == "women's clothing" && product.price <= maxPrice);
        }
        let jewellery = [];
        if (jelCat) {
            jewellery = productsData.filter((product) => product.category == "jewelery" && product.price <= maxPrice)
        }
        let electronic = [];
        if (eleCat) {
            electronic = productsData.filter((product) => product.category == "electronics" && product.price <= maxPrice);
        }

        // Update the product array based on selected categories
        if (!eleCat && !jelCat && !womCat && !menCat) {
            setProductsArray(productsData);
        } else {
            const filteredProductArray = [...man, ...jewellery, ...electronic, ...woman];
            setProductsArray(filteredProductArray)
        }
    }

    // useEffect to call categoryByFilter when category filters change
    useEffect(() => {
        categoryByFilter();
    }, [menCat, womCat, jelCat, eleCat]);

    // Function to fetch cart products from Firestore
    async function getCartProducts() {
        try {
            const temp = [];
            const q = query(collection(db, "cart"), where("userEmail", "==", localStorage.getItem("loggedInUserEmail")));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {

                temp.push(doc.data());
            });
            setCartProductsArray(temp);


        } catch {
            console.log("There is some issue in fetching cart item from the firestore")
        }
    }

    // useEffect to call getCartProducts when the component mounts
    useEffect(() => {
        getCartProducts();
    }, []);

    // Function to add a product to the cart
    async function addToCart(product) {
        try {

            let isProductPresent;
            const q = query(collection(db, "cart"), where("userEmail", "==", localStorage.getItem("loggedInUserEmail")));
            const querySnapshot = await getDocs(q);

            // Check if the product is already present in the cart
            querySnapshot.forEach((doc) => {

                if (doc.data().id == product.id) {
                    isProductPresent = doc.data();
                }
            });

            // If the product is not present, add it to the cart
            if (!isProductPresent) {
                product.userEmail = localStorage.getItem("loggedInUserEmail");
                product.quantity = 1;
                await addDoc(collection(db, "cart"), product);
                getCartProducts()
            } else {
                // If the product is already present, increase its quantity
                increaseQuantity(product.id);
            }

        } catch (err) {
            console.log("There is some issue in adding cart item to the firestore")
        }
    }

    // Asynchronous function to increase the quantity of a product in the cart
    async function increaseQuantity(product) {
        try {
            const productId = product.id
            let ID;
            let quantity = 0;

            // Query to get the cart items for the logged-in user
            const q = query(collection(db, "cart"), where("userEmail", "==", localStorage.getItem("loggedInUserEmail")));
            const querySnapshot = await getDocs(q);

            // Iterate through the cart items and find the matching product
            querySnapshot.forEach((doc) => {

                if (productId == doc.data().id) {
                    ID = doc.id;
                    quantity = doc.data().quantity;
                }
            });

            // Reference to the specific document in the "cart" collection
            const washingtonRef = doc(db, "cart", ID);

            // Update the quantity of the product in the cart
            await updateDoc(washingtonRef, {
                quantity: quantity + 1
            });

            // Refresh the cart products array
            getCartProducts();

        } catch {
            console.log("There is some issue in increasing quantity of the product in the firestore");
        }
    }

    // Asynchronous function to decrease the quantity of a product in the cart
    async function decreaseQuantity(product) {
        try {
            const productId = product.id
            let ID;
            let quantity = 0;

            // Query to get the cart items for the logged-in user
            const q = query(collection(db, "cart"), where("userEmail", "==", localStorage.getItem("loggedInUserEmail")));
            const querySnapshot = await getDocs(q);

            // Iterate through the cart items and find the matching product
            querySnapshot.forEach((doc) => {

                if (productId == doc.data().id) {
                    ID = doc.id;
                    quantity = doc.data().quantity;

                    // If quantity is 1, remove the product from the cart
                    if (quantity == 1) {
                        removeFromCart(product);
                    }
                }
            });

            // Reference to the specific document in the "cart" collection
            const washingtonRef = doc(db, "cart", ID);

            // Update the quantity of the product in the cart
            await updateDoc(washingtonRef, {
                quantity: quantity - 1
            });

            // Refresh the cart products array
            getCartProducts();

        } catch {
            console.log("There is some issue in decreasing quantity of the product in the firestore");
        }
    }

    // Asynchronous function to remove a product from the cart
    async function removeFromCart(product) {
        try {
            let ID;

            // Query to get the cart items for the logged-in user
            const q = query(collection(db, "cart"), where("userEmail", "==", localStorage.getItem("loggedInUserEmail")));
            const querySnapshot = await getDocs(q);

            // Iterate through the cart items and find the matching product
            querySnapshot.forEach((doc) => {

                if (product.id == doc.data().id) {
                    ID = doc.id;
                }
            });

            // Delete the document corresponding to the product in the "cart" collection
            await deleteDoc(doc(db, "cart", ID));

            // Refresh the cart products array
            getCartProducts();

        } catch {
            console.log("There is some issue in removing cart item from the firestore")
        }
    }

    // Return the product context provider with various functions and state variables
    return (

        <productContext.Provider value={{
            setSearchValue,
            searchResultCount,
            searchResultArray,
            totalProducts,
            maxPrice,
            setMaxPrice,
            setMenCat,
            setWomCat,
            setJelCat,
            setEleCat,
            getCartProducts,
            productsArray,
            addToCart,
            cartProductsArray,
            removeFromCart,
            increaseQuantity,
            decreaseQuantity
        }}>

            {children}

        </productContext.Provider>
    )
}
