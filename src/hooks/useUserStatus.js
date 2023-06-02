import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/cart";
import { updateloggrduserCart } from "../services/apis/cart";
export const useUserStatus = () => {
    const token = localStorage.getItem("authToken");
    const [isLogged, setIsLogged] = useState(false);
    const { cartState, cartDispatch } = useContext(CartContext);
    // const userId = localStorage.getItem("authToken");
    const guestUserId = localStorage.getItem("guestUserId");
    useEffect(() => {
        setIsLogged(!token ? false : true);
         if (token && !guestUserId) {
            cartDispatch.fetchData(token)

        } else if (guestUserId && token) {
            cartDispatch.updateuUserCart(guestUserId, token)
        } else if (guestUserId) {
            cartDispatch.fetchData(guestUserId)
        }
    }, [token, guestUserId])


    return { isLogged };
};

