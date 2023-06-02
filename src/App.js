import React, { Suspense, useContext, useEffect } from "react";
import { router } from "./routes/routes";
import { Route, Routes } from "react-router-dom";
import Navbar from "./stories/containers/Navbar/Navbar";
import Footer from "./stories/containers/Footer/Footer";
import {
    ThemeProvider,
    createTheme,
} from "@mui/material/styles";
import "./App.css";
import { CartContext } from "./context/cart";
import Loader from "./components/loader/Loader";

function App() {

    const routesContainer = router.map((el, index) => {
        return (
            <Route path={el.path} element={el.element} key={index} />
        )
    });
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [routesContainer]);

    const theme = createTheme();
    const { cartState } = useContext(CartContext);


    return (
        <>
            <Suspense fallback={<Loader />}>
                <ThemeProvider theme={theme}>
                    <Navbar label={"Nav Bar"} />
                    <Routes>{routesContainer}</Routes>
                    <Footer label={"footer"} />
                </ThemeProvider>
            </Suspense>
        </>
    );
}

export default App;
