import styled from "styled-components";
import PostTweetForm from "../components/post-tweet-fom";
import TimeLine from "../components/timeline";

const Wrapper = styled.div`
  display: grid;
  gap: 50px;
  grid-template-rows: 1fr 5fr;
`;

function Home() {
  return (
    <Wrapper>
      <PostTweetForm />
      <TimeLine />
    </Wrapper>
  );
}

export default Home;
