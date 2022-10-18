import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../assets/styles/palette";
import Button from "../../components/common/Button";

/*
 *회원가입 또는 로그인 폼을 보여줌
 */
const AuthFormBlock = styled.div`
  h3 {
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  width: 100%;
  &:focus {
    color: ${palette.cyan[7]};
    border-bottom: 1px solid ${palette.cyan[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;
// 폼 하단에 로그인 혹은 회원가입 링크를 보여줌
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const AuthForm = () => {
  return (
    <AuthFormBlock>
      <h3>로그인</h3>
      <form>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
        />
        <Button>로그인</Button>
      </form>
      <Footer>
        <Link>회원가입</Link>
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
