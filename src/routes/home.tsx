import styled from "styled-components";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Button = styled.button`
  height: 30px;
`;

function Home() {
  const navigate = useNavigate();

  const handleLogOut = () => {
    auth.signOut();
    navigate("/login");
  };

  return (
    <>
      <h1>Home!</h1>
      <Button onClick={handleLogOut}>Log Out</Button>
    </>
  );
}

export default Home;
