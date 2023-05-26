import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 150px;
  width: 100%;
`;

const PageNum = styled.span`
  display: inline-block;
  color: #848484;
  font-weight: 400;
  line-height: 21.48px;
  font-size: 18px;
  &:hover {
    cursor: pointer;
    font-size: 25px;
    transition: all 0.1s ease;
    text-decoration: underline;
    color: black;
  }
`;

type Props = {};

const numOfPages = 10;

const getPageNums = () => {};

const Pagination = (props: Props) => {
  return (
    <Wrapper>
      <PageNum>1</PageNum>
      <PageNum>2</PageNum>
      <PageNum>3</PageNum>
      <PageNum>4</PageNum>
    </Wrapper>
  );
};

export default Pagination;
