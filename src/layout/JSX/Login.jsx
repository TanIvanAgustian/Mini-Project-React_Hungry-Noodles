import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import setAuthCookie, {getAuthCookie} from "../../utils/cookies";
import GETGraphQLUsers from "../../fetchData/GraphQLUsers";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useState } from "react";

export default function Login() {
    
    const { data } = GETGraphQLUsers();
    const [Loggedin,setLoggedin] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Email Not Valid")
                .required("Email Kosong"),
            password: Yup.string()
                .required("Password Kosong"),
            
        }),
        onSubmit: (e) => {
            let isThere = false;
            for (let i = 0; data?.Users.length>i;i++){
                if (data.Users[i].Email == formik.values.email && data.Users[i].Password == formik.values.password){
                    isThere=true;
                    setAuthCookie(data.Users[i].Id);
                    setLoggedin(true)
                    setTimeout(() => {
                        window.location.reload()
                    },2000)
                }
            }
            if ( isThere == false){
                alert("User Tidak Ditemukan")
            }
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
                <a
                    className="nav-link active"
                    id="tab-login"
                    data-mdb-toggle="pill"
                    href="#pills-login"
                    role="tab"
                    aria-controls="pills-login"
                    aria-selected="true"
                >
                    Login
                </a>
                </li>
                <li className="nav-item" role="presentation">
                <Link to={"../Register"}><a
                    className="nav-link"
                    id="tab-register"
                    data-mdb-toggle="pill"
                    role="tab"
                >
                    Register
                </a></Link>
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
                    {/* Email input */}
                    <div className="form-outline mb-4">
                    <FontAwesomeIcon icon={["fas","envelope"]} fixedWidth/><label className="form-label" htmlFor="loginName">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        placeholder="Give Your Email"
                    />

                    {formik.errors.email && formik.touched.email && (
                        <div className="form-text text-danger" data-testid="error">
                        {formik.errors.email}
                        </div>
                    )}
                    </div>
                    {/* Password input */}
                    <div className="form-outline mb-4">
                    <FontAwesomeIcon icon={["fas","key"]} fixedWidth/><label className="form-label" htmlFor="loginPassword">
                        Password
                    </label>

                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        placeholder="Give Your Password"
                    />

                    {formik.errors.password && formik.touched.password && (
                        <div className="form-text text-danger" data-testid="error">
                        {formik.errors.password}
                        </div>
                    )}
                    </div>
                    
                    {/* Submit button */}                    
                    <input
                    type="submit"
                    value={"Sign In"}
                    className="btn btn-primary btn-block mb-4"
                    />

                    <Alert show={Loggedin} variant="success">
                        <Alert.Heading>You Successfully Loggedin!!</Alert.Heading>
                    </Alert>



                    {/* Register buttons */}
                    <div className="text-center">
                    <p>
                        Not a member? <a href="../Register">Register</a>
                    </p>
                    </div>
                </form>
                </div>
            </div>
        </>
    );
}
