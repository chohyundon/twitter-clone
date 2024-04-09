import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import styled from "styled-components";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Button = styled.button`
  margin-top: 20px;
  background-color: white;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  display: flex;
  width: 100%;
  color: black;
  align-items: center;
  cursor: pointer;
  justify-content: center;
`;

const Logo = styled.img`
  height: 26px;
`;

function GithubButton() {
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Button onClick={handleClick}>
        <Logo src="/github.svg"></Logo>
        Continue with GitHub
      </Button>
    </>
  );
}

export default GithubButton;
