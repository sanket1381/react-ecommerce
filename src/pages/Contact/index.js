import { Button,  IconButton,  TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Toolbarcustom, useStyles } from './index.styles';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import ErrorDisplay from '../../components/errors/ErrorDisplay';
import ContactPageBanner from '../../stories/containers/ContactPageBanner/ContactPageBanner';
import { useNavigate } from 'react-router-dom';
import { contact } from '../../services/apis/contact';
import SEO from '../../helemet-seo.config';
import { Helmet } from 'react-helmet';
const Contact = (props) => {
    const classes = useStyles(props);
    // create state for name
    const [name, setName] = useState({
        field: "name",
        data: "",
        isChanged: false,
    });
     // create state for phone
    const [phone, setPhone] = useState({
        field: "phone",
        data: "",
        isChanged: false,
    });
     // create state for emailId
    const [emailId, setEmailId] = useState({
        field: "emailId",
        data: "",
        isChanged: false,
    });
     // create state for subject
    const [subject, setSubject] = useState({
        field: "subject",
        data: "",
        isChanged: false,
    });
    const navigate = useNavigate()
    const [ename, setEName] = useState("");
    const [eemail, setEEmail] = useState("");
    const [ephone, setEPhone] = useState("");
    const [esubject, setESubject] = useState("");
    // validation for name
    useEffect(() => {
        if (name.data === "" && name.isChanged === true) {
            setEName("Name cant be empty");
        } else {
            setEName("");
        }
    }, [name.data]);
    // validation for emailId
    useEffect(() => {
        if (emailId.data === "" && emailId.isChanged === true) {
            setEEmail("Email id cant be empty");
        } else {
            setEEmail("");
        }
    }, [emailId.data]);
    // validation for phone
    useEffect(() => {
        if (phone.data === "" && phone.isChanged === true) {
            setEPhone("phone cant be empty");
        } else {
            setEPhone("");
        }
    }, [phone.data]);
    // validation for subject
    useEffect(() => {
        if (subject.data === "" && subject.isChanged === true) {
            setESubject("subject cant be empty");
        } else {
            setESubject("");
        }
    }, [subject.data]);
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name.data === "") {
            setEName("Name can't Be Empty.");
        }
        if (phone.data === "") {
            setEPhone("Phone number can't Be Empty.");
        }
        if (emailId.data === "") {
            setEEmail("Email id can't Be Empty.");
        }
        if (subject.data === "") {
            setESubject("Subject can't Be Empty.");
        }
        const response = {
            name: name,
            phone: phone,
            emailId: emailId,
            subject: subject,

        }
        //pass response to API
        if (response.name.data !== '' && response.phone.data !== '' && response.emailId.data !== '' && response.subject.data !== '') {
            const contactData = response;
            const contactRes = await contact(contactData);

            if (contactRes) {
                navigate('/');
            } else {
                console.log('error');
            }
        }
    }


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Helmet>
                <title>{SEO.contact.title}</title>
                <meta
                    name="description"
                    content={SEO.contact.description}
                />
                <meta
                    name="keywords"
                    content={SEO.keywords}
                />
                <link rel="canonical" href={`${SEO.contact.canonical.api}/contact`} />
                <meta property="og:title" content={SEO.contact.title} />
                <meta property="og:description" content={SEO.contact.description} />
                <meta property="og:image" content={SEO.contact.image} />
                <meta property="og:url" content={`${SEO.contact.canonical.api}/contact`} />

            </Helmet>
            <ContactPageBanner />
            <div style={{ marginBottom: '30px' }}>
                <div className={classes.titleParent}>
                    <div className={classes.title}>Get in Touch with us</div>
                </div>
                <div className={classes.contactParent}>
                    <div className={classes.contactParent1}>
                        <Toolbarcustom><div><IconButton sx={{ borderRadius: '50px', mr: '20px', background: 'white' }}><MailOutlineIcon sx={{ fontSize: '20px' }} /></IconButton>anantisaboo1980@gmail.com</div></Toolbarcustom>
                        <Toolbarcustom><div><IconButton sx={{ borderRadius: '50px', mr: '20px', background: 'white' }}><CallIcon sx={{ fontSize: '20px' }} /></IconButton>+91 9890367761</div></Toolbarcustom>
                        <Toolbarcustom><div><IconButton sx={{ borderRadius: '50px', mr: '20px', background: 'white' }}><HomeIcon sx={{ fontSize: '20px' }} /></IconButton></div><div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex asperiores officia excepturi aliquid.</div></Toolbarcustom>
                    </div>

                    <div className={classes.contactParent2}>
                        <div className={classes.inputparent}>
                            <TextField
                                required
                                autoFocus
                                sx={{ width: '100%' }}
                                label="Full Name"
                                value={name.data}
                                onChange={(e) =>
                                    setName({
                                        ...name,
                                        data: e.target.value,
                                        isChanged: true,
                                    })}
                            />
                            <div className={classes.errorsub}>
                                <ErrorDisplay data={ename} />
                            </div>
                        </div>
                        <div className={classes.inputparent}>

                            <TextField
                                required
                                autoFocus
                                sx={{ minWidth: '100%', marginBottom: "10px" }}
                                label="Email"
                                value={emailId.data}
                                onChange={(e) =>
                                    setEmailId({
                                        ...emailId,
                                        data: e.target.value,
                                        isChanged: true,
                                    })}
                            />
                            <ErrorDisplay data={eemail} />


                        </div>
                        <div className={classes.inputparent}>
                            <TextField
                                required
                                autoFocus
                                sx={{ minWidth: '100%', marginBottom: "10px" }}
                                label="Phone"
                                value={phone.data}
                                onChange={(e) =>
                                    setPhone({
                                        ...phone,
                                        data: e.target.value,
                                        isChanged: true,
                                    })}
                                variant="outlined"
                            />
                            <ErrorDisplay data={ephone} />
                        </div>

                        <div className={classes.inputparent}>
                            <textarea
                                placeholder="Message"
                                label="Message"
                                value={subject.data}
                                onChange={(e) =>
                                    setSubject({
                                        ...subject,
                                        data: e.target.value,
                                        isChanged: true,
                                    })}
                                className={classes.textareasize}
                            />
                            <div className={classes.errorsub}>
                                <ErrorDisplay data={esubject} />
                            </div>
                        </div>
                        <div>
                            <div className='sendbtn'>
                                <Button sx={{ padding: '10px 20px 10px 20px', color: 'white', borderRadius: '40px', background: '#f030a3', fontSize: '18px', fontSize: { sm: '22px' } }} onClick={handleSubmit}>SEND</Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact
