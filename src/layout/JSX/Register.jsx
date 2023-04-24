import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { ADDGraphQLUsers } from "../Js/user/GraphQLUsers";
import { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function Register() {
    const [Registered,setRegistered] = useState(false)

    const {Adddata,loading,error} = ADDGraphQLUsers()

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            FirstName: "",
            LastName: "",
            Username: "",
            Email: "",
            Password: "",
            ConfirmPassword: "",
        },
        validationSchema: Yup.object({
            FirstName: Yup.string()
            .required("First Name Empty"),
            LastName: Yup.string()
            .required("Last Name Empty"),
            Username: Yup.string()
            .required("Last Name Empty")
            .matches("^[a-zA-Z\s'-]{1,100}$","Username Cannot Contain Symbols"),
            Email: Yup.string()
                .email("Email Not Valid")
                .required("Email Empty"),
            Password: Yup.string()
                .required("Password Empty")
                .min(8,"Password must at Least 8 Characters"),
            ConfirmPassword: Yup.string()
                .oneOf([Yup.ref("Password")], "Password not identical")
                .required("Confirm Password Empty")
        }),
        onSubmit: (e) => {
            setRegistered(true);
            Adddata({
                variables:{
                    object:{
                        Username: formik.values.Username,
                        Email: formik.values.Email,
                        Password: formik.values.Password
                    }
                }
            })
            setTimeout(() => {
                navigate("../")
            },2000)
        }
    });

    return (
        <>
            <ul
                className="nav nav-pills nav-justified mb-3 mt-3"
                id="ex1"
                role="tablist"
            >
                <li className="nav-item" role="presentation">
                    <Link to={"../"}>
                        <a className="nav-link" id="tab-login" data-mdb-toggle="pill" role="tab">
                            Login
                        </a>
                    </Link>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="tab-register" data-mdb-toggle="pill" role="tab" >
                        Register
                    </a>
                </li>
            </ul>
            {/* Pills navs */}
            {/* Pills content */}
            <div className="tab-content">
                <div
                className="tab-pane fade show active"
                id="pills-login"
                role="tabpanel"
                aria-labelledby="tab-login"
                >
                <form onSubmit={formik.handleSubmit}>
                    {/* Name input */}
                    <div className="form-outline mb-4">
                        <div className="row">
                            <div className="col">
                                <FontAwesomeIcon icon={["fas","person"]} fixedWidth/>
                                <label className="form-label" htmlFor="FirstName">
                                    First Name:
                                </label>
                                <input
                                    type="text"
                                    id="FirstName"
                                    className="form-control"
                                    value={formik.values.FirstName}
                                    onChange={formik.handleChange}
                                    placeholder="Your First Name?"
                                />
                                {formik.errors.FirstName && formik.touched.FirstName && (
                                    <div className="form-text text-danger" data-testid="error">
                                    {formik.errors.FirstName}
                                    </div>
                                )}
                            </div>
                            <div className="col">
                                <label className="form-label" htmlFor="LastName">
                                    Last Name:
                                </label>
                                <input
                                    type="text"
                                    id="LastName"
                                    className="form-control"
                                    value={formik.values.LastName}
                                    onChange={formik.handleChange}
                                    placeholder="Your First Name?"
                                />
                                {formik.errors.LastName && formik.touched.LastName && (
                                    <div className="form-text text-danger" data-testid="error">
                                    {formik.errors.LastName}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Username input */}
                    <div className="form-outline mb-4">
                    <FontAwesomeIcon icon={["fas","user"]} fixedWidth/>
                    <label className="form-label" htmlFor="Username">
                        Username
                    </label>
                    <input
                        type="text"
                        id="Username"
                        className="form-control"
                        value={formik.values.Username}
                        onChange={formik.handleChange}
                        placeholder="Please Enter Your Username"
                    />
                    {formik.errors.Username && formik.touched.Username && (
                        <div className="form-text text-danger" data-testid="error">
                        {formik.errors.Username}
                        </div>
                    )}
                    </div>

                    {/* Email input */}
                    <div className="form-outline mb-4">
                    <FontAwesomeIcon icon={["fas","envelope"]} fixedWidth/>
                    <label className="form-label" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="text"
                        id="Email"
                        className="form-control"
                        value={formik.values.Email}
                        onChange={formik.handleChange}
                        placeholder="Please Enter Your Email"
                    />
                    {formik.errors.Email && formik.touched.Email && (
                        <div className="form-text text-danger" data-testid="error">
                        {formik.errors.Email}
                        </div>
                    )}
                    </div>

                    {/* Password input */}
                    <div className="form-outline mb-4">
                    <FontAwesomeIcon icon={["fas","key"]} fixedWidth/><label className="form-label" htmlFor="loginPassword">
                        Password
                    </label>

                    <input
                        type="Password"
                        id="Password"
                        className="form-control"
                        value={formik.values.Password}
                        onChange={formik.handleChange}
                        placeholder="Please Enter Your Password"
                    />
                    {formik.errors.Password && formik.touched.Password && (
                        <div className="form-text text-danger" data-testid="error">
                        {formik.errors.Password}
                        </div>
                    )}
                    </div>

                    {/* Confirm Password input */}
                    <div className="form-outline mb-4">
                    <FontAwesomeIcon icon={["fas","key"]} fixedWidth/>
                    <label className="form-label" htmlFor="confirmPassword">
                        Confirm Password
                    </label>

                    <input
                        type="Password"
                        id="ConfirmPassword"
                        className="form-control"
                        value={formik.values.ConfirmPassword}
                        onChange={formik.handleChange}
                        placeholder="Confirm Your Password"
                    />

                    {formik.errors.ConfirmPassword && formik.touched.ConfirmPassword && (
                        <div className="form-text text-danger" data-testid="error">
                        {formik.errors.ConfirmPassword}
                        </div>
                    )}
                    </div>
                    
                    {/* Submit button */}
                    <input
                    type="submit"
                    value={"Register"}
                    className="btn btn-primary btn-block mb-4"
                    />

                    {/* Alert Success */}
                    <Alert show={Registered} variant="success">
                        <Alert.Heading>You Successfully Registered!!</Alert.Heading>
                        <p>
                            You Are Being Redirected to Login Form
                        </p>
                    </Alert>

                    {/* Register buttons */}
                    <div className="text-center">
                    <p>
                        Already Have An Account? <a href="../">Login</a>
                    </p>
                    </div>
                </form>
                </div>
            </div>
        </>
    );
}
