import React, { lazy } from "react";
import ProtectedRoutes from "../auth/ProtectedRoutes";
// import Cart from "../pages/Cart";
// import Category from "../pages/Category";
// import Checkout from "../pages/Checkout";
// import Dashboard from "../pages/Dashboard";
// import Login from "../pages/Login";
// import Signup from "../pages/Signup";
// import ProductDetails from "../pages/ProductDetail";
// import Products from "../pages/Products";
// import Review from "../pages/Review";
// import SignUp from "../pages/Signup1";
// import Contact from "../pages/Contact";
// import Payment from "../pages/Payment";
// import ThankYou from "../pages/ThankYou";
// import ProductPage from "../pages/ProductPage";
// import Productvies from "../stories/containers/ProductDetails_c/productvies";
// import Welcome from "../pages/Welcome";
// import OrderList from "../pages/OrderList";

const Cart = lazy(() => import('../pages/Cart'));
const Category = lazy(() => import('../pages/Category'));
const Checkout = lazy(() => import('../pages/Checkout'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Login = lazy(() => import('../pages/Login'));
const Signup = lazy(() => import('../pages/Signup'));
const ProductDetails = lazy(() => import('../pages/ProductDetail'));
const Products = lazy(() => import('../pages/Products'));
const Review = lazy(() => import('../pages/Review'));
const SignUp = lazy(() => import('../pages/Signup1'));
const Contact = lazy(() => import('../pages/Contact'));
const Payment = lazy(() => import('../pages/Payment'));
const ThankYou = lazy(() => import('../pages/ThankYou'));
const ProductPage = lazy(() => import('../pages/ProductPage'));
const Productvies = lazy(() => import('../stories/containers/ProductDetails_c/productvies'));
const Welcome = lazy(() => import('../pages/Welcome'));
const OrderList = lazy(() => import('../pages/OrderList'));


export const router = [
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/productvies",
        element: <Productvies />,
    },
    {
        path: "/aboutus",
        element: <Review />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/products",
        element: <ProductPage />,
    },
    {
        path: "/product",
        element: <ProductDetails />,
        query: {
            productId: ":id",
        }
    },
    {
        path: "/products",
        element: <ProductPage />,
        query: {
            categoryId: ":id",
        }
    },
    // {
    //     path: "/category",
    //     element: <Products />,
    // },


    {
        path: "/category",
        element: <Category />,
        query: {
            categoryId: ":id",
        }
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/payment",
        element: <Payment />,
    },
    {
        path: "/thankyou",
        element: <ThankYou />,
    },
    {
        path: "/orderlist",
        element: <OrderList />,
    },
    // {
    //     path: "/checkout",
    //     element: (
    //         <ProtectedRoutes>
    //             <Checkout />
    //         </ProtectedRoutes>
    //     ),
    // },
    {
        path: "/checkout",
        element: <Checkout />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },

    {
        path: "/welcome",
        element: <Welcome />,
    },
];
