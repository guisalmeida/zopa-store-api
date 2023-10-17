import { useState } from "react";
import Button from "../button";
import FormInput from "../input";

import { SignContainer, ButtonsContaner } from "../../routes/authentication/styled";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Password do not match!');
      return
    }

    try {
      console.log('form sent!')
      resetForm();
    } catch (error) {

      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use!!");
      }
      console.error(error);
    }
  };

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const signUpWithGoogle = () => {
    console.log('signup')
  };

  return (
    <SignContainer>
      <h2>Already have an account? <a href="/auth/sign-in">Sign In</a></h2>
      
      <h3>Sign up with your email and password</h3>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <ButtonsContaner>
          <Button buttonType="base" type="submit">
            Sign In
          </Button>
          <Button buttonType="google" type="button" onClick={signUpWithGoogle}>
            Sign In With Google
          </Button>
        </ButtonsContaner>

      </form>
    </SignContainer>
  );
};

export default SignUp;
