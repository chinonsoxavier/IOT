import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import {
  RemoveRedEye,
  VisibilityOff,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
// import { tablet } from "../responsive";
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { tablet } from "../responsive";
const Container = styled.div`
  width: 100vw;
  height: 100dvh;
  background: #dbeafe;
  color: #3c3c3c;
`;
const Wrapper = styled.div`
  width: 30%;
  // height: 65%;
  
  ${tablet({ width: "80%" })};
`;
const RegisterCon = styled.form`
  width: 100%;
  height: 100%;
  background: white;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const RegisterTextCon = styled.div`
  padding-bottom: 7px;
`;
const RegisterText = styled.p`
  font-weight: 600;
  font-size: 25px;
  // color:#4d5572;
  // color:#3c3c3c;
`;

const InputWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  background: white;
`;
const InputCon = styled.div`
  background: white;
`;
const Input = styled.input`
  background: white;
  width: 100%;
  // height: 100%;
  padding: 7px;
  border: none;
  outline: none;
  border: 1px solid #eee;
  border-radius: 6px;
  box-sizing: border-box;

  &:focus {
    background: #eee;
  }

  &::placeholder {
    font-size: 12px;
  }
`;

const Inputlabel = styled.label`
  font-size: 15px;
  font-weight: 600;
  background: white !important;
  margin: 7px 0;
`;
const InputContainer = styled.div`
  // border: 1px solid #eee;
  flex: 1;
  // padding: 0 30px;
  // height: 60px;
  color: grey;
  position: relative;
  border-radius:6px;
  // margin: 20px 0;
`;

const SubmitButton = styled.button`
  background: #1e5eeb;
  width: 100%;
  padding: 10px 0;
  border: none;
  color: white;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  margin: 25px 0;

  &:disabled {
    cursor: not-allowed;
  }
`;

const Hr = styled.hr`
  background: #c5c5c5;
  border: none;
  width: 100%;
  height: 1px;
  margin-top: 10px;
`;

const SignUpOptions = styled.div``;
const SignUpOptionsHeader = styled.div`
  padding: 7px 0;
`;
const SignUpOptionsHeaderText = styled.span`
  font-size: 11.6px;
  font-weight: 600;
  color: grey;
`;
const SignUpOptionsButtonCon = styled.div`
  gap: 20px;
`;
const SignUpOptionsButton = styled.button`
  background: #eee;
  border-radius: 8px;
  padding: 6px 30px;
  font-size: 12px;
  font-weight: 600;
  border: none;
`;
const SignUpOptionsIcon = styled.div`
  margin-right: 7px;
`;

const Redirect = styled.div`
  padding: 8px 0;
  width:100%;
`;
const Links = styled.span`
  font-size: 14px;
  font-weight: 600;
`;
const LinksBl = styled.span`
  color: #2563eb;
  font-weight: 600;
  margin-left: 5px;
`;

const ErrorMessage = styled.div`
  background: #e04e4e;
`;
const ErrorMessageText = styled.p`
  color: white;
  font-weight: 500;
  text-align: center;
`;
const MinPassErrorCon = styled.div`
  background: #f4ddde;
`;
const MinPassErrorText = styled.p`
  color: #bc8d8a;
  font-weight: 300;
  text-align: center;
  font-size: 13px;
`;

const Login = () => {
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState();
  const [error, setError] = useState();
  const [minPass, setMinPass] = useState(0);
  const [allowLogin, setAllowLogin] = useState(0);
  const [passwordError, setPasswordError] = useState(null);
  const PasswordInputRef = useRef(null);
  const EmailInputRef = useRef(null);
  const [passVisible, setPassVisible] = useState(false);
  // const passVisible = []
  // const [passVisible,setPassvisible]=useState=(false)

  var userSession = {};
  const user = { email: Email, password: Password };

  
  const handleSubmit = (e, type) => {
    e.preventDefault();
    if (type === "Email") {
      setEmail(e.target.value);
      setAllowLogin((prevValue) => prevValue + 1);
      console.log(type, Email);
    } else {
      setPassword(e.target.value);
      setMinPass((prev) => (prev += 1));
      setAllowLogin((prevValue) => prevValue + 1);

      console.log(type, Password);
    }
    // alert
  };

  const ErrorAlert = (message) =>
    toast.error(message, {
      bodyClassName: "ToastifyLoginError",
      position: "bottom-center",
      fontSize: "2px",
      autoClose: 5000,
      hideProgressBar: false,
      newestOnTop: true,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
      theme: "light",
      rtl: false,
    });
  // ErrorAlert();
  const ToggleVisibility = () => {
    const passwordDisplayType = PasswordInputRef.current.type;
    if (passwordDisplayType === "password") {
      PasswordInputRef.current.type = "test";
      setPassVisible(true);
    } else {
      PasswordInputRef.current.type = "password";
      setPassVisible(false);
    }
    // const type =  passwordDisplayType === "password"? passwordDisplayType === "text": passwordDisplayType==='password';
    // return type;
  };
  const handleClick = async (e) => {
    try {
      // const User = await fetch.post(apiRoute + "/auth/login", user);

    } catch (err) {
      if (error) {
        PasswordInputRef.current.value = "";
      } else {
        PasswordInputRef.current.value = "";
      }
      ErrorAlert(
        "We could`nt find an account matching the email and password you entered.Please check your email and password and try again."
      );
      console.log(err);
        ErrorAlert(err.response.data.Error);
      console.log(error);
    }
  };

  return (
    <Container className="flex aic jcc">
      <Wrapper className="flex aic jcc fdc">
        <RegisterCon className="flex fdc jcse">
          {/* <ErrorMessage className="flex aic jcc">
            <ErrorMessageText>
              We could`nt find an account matching the email and password you
              entered.Please check your email and password and try again.
            </ErrorMessageText>
          </ErrorMessage> */}
          <RegisterTextCon className="flex fdc aifs jcfs">
            <RegisterText>Login</RegisterText>
            <span
              style={{ width: "22px", height: "3px", background: "blue" }}
            ></span>
          </RegisterTextCon>
          <InputWrapper>
            <InputCon className="">
              <Inputlabel Htmlfor="name">Email Address</Inputlabel>
              <Input
                ref={EmailInputRef}
                className=""
                id="Address"
                placeholder="Email Address"
                onChange={(e) => handleSubmit(e, "Email")}
              />
            </InputCon>
            <InputCon>
              <Inputlabel Htmlfor="password">Password</Inputlabel>
              <InputContainer className="flex aic jcc">
                {/* <Lock /> */}
                <Input
                  ref={PasswordInputRef}
                  className=""
                  style={{
                    border: error && "1px solid red",
                  }}
                  error={error}
                  id="password"
                  type="password"
                  placeholder="password"
                  onChange={(e) => handleSubmit(e, "password")}
                />
                {!passVisible ? (
                  <VisibilityOff
                    sx={{
                      cursor: "pointer",
                      position: "absolute",
                      right: "10px",
                      fontSize: "1.2rem",
                    }}
                    onClick={ToggleVisibility}
                    id="visiblePassword_Icon"
                  />
                ) : (
                  <RemoveRedEye
                    sx={{
                      cursor: "pointer",
                      position: "absolute",
                      right: "10px",
                      fontSize: "1.2rem",
                    }}
                    onClick={ToggleVisibility}
                    id="visiblePassword_Icon"
                  />
                )}
              </InputContainer>
              {passwordError && (
                <MinPassErrorCon>
                  <MinPassErrorText>{passwordError}</MinPassErrorText>
                </MinPassErrorCon>
              )}
            </InputCon>
          </InputWrapper>
          <SubmitButton
            onClick={handleClick}
            type="submit"
            disabled={Password === ""}
          >
            Log in
          </SubmitButton>
        </RegisterCon>
        <Redirect className="flex aic jcsb wrap w100 ">
          <Links
            className="flex aic jcc flex1"
            style={{ whiteSpace: "nowrap" }}
          >
            Don`t have an account?
            <LinksBl>
              <Link to="/register" className="link">
                Register
              </Link>
            </LinksBl>
          </Links>
          <Links className="flex aic jcc flex1" style={{ textAlign: "center" }}>
            <LinksBl>
              <Link
                style={{
                  color: "red",
                  textDecoration: "underline",
                  whiteSpace: "nowrap",
                }}
                to="/reset-password"
                className="link"
              >
                Forgot password?
              </Link>
            </LinksBl>
          </Links>
        </Redirect>
      </Wrapper>
    </Container>
  );
};

export default Login;
