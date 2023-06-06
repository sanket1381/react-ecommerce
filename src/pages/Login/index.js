import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { verifyUser } from "../../services/apis/auth";
import { validateEmail } from "../../services/validations/email";
import { ValidatePassword } from "../../services/validations/password";
import ErrorDisplay from "../../components/errors/ErrorDisplay";
import './login.css'

import { Helmet } from "react-helmet";
import URL from "../../img-url.config";
const theme = createTheme();

const Login = () => {
    const navigate = useNavigate();
    // create states for email,password 
    const [email, setEmail] = useState({
        field: "email",
        email: "",
        isChanged: false,
    });
    const [password, setPassword] = useState({
        field: "Password",
        password: "",
        isChanged: false,
    });

    const [eemail, setEemail] = useState("");
    const [epass, setEpassword] = useState("");
    const [details, setEdetails] = useState("");
    //validation for email and password
    const foo = async (email, password) => {
        const data = await verifyUser(email, password);
        if (data === 'Email Id not Found') {
            setEemail('Email Id not Found');
        } else if (data === 'Invalid Password') {
            setEpassword('Invalid Password');
        }
        else if (data) {
            navigate("/");
        } else {
            setEdetails("Please check your details");
        }
    };

    const onChangeUsername = (e) => {
        setEmail({ ...email, email: e.target.value, isChanged: true });
    };

    const onChangePassword = (e) => {
        setPassword({ ...email, password: e.target.value, isChanged: true });
    };

    //  validations for Email 
    useEffect(() => {
        validateEmail(email).then((result) => {
            !result.value ? setEemail(result.error) : setEemail("");
        });
    }, [email.email]);

    //  validations for password
    useEffect(() => {
        ValidatePassword(password).then((result) => {
            !result.value ? setEpassword(result.error) : setEpassword("");
        });
    }, [password.password]);

    //handle submit validation and pass response to API
    const handleSubmit = (event) => {
        event.preventDefault();
        if (email.email === "") {
            setEmail({ ...email, isChanged: true });
            setEemail("Email Can't Be Empty");
        }
        if (password.password === "") {
            setPassword({ ...password, isChanged: true });
            setEpassword("Password Can't Be Empty");
        }

        const data = new FormData(event.currentTarget);
       
        if (data.get("email") !== "" && data.get("password") !== "") {
            foo(data.get("email"), data.get("password"));
        }

    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Helmet>
                <title>Art & Craft : Login</title>
                <meta
                    name="description"
                    content="Art & Craft attractive products"
                />
                <meta
                    name="keywords"
                    content="Art, Craft, Craftmegastore"
                />
            </Helmet>
            <div style={{ marginTop: '30px' }}>
                <ThemeProvider theme={theme}>
                    <Container component="main" sx={{ maxWidth: { lg: '1280px' } }}>

                        <Paper sx={{ display: { sm: 'flex' } }}>
                            <CssBaseline />
                            <div>
                                <img src={URL.user.image} alt="" width={'100%'} />
                            </div>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center", width: { sm: '1000px' }, marginTop: { sm: '30px' }
                                }}
                            >
                                <div className="sign">Sign in</div>

                                <Box
                                    component="form"
                                    onSubmit={handleSubmit}
                                    noValidate
                                    sx={{ mt: 1 }}
                                >
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        value={email.email}
                                        onChange={onChangeUsername}
                                        sx={{ minWidth: '300px' }}
                                    />
                                    <ErrorDisplay data={eemail} />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        value={password.password}
                                        onChange={onChangePassword}
                                        autoComplete="current-password"
                                    />
                                    <ErrorDisplay data={epass} />
                                    <ErrorDisplay data={details} />
                                    <div>
                                        {/* <Link> */}
                                        Forgot password?
                                        {/* </Link> */}
                                    </div>
                                    <div className="btnlayout">
                                        <div>
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                sx={{ mt: 3, mb: 2, background: '#FF00AE', borderRadius: '50px', width: '100px' }}
                                            >
                                                Sign In
                                            </Button>
                                        </div>
                                        <div>OR</div>
                                        <div>
                                            <Link to={"/signup"} variant="body2">
                                                <Grid item sx={{ color: 'black', }}>
                                                    {"Create New Account"}
                                                </Grid>
                                            </Link>
                                        </div>
                                    </div>

                                </Box>
                            </Box>
                        </Paper>
                    </Container>
                </ThemeProvider>
            </div>

        </>
    );
};

export default Login;
