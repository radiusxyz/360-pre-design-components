import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-radius: 100px;
  background-color: #d9d9d9;
  padding: 15px 17px 14px 20px;
  border: none;
  margin-bottom: 21px;
`;

export const Input = styled.input`
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

export const Search = styled.div`
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.3s all;
  }
`;
