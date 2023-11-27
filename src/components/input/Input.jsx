import { styled } from "styled-components";
import { ReactComponent as UserIdIcon } from "../../assets/img/icon-userID.svg";
import { ReactComponent as UserPwIcon } from "../../assets/img/icon-userPwIcon.svg";
import { ReactComponent as UserEmailIcon } from "../../assets/img/icon-userEmail.svg";

function Input(props) {
  return (
    <>
      <InputWrapper width={props.width}>
        <StlyedLabel htmlFor={props.id} {...props}>
          {iconSelecter(props.label)}
          {props.label}
        </StlyedLabel>
        <StyledInput {...props} />
        {props.isValid ? null : <ErrorMessage>{props.errMsg}</ErrorMessage>}
      </InputWrapper>
    </>
  );
}

const iconSelecter = (iconName) => {
  switch (iconName) {
    case "아이디":
      return (
        <UserIdIcon
          style={{ marginRight: "10px", verticalAlign: "text-top" }}
        />
      );
    case "비밀번호":
      return (
        <UserPwIcon
          style={{ marginRight: "10px", verticalAlign: "text-top" }}
        />
      );
    case "비밀번호 확인":
      return (
        <UserPwIcon
          style={{ marginRight: "10px", verticalAlign: "text-top" }}
        />
      );
    case "이메일":
      return (
        <UserEmailIcon
          style={{ marginRight: "10px", verticalAlign: "text-top" }}
        />
      );
    default:
      return null;
  }
};

const InputWrapper = styled.div`
  width: ${(props) => props.width || "288px"};
  min-height: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const StlyedLabel = styled.label`
  font-size: 15px;
  color: #878787;
  height: 15px;
  width: 100%;
`;

const StyledInput = styled.input`
  width: ${(props) => props.width || "288px"};
  height: 40px;
  border: none;
  border-bottom: 2px solid #878787;
  font-size: 13px;
  &:focus {
    outline: none;
    border-bottom-color: var(--main-color);
  }
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: left;
`;

export default Input;
