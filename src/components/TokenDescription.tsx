import styled from "styled-components";

type Props = {};

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Logo = styled.img`
  width: 41px;
  height: 41px;
  background-color: #d9d9d9;
  border-radius: 50%;
`;

const Title = styled.p``;

const TokenDescription = (props: Props) => {
  return (
    <Wrapper>
      <Logo />
      <Title>MATIC</Title>
    </Wrapper>
  );
};

export default TokenDescription;
