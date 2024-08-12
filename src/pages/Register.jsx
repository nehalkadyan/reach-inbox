import React from "react";
import UserAuth from "../components/userAuth";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { signInSuccessful } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      // Sign in with Google
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google signup successful:", user);

      // Dispatch signin success action
      dispatch(
        signInSuccessful({
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
        })
      );

      navigate("/");
      console.log("User signed up: ", user);
    } catch (error) {
      console.error("Error during sign-up: ", error);
    }
  };

  return (
    <div>
      <UserAuth
        title={"Create a new account"}
        subtitle={"Sign Up"}
        btnText={"Create an account"}
        btnCaption={"Already have an account?"}
        handleClick={handleSignUp}
      />
    </div>
  );
};

export default Register;
