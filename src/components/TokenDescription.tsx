import styled from "styled-components";

type Props = {
  title: string;
};

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

const TokenDescription: React.FC<Props> = (props: Props) => {
  return (
    <Wrapper>
      <Logo />
      <Title>{props.title}</Title>
    </Wrapper>
  );
};

export default TokenDescription;
