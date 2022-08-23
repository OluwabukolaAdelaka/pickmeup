import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const basicSchema = yup.object().shape({
    fullName: yup.string().max(30, "Full name must be 30 characters or less").required("Full name required"),
    email: yup.string().email("Please enter a valid email address").required("Email is required"),
    password: yup.string().min(8).matches(passwordRules, {message: "Password must be minimum of 8 and include 1 uppercase letter, 1 lowercase letter, 1 numeric digit"}).required("Please enter your password"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Plese confirm password"),
});