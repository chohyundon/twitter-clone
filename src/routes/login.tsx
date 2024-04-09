import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import {
  Form,
  Button,
  Error,
  Input,
  Switcher,
  Title,
  Wrapper,
} from "../components/auth-components";
import GithubButton from "../components/github-button";

function CreateAccount() {
  const navigate = useNavigate();

  const initState = {
    email: "",
    password: "",
  };

  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState(initState);
  const [error, setIsError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const inputValues = { ...inputValue, [name]: value };
    setInputValue(inputValues);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsError("");
    if (isLoading || inputValue.email === "" || inputValue.password === "")
      return;
    try {
      //게정생성
      //사용자 프로필 이름
      //리다이렉트 홈페이지
      setIsLoading(true);
      await signInWithEmailAndPassword(
        auth,
        inputValue.email,
        inputValue.password
      );
      navigate("/");
    } catch (e) {
      if (e instanceof FirebaseError) {
        setIsError(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <Title>Log into X</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
          required
        ></Input>
        <Input
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
          required
        ></Input>
        <Button type="submit">{isLoading ? "Loading" : "LogIn"}</Button>
      </Form>
      {error !== "" ? <Error>{error}</Error> : null}
      <Switcher>
        Don't have an account? <Link to="/create-account">Create One</Link>
      </Switcher>
      <GithubButton />
    </Wrapper>
  );
}

export default CreateAccount;
