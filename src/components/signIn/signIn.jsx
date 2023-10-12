import { useState } from 'react'

import Button from "../button";
import Input from "../input";

import { SignInContainer, ButtonsContaner } from "./styled";

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
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
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
    </SignInContainer>
  );
};

export default SignIn;
