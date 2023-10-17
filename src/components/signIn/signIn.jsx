import { useState } from 'react'

import Button from "../button";
import Input from "../input";

import { SignContainer, ButtonsContaner } from "../../routes/authentication/styled";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      resetForm();
    } catch (error) {

      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Password!");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email!");
          break;
        default:
          console.error(error);
      }
    }
  };

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    console.log("log google");
  };

  return (
    <SignContainer>
      <h2>Don&apos;t have an account? <a href="/auth/sign-up">Sign Up</a></h2>
      

      <h3>Sign in with your email and password</h3>

      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <ButtonsContaner>
          <Button buttonType="base" type="submit">
            Sign In
          </Button>
          <Button buttonType="google" type="button" onClick={signInWithGoogle}>
            Sign In With Google
          </Button>
        </ButtonsContaner>
      </form>
    </SignContainer>
  );
};

export default SignIn;
