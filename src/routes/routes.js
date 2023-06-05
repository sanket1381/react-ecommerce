import React, { lazy } from "react";

const Cart = lazy(() => import('../pages/Cart'));
const Category = lazy(() => import('../pages/Category'));
const Checkout = lazy(() => import('../pages/Checkout'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Login = lazy(() => import('../pages/Login'));
const Signup = lazy(() => import('../pages/Signup'));
const ProductDetails = lazy(() => import('../pages/ProductDetail'));
const Review = lazy(() => import('../pages/Review'));
const Contact = lazy(() => import('../pages/Contact'));
const Payment = lazy(() => import('../pages/Payment'));
const ThankYou = lazy(() => import('../pages/ThankYou'));
const ProductPage = lazy(() => import('../pages/ProductPage'));
const Welcome = lazy(() => import('../pages/Welcome'));
const OrderList = lazy(() => import('../pages/OrderList'));

export const router = [
    {
        path: "/",
        element: <Dashboard />,
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
