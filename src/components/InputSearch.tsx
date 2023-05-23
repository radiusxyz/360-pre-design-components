import magnifier from "../assets/images/magnifier.png";
import styled from "styled-components";
import { useEffect, useState } from "react";

type Props = {};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-radius: 100px;
  background-color: #d9d9d9;
  padding: 15px 17px 14px 20px;
  border: none;
  margin-bottom: 21px;
`;

const Input = styled.input`
  display: block;
  border: none;
  background-color: transparent;
  width: 100%;
  height: 100%;
  outline: none;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 134.84%;
`;

const Search = styled.div`
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.3s all;
  }
`;

const InputSearch: React.FC = (props: Props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(e.target.value);
  };

  useEffect(() => {
    console.log(enteredValue);
  }, [enteredValue]);

  return (
    <Wrapper>
      <Input
        onChange={handleInput}
        placeholder="Which token would you like to swap?"
      />
      <Search>
        <img src={magnifier} alt="magnifier" />
      </Search>
    </Wrapper>
  );
};

export default InputSearch;
