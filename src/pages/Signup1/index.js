import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { Alert, FormControl, IconButton, MenuItem, Paper, Snackbar, Stack, Switch, Toolbar } from '@mui/material';
import { getMasterUsersData,  submitUser } from '../../services/apis/auth';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import ErrorDisplay from '../../components/errors/ErrorDisplay';
import { ValidatePassword } from '../../services/validations/password';
import { validateEmail } from '../../services/validations/email';
import { ValidatePhone } from '../../services/validations/phone';

const theme = createTheme();

export default function SignUp() {

    const navigate = useNavigate();
    const { id } = useParams();
    const [master, setMaster] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const fielddata = await getMasterUsersData();
            setMaster(fielddata.data.result);
        };
        fetchData().catch(console.error);
    }, []);

    // create states
    const [email, setEmail] = useState({
        field: "email",
        data: "",
        isChanged: false,
    });

    const [mobile, setMobile] = useState({
        field: "mobile",
        data: "",
        isChanged: false,
    });
    const [firstName, setFirstName] = useState({
        field: "firstName",
        data: "",
        isChanged: false,
    });
    const [lastName, setLastName] = useState({
        field: "lastName",
        data: "",
        isChanged: false,
    });
    const [password, setPassword] = useState({
        field: "password",
        data: "",
        isChanged: false,
    });
    const [ordersCount, setOrderCount] = useState({
        field: "ordersCount",
        data: "",
        isChanged: false,
    });
    const [verified, setVerified] = useState({
        field: "verified",
        data: "",
        isChanged: false,
    });
    const [ipAddress, setIpAddress] = useState({
        field: "ipAddress",
        data: "",
        isChanged: false,
    });
    const [roles, setRoles] = useState({
        field: "roles",
        data: "",
        isChanged: false,
    });
    const [status, setStatus] = useState('');

    const [Eemail, setEemail] = useState('');
    const [Emobile, setEmobile] = useState('');
    const [EfirstName, setEfirstName] = useState('');
    const [ElastName, setElastName] = useState('');
    const [Epassword, setEpassword] = useState('');
    const [EordersCount, setEordersCount] = useState('');
    const [Everified, setEverified] = useState('');
    const [Erole, setErole] = useState('');
    const [EipAddress, setEipAddress] = useState('');

    const [open, setOpen] = React.useState(false);
    const [isError, setIsError] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    //handle validations
    useEffect(() => {
        if (ipAddress.data === "" && ipAddress.isChanged === true) {
            setEipAddress("ipAddress can't Be Empty.");
        } else {
            setEipAddress("");
        }
    }, [ipAddress.data]);

    //handle validations
    useEffect(() => {
        if (roles.data === "" && roles.isChanged === true) {
            setErole("please select masterrole");
        } else {
            setErole("");
        }
    }, [roles.data]);

    //handle validations
    useEffect(() => {
        if (password.data === "" && password.isChanged === true) {
            setEpassword("password can't Be Empty.");
        } else {
            setEpassword("");
        }
    }, [password.data]);

    //handle validations
    useEffect(() => {
        if (mobile.data === "" && mobile.isChanged === true) {
            setEmobile("mobile can't Be Empty.");
        } else {
            setEmobile("");
        }
    }, [mobile.data]);

    //handle validations
    useEffect(() => {
        if (email.data === "" && email.isChanged === true) {
            setEemail("email  can't Be Empty.");
        } else {
            setEemail("");
        }
    }, [email.data]);

    //handle validations
    useEffect(() => {
        if (firstName.data === "" && firstName.isChanged === true) {
            setEfirstName("firstName can't Be Empty.");
        } else {
            setEfirstName("");
        }
    }, [firstName.data]);

    //handle validations
    useEffect(() => {
        if (lastName.data === "" && lastName.isChanged === true) {
            setElastName("lastName  can't Be Empty.");
        } else {
            setElastName("");
        }
    }, [lastName.data]);

    //handle validations
    useEffect(() => {
        if (ordersCount.data === "" && ordersCount.isChanged === true) {
            setEordersCount("ordersCount can't Be Empty.");
        } else {
            setEordersCount("");
        }
    }, [ordersCount.data]);

    useEffect(() => {
        validateEmail(email).then((result) => {
            !result.value ? setEmobile(result.error) : setEmobile("");
        });
    }, [email.data]);

    useEffect(() => {
        ValidatePassword(password).then((result) => {
            !result.value ? setEpassword(result.error) : setEpassword("");
        });
    }, [password.data]);

    useEffect(() => {
        ValidatePhone(mobile).then((result) => {
            !result.value ? setEpassword(result.error) : setEpassword("");
        });
    }, [mobile.data]);

    //validation and pass response to API
    const onSubmit = async (e) => {
        e.preventDefault();
        if (email.data === "") {
            setEemail("email can't Be Empty.");
        }
        if (mobile.data === "") {
            setEmobile("mobile  can't Be Empty.");
        }
        if (firstName.data === "") {
            setEfirstName("firstName can't Be Empty.");
        }
        if (lastName.data === "") {
            setElastName("lastName can't Be Empty.");
        }
        if (password.data === "") {
            setEpassword("password can't Be Empty.");
        }
        if (ordersCount.data === "") {
            setEordersCount("ordersCount can't Be Empty.");
        }
        if (ipAddress.data === "") {
            setEipAddress("ipAddress can't Be Empty.");
        }
        if (roles.data === "") {
            setErole("please select master role");
        }
        if (
            email.data === "" ||
            mobile.data === "" ||
            firstName.data === "" ||
            lastName.data === "" ||
            password.data === "" ||
            ordersCount.data === "" ||
            ipAddress.data === "" ||
            roles.data === ""
        ) {
            alert("please fill all the fields");
        } else {
            alert("all field are filled.");
            const response = {
                email: email,
                mobile: mobile,
                firstName: firstName,
                lastName: lastName,
                password: password,
                ordersCount: ordersCount,
                verified: verified,
                status: status,
                ipAddress: ipAddress,
                roles: roles
            };
            const UserData = response;
            //pass response to API
            const UserRes = await submitUser(UserData);
            //if valid user navigate
            if (UserRes) {
                setIsError(false);
                setOpen(true);
                navigate('/login')

            }
            //if invalid user 
            else {
                setIsError(true);
                setOpen(true);
            }
        }
    };

    const [checked, setChecked] = useState(false);
    const handlestatus = (event) => {
        setChecked(event.target.checked)
        setStatus(checked === true ? "0" : "1")
    }

    return (
        <div>
            <Paper
                sx={{
                    marginBottom: "60px",
                    background: "#dcdcdc",
                    padding: "30px",
                }}
            >
                <Paper
                    sx={{
                        background: "white"
                    }}
                >
                    <Toolbar>
                        <Typography
                            sx={{
                                fontSize: "22px",
                                color: "black",
                            }}
                        >
                            Sign Up
                        </Typography>
                    </Toolbar>
                </Paper>


                <Grid
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: { xs: "column", lg: "row" },
                        mt: "30px",
                    }}
                >
                    <Paper
                        sx={{
                            background: "white",
                            width: { xs: "100%", lg: "57%" },
                            mr: { xs: "0%", lg: "3%" },
                            pb: "30px",
                        }}
                    >
                        <Toolbar>
                            <Typography>Basic Information</Typography>
                            <IconButton
                                sx={{ position: "absolute", right: "0px", top: "0px" }}
                            >
                            </IconButton>
                        </Toolbar>
                        <Toolbar>
                            <FormControl fullWidth sx={{}} variant="filled">
                                <Typography>EMAIL</Typography>
                                <TextField
                                    sx={{ marginBottom: "10px" }}
                                    id="filled-adornment-amount"
                                    label="Email"
                                    required
                                    value={email.data}
                                    disableUnderline="true"
                                    onChange={(e) =>
                                        setEmail({
                                            ...email,
                                            data: e.target.value,
                                            isChanged: true,
                                        })
                                    }
                                />
                                <ErrorDisplay data={Eemail} />
                            </FormControl>
                        </Toolbar>
                        <Toolbar>
                            <FormControl fullWidth sx={{ mt: "20px" }} variant="filled">
                                <Typography>MOBILE</Typography>

                                <TextField
                                    aria-label="minimum height"
                                    disableUnderline="true"
                                    outline="none"
                                    value={mobile.data}
                                    label="Mobile"
                                    required
                                    type="number"
                                    onChange={(e) =>
                                        setMobile({
                                            ...mobile,
                                            data: e.target.value,
                                            isChanged: true,
                                        })
                                    }
                                />
                                <ErrorDisplay data={Emobile} />
                            </FormControl>
                        </Toolbar>
                        <Toolbar>
                            <FormControl fullWidth sx={{ mt: "20px" }} variant="filled">
                                <Typography>FIRSTNAME</Typography>
                                <TextField
                                    sx={{ marginBottom: "10px" }}
                                    id="filled-adornment-amount" label={"FirstName"}
                                    value={firstName.data}
                                    required
                                    disableUnderline="true"
                                    onChange={(e) =>
                                        setFirstName({
                                            ...firstName,
                                            data: e.target.value,
                                            isChanged: true,
                                        })
                                    }
                                />
                                <ErrorDisplay data={EfirstName} />
                            </FormControl>
                        </Toolbar>

                        <Toolbar>
                            <FormControl fullWidth sx={{ mt: "20px" }} variant="filled">
                                <Typography>LASTNAME</Typography>
                                <TextField
                                    sx={{ marginBottom: "10px" }}
                                    id="filled-adornment-amount" label={"LastName"}
                                    value={lastName.data}
                                    required
                                    disableUnderline="true"
                                    onChange={(e) =>
                                        setLastName({
                                            ...lastName,
                                            data: e.target.value,
                                            isChanged: true,
                                        })
                                    }
                                />

                                <ErrorDisplay data={ElastName} />
                            </FormControl>
                        </Toolbar>

                        <Toolbar>
                            <FormControl fullWidth sx={{ mt: "20px" }} variant="filled">
                                <Typography>PASSWORD</Typography>
                                <TextField
                                    sx={{ marginBottom: "10px" }}
                                    id="filled-adornment-amount" label={"Password"}
                                    value={password.data}
                                    required
                                    disableUnderline="true"
                                    onChange={(e) =>
                                        setPassword({
                                            ...password,
                                            data: e.target.value,
                                            isChanged: true,
                                        })
                                    }
                                />

                                <ErrorDisplay data={Epassword} />
                            </FormControl>
                        </Toolbar>

                        <Toolbar>
                            <FormControl fullWidth sx={{ mt: "20px" }} variant="filled">
                                <Typography>ORDERSCOUNT</Typography>
                                <TextField
                                    sx={{ marginBottom: "10px" }}
                                    id="filled-adornment-amount" label={"OrdersCount"}
                                    value={ordersCount.data}
                                    required
                                    disableUnderline="true"
                                    onChange={(e) =>
                                        setOrderCount({
                                            ...ordersCount,
                                            data: e.target.value,
                                            isChanged: true,
                                        })
                                    }
                                />

                                <ErrorDisplay data={EordersCount} />
                            </FormControl>
                        </Toolbar>
                        <Toolbar>
                            <FormControl fullWidth sx={{ mt: "20px" }} variant="filled">
                                <Typography>IPADDRESS</Typography>
                                <TextField
                                    sx={{ marginBottom: "10px" }}
                                    id="filled-adornment-amount" label={"ipAddress"}
                                    value={ipAddress.data}
                                    required
                                    type='number'
                                    disableUnderline="true"
                                    onChange={(e) =>
                                        setIpAddress({
                                            ...ipAddress,
                                            data: e.target.value,
                                            isChanged: true,
                                        })
                                    }
                                />
                                <ErrorDisplay data={EipAddress} />
                            </FormControl>
                        </Toolbar>

                        <Toolbar>
                            <FormControl
                                fullWidth
                                sx={{ mt: "20px", mr: "20px" }}
                                variant="filled"
                            >Mater Role
                                <TextField
                                    id="outlined-select-brand"
                                    select
                                    defaultValue="EUR"
                                    value={roles.data}
                                    label="Role"
                                    type="text"
                                    sx={{ mt: '5px' }}
                                    onChange={(e) => {
                                        setRoles({
                                            roles,
                                            data: e.target.value,
                                            isChanged: true,
                                        });
                                    }}
                                >
                                    {master?.map((ele, index) => {
                                        return (
                                            <MenuItem value={ele._id}>{ele.name}</MenuItem>
                                        )
                                    })}
                                </TextField>
                                <ErrorDisplay data={Erole} />
                            </FormControl>
                        </Toolbar>

                        <Toolbar>
                            <FormControl fullWidth sx={{ mt: "20px" }} variant="filled">
                                <Typography>VERIFIED</Typography>
                                <TextField
                                    sx={{ marginBottom: "10px" }}
                                    id="filled-adornment-amount" label={"Verified"}
                                    value={verified.data}
                                    disableUnderline="true"
                                    onChange={(e) =>
                                        setVerified({
                                            ...verified,
                                            data: e.target.value,
                                            isChanged: true,
                                        })
                                    }
                                />

                                <ErrorDisplay data={Everified} />
                            </FormControl>
                        </Toolbar>

                        <Toolbar>
                            <FormControlLabel label='STATUS'
                                control={
                                    <Switch
                                        checked={checked}
                                        onChange={handlestatus}
                                        value={checked}
                                    />
                                }
                            />
                        </Toolbar>
                    </Paper>

                </Grid>
                <Toolbar sx={{ mt: "30px", mx: '40%' }}>
                    <Link to={'/userlist'}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="error"
                        >
                            Cancel
                        </Button>
                    </Link>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mx: "20px" }}
                        onClick={onSubmit}
                        color="success"
                    >
                        Submit
                    </Button>
                </Toolbar>
            </Paper>
            <Stack spacing={2} sx={{ width: "100%" }}>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                    }}
                >
                    <Alert
                        onClose={handleClose}
                        color={isError ? "error" : "success"}
                        sx={{ width: "100%" }}
                    >
                        {isError
                            ? "Something Went Wrong User Not Added"
                            : "User succesfully Added"}
                    </Alert>
                </Snackbar>
            </Stack>
        </div>
    );
}