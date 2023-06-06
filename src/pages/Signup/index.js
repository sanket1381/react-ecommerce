import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {  Paper } from '@mui/material';
import { getMasterUsersData, saveUser } from '../../services/apis/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { validateEmail } from '../../services/validations/email';
import { ValidatePassword } from '../../services/validations/password';
import { useEffect } from 'react';
import ErrorDisplay from '../../components/errors/ErrorDisplay';
import URL from '../../img-url.config';

const theme = createTheme();

export default function SignUp() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const navigate = useNavigate();
    // create states
    const [firstName, setFirstName] = useState({
        field: "firstName",
        firstName: "",
        isChanged: false,
    });
    const [lastName, setLastName] = useState({
        field: "lastName",
        lastName: "",
        isChanged: false,
    });
    const [email, setEmail] = useState({
        field: "email",
        email: "",
        isChanged: false,
    });
    const [mobile, setMobile] = useState({
        field: "mobile",
        mobile: "",
        isChanged: false,
    });
    const [password, setPassword] = useState({
        field: "Password",
        password: "",
        isChanged: false,
    });

    const [ordersCount, setOrderCount] = useState({
        field: "ordersCount",
        ordersCount: "",
        isChanged: false,
    });
    const [verified, setVerified] = useState({
        field: "verified",
        verified: "",
        isChanged: false,
    });
    const [ipAddress, setIpAddress] = useState({
        field: "ipAddress",
        ipAddress: "",
        isChanged: false,
    });
    const [roles, setRoles] = useState({
        field: "roles",
        roles: "",
        isChanged: false,
    });
    const [status, setStatus] = useState("0");
    const [eemail, setEemail] = useState("");
    const [epass, setEpassword] = useState("");
    const [efirstName, setEfirstName] = useState("");
    const [elastName, setElastName] = useState("");
    const [Emobile, setEmobile] = useState('');
    const [EordersCount, setEordersCount] = useState('');
    const [Erole, setErole] = useState('');
    const [EipAddress, setEipAddress] = useState('');

    const [open, setOpen] = React.useState(false);
    const [isError, setIsError] = useState(false);
    //check for onchange input field
    const onChangeUsername = (e) => {
        setEmail({ ...email, email: e.target.value, isChanged: true });
    };
    const onChangePassword = (e) => {
        setPassword({ ...password, password: e.target.value, isChanged: true });
    };
    const onChangeFirstName = (e) => {
        setFirstName({ ...firstName, firstName: e.target.value, isChanged: true });
    };
    const onChangeLastName = (e) => {
        setLastName({ ...lastName, lastName: e.target.value, isChanged: true });
    };

    // validations for ipAddress 
    useEffect(() => {
        if (ipAddress.ipAddress === "" && ipAddress.isChanged === true) {
            setEipAddress("ipAddress can't Be Empty.");
        } else {
            setEipAddress("");
        }
    }, [ipAddress.ipAddress]);

    useEffect(() => {
        if (roles.roles === "" && roles.isChanged === true) {
            setErole("please select masterrole");
        } else {
            setErole("");
        }
    }, [roles.roles]);

    //validations for ordersCount 
    useEffect(() => {
        if (ordersCount.ordersCount === "" && ordersCount.isChanged === true) {
            setEordersCount("ordersCount can't Be Empty.");
        } else {
            setEordersCount("");
        }
    }, [ordersCount.ordersCount]);

    //validations for mobile 
    useEffect(() => {
        if (mobile.mobile === "" && mobile.isChanged === true) {
            setEmobile("Mobile can't Be Empty.");
        }
        else if (mobile.mobile.length !== 10 && mobile.isChanged === true) {
            setEmobile("Minimum Phone number Length should be Ten characters");
        } else {
            setEmobile("");
        }
    }, [mobile.mobile]);

    //validations for firstName 
    useEffect(() => {
        if (firstName.firstName === "" && firstName.isChanged === true) {
            setEfirstName("First name can't Be Empty.");
        } else {
            setEfirstName("");
        }
    }, [firstName.firstName]);

    //validations for lastName 
    useEffect(() => {
        if (lastName.lastName === "" && lastName.isChanged === true) {
            setElastName("Last name can't Be Empty.");
        } else {
            setElastName("");
        }
    }, [lastName.lastName]);

    useEffect(() => {
        validateEmail(email).then((result) => {
            !result.value ? setEemail(result.error) : setEemail("");
        });
    }, [email.email]);

    //validations for password 
    useEffect(() => {
        ValidatePassword(password).then((result) => {
            !result.value ? setEpassword(result.error) : setEpassword("");
        });
    }, [password.password]);

    //validation and pass response to API
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (firstName.firstName === "") {
            setFirstName({ ...firstName, isChanged: true });
            setEfirstName("FirstName Can't Be Empty");
        }
        if (lastName.lastName === "") {
            setLastName({ ...lastName, isChanged: true });
            setElastName("LastName Can't Be Empty");
        }
        if (email.email === "") {
            setEmail({ ...email, isChanged: true });
            setEemail("Email Can't Be Empty");
        }
        if (password.password === "") {
            setPassword({ ...password, isChanged: true });
            setEpassword("Password Can't Be Empty");
        }
        if (mobile.mobile === "") {
            setMobile({ ...mobile, isChanged: true });
            setEmobile("mobile Can't Be Empty");
        }
        if (
            email.email === "" ||
            password.password === "" ||
            firstName.firstName === "" ||
            lastName.lastName === "" ||
            mobile.mobile === ""
        ) {

        } else {

            const response = {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                mobile: mobile,
                ordersCount: ordersCount,
                verified: verified,
                status: status,
                ipAddress: ipAddress,
                roles: roles
            };

            const userData = response;
            //pass response to API
            const userRes = await saveUser(userData);
            //check if email already exist
            if (userRes === 'Email already exists') {
                setIsError(true);
                setOpen(true);
                setEemail('This email is already registered.');
            }
            //check if mobile number already exist 
            else if (userRes === 'Mobile number already exists') {
                setIsError(true);
                setOpen(true);
                setEmobile('This mobile number is already registered.');
            } else if (userRes) {
                setIsError(false);
                setOpen(true);
                navigate('/welcome')
            } else {
                setIsError(true);
                setOpen(true);
            }
        }
    };

    const [checked, setChecked] = useState(false);
    
    return (
        <ThemeProvider theme={theme} >
            <Container component="main" sx={{ maxWidth: "xs", maxWidth: { lg: '1280px' }, }} >
                <CssBaseline />
                <Paper
                    elevation={4}
                    sx={{
                        marginTop: '30px', marginBottom: '30px'
                    }}
                    className='signup'
                >
                    <div className='signimg'>
                        <img src={URL.user.image} alt="" width={'100%'} />
                    </div>

                    <div>

                        <Box component="form" noValidate onSubmit={handleSubmit} className='signform'>
                            <Typography component="h1" variant="h5" sx={{ textAlign: 'center', marginBottom: '30px' }}>
                                Sign up
                            </Typography>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                value={firstName.firstName}
                                onChange={onChangeFirstName}
                                sx={{ minWidth: { sm: '400px' } }}
                            />
                            <ErrorDisplay data={efirstName} />
                            <Grid sx={{ mt: '20px' }}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    value={lastName.lastName}
                                    onChange={onChangeLastName}
                                />
                                <ErrorDisplay data={elastName} />
                            </Grid>
                            <Grid item xs={12} sx={{ mt: '20px' }}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={email.email}
                                    onChange={onChangeUsername}
                                />
                                <ErrorDisplay data={eemail} />
                            </Grid>
                            <Grid item xs={12} sx={{ mt: '20px' }}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={password.password}
                                    onChange={onChangePassword}
                                />
                                <ErrorDisplay data={epass} />
                            </Grid>

                            <Grid item xs={12} sx={{ mt: '20px' }}>
                                <TextField
                                    fullWidth
                                    outline="none"
                                    value={mobile.mobile}
                                    label="Mobile"
                                    required
                                    type="number"
                                    onChange={(e) =>
                                        setMobile({
                                            ...mobile,
                                            mobile: e.target.value,
                                            isChanged: true,
                                        })
                                    }
                                />
                                <ErrorDisplay data={Emobile} />
                            </Grid>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, background: '#FF00AE', borderRadius: '50px', width: '90px' }}
                            >
                                Sign Up
                            </Button>
                            <Grid justifyContent="flex-end">
                                <Link to={'/login'} >
                                    <Grid item sx={{ color: 'black' }}>
                                        Already have an account? Sign in
                                    </Grid>
                                </Link>
                            </Grid>
                        </Box>
                    </div>
                </Paper>

            </Container>
        </ThemeProvider>
    );
}