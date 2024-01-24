import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"
import { UserContext } from "../context/context";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  RemoveRedEye, VisibilityOff } from "@mui/icons-material";
import { SLaptop, stablet, tablet } from "../responsive";
import { useRef } from "react";
import axios from "axios";

const Container = styled.div`
  width: 100dvw;
  height: 100vh;
  background: #dbeafe;
  color: #3c3c3c;
`;
const Wrapper = styled.div`
max-width:30%;
${SLaptop({maxWidth:"50%"})};
${stablet({maxWidth:"70%"})};
// width:100%;
gap:1rem;
box-shadow:1px 1px 10px rgba(0,0,0,0.10);
padding:30px;
border-radius:.7rem;
background:white;
`
const Header = styled.div``
const HeaderImgCon = styled.div`
width:100%:
height:100%;
`
const HeaderImg = styled.img`
font-size:.8rem;
width:30%;
height:30%;
object-fit:contain;
`;
const HeaderBgText = styled.p`
  font-size: 2.2rem;
  font-weight: 500;
  text-align: center;
  // white-space:nowrap;
  ${tablet({fontSize:"1.7rem",lineHeight:"30px"})};
`;
const HeaderSmText = styled.p`
text-align:center;
font-weight:100;
font-size:.85rem;
opacity:.8;

  ${tablet({fontSize:".7rem"})};
`;

const InputCon = styled.div`
width:100%;
`
const InputWrapper = styled.div`
  width: 100%;
  border: 1px solid grey;
  height: 100%;
  background: transparent;
  margin: 2px 0;
`;
const InputLabel = styled.label`
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  color: gray;
  background: transparent;
  padding:8px 7px;
`;

const ButtonCon = styled.div`
   width:100%;
`;
const Button = styled.button`
  cursor: pointer;
  background: ${(props) =>
    props.type !== "outline" ? "#297f85" : "transparent"};
  padding: ${(props) => (props.type !== "outline" ? "10px 35px" : "10px 8px")};
  color: ${(props) => (props.type !== "outline" ? "white" : "#297f85")};
  border: none;
  width: 100%;
  box-sizing: border-box;
  font-weight:500;
  white-space: nowrap;
`;


const ResetPassTextCon = styled.div`
  margin: 10px 0;
  ${tablet({ margin: "5px 0" })};
`;
const ResetPassText = styled.p`
  // text-align:center;
  font-weight: 700;
  font-size: 2rem;
  ${tablet({ fontSize: "1.2rem" })};
`;
const ResetPassWrapper = styled.div`
  width: 100%;
`;
const ResetPassCon = styled.div`
  display: flex;
  align-items: Center;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
  width: 100%;
`;
const Back = styled.div``;
const BackBtn = styled.button`
  color: white;
  border-radius: 4px;
  padding: 8px 0;
  width: 170px;
  margin: 13px 0;
  cursor: pointer;
  background: #2563eb;
  border: none;
  white-space:nowrap;
  font-size:.95rem;
`;
const Input2Con = styled.div`
  // background: white;
  width: 100%;
`;
const Input2 = styled.input`
  background: transparent;
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
  margin: 7px 0;
`;
const InputContainer = styled.div`
  border: 1px solid #eee;
  flex: 1;
  // padding: 0 30px;
  // height: 60px;
  color: grey;
  position: relative;
  // margin: 20px 0;
`;


function ResetPassword() {

  const user = useContext(UserContext);
  const {dispatchUserEvent} = useContext(UserContext);
  const [newPassword, setNewPassword] = useState();
  const [oldPassword, setOldPassword] = useState();
  const [email,setEmail]=useState()
  const navigate = useNavigate();
  // console.log(user);
  const PasswordInputRef = useRef([]);
  const [resetPass, setResetPass] = useState(true);
  const [passVisible, setPassVisible] = useState(false);
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
      const SucessAlert = (message) =>
        toast.info(message, {
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
  const ToggleVisibility = (currentInput) => {
    const passwordDisplayType = PasswordInputRef.current[currentInput].type;
    if (passwordDisplayType === "password") {
      PasswordInputRef.current[currentInput].type = "text";
      setPassVisible(currentInput);
    } else {
      PasswordInputRef.current[currentInput].type = "password";
      setPassVisible(null);
    }
  };

  const handleResetPassword =async () => {
    try{
      const res = await axios.put(
        "resetpass",
        {
          oldpass: oldPassword,
          newpass: newPassword,
        }
      );
SucessAlert(res.response.data.sucess);

    }catch(err){
      console.log(err);
        ErrorAlert(err.response.data.Error);
      
    }
}

const sendResetPassOtp = async ()=>{
  try {
     await axios.get(
       "resetpass",
       {},
       {
         headers: {
           email: email,
         },
       }
     );
     navigate('/verify-reset-password-token')
  } catch (error) {
    console.log(error)
            ErrorAlert(error.response.data.Error);

  }
}

const Logout = ()=>{
  dispatchUserEvent("LOGOUT");
}



  return (
    <Container className="flex aic jcc">
      <Wrapper className="flex aic jcc fdc">
        <Header>
          <HeaderImgCon className="flex aic jcc">
            <HeaderImg
              src="/resetpassword_vector.png"
              alt="resetpassword_vector"
            />
          </HeaderImgCon>
          <HeaderBgText>Reset Your Password</HeaderBgText>
          <HeaderSmText>
            Input your account email and we`ll send an OTP to your Email,To
            reset your password!.
          </HeaderSmText>
        </Header>
        {!user.user.accessToken ? (
          <>
            <InputCon>
              <InputLabel htmlFor="resetPassword">Email</InputLabel>
              <InputWrapper>
                <Input
                  placeholder="Enter your account email"
                  type="email"
                  id="resetPassword email"
                  className=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputWrapper>
            </InputCon>
            <ButtonCon className="flex aic jcc">
              <Button onClick={sendResetPassOtp}>Send Otp</Button>
              <Link className="link" to="/login">
                <Button type="outline" style={{ textDecoration: "underline" }}>
                  Return to login
                </Button>
              </Link>
            </ButtonCon>
          </>
        ) : (
          <ResetPassWrapper>
            <ResetPassCon>
              {/* <ResetPassInputCon>
                <ResetPassLabelCon id="resetPassOld">
                  Enter your old password
                </ResetPassLabelCon>
                <ResetPassInput id="resetPassOld" className="" />
              </ResetPassInputCon>
              <ResetPassInputCon>
                <ResetPassLabelCon id="resetPassOld">
                  Enter your old password
                </ResetPassLabelCon>
                <ResetPassInput id="resetPassOld" className="" />
              </ResetPassInputCon> */}
              <Input2Con>
                <Inputlabel Htmlfor="password">
                  {" "}
                  Enter your old password
                </Inputlabel>
                <InputContainer className="flex aic jcc">
                  {/* <Lock /> */}
                  <Input2
                    ref={(el) => PasswordInputRef.current.push(el)}
                    className=""
                    id="password"
                    type="password"
                    placeholder="Enter your old password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                  {passVisible === 0 ? (
                    <RemoveRedEye
                      sx={{
                        cursor: "pointer",
                        position: "absolute",
                        right: "10px",
                        fontSize: ".8rem",
                      }}
                      onClick={() => ToggleVisibility(0)}
                      id="visiblePassword_Icon"
                    />
                  ) : (
                    <VisibilityOff
                      sx={{
                        cursor: "pointer",
                        position: "absolute",
                        right: "10px",
                        fontSize: "1.2rem",
                      }}
                      onClick={() => ToggleVisibility(0)}
                      id="visiblePassword_Icon"
                    />
                  )}
                </InputContainer>
              </Input2Con>
              <Input2Con>
                <Inputlabel Htmlfor="password">
                  {" "}
                  Enter your new password
                </Inputlabel>
                <InputContainer className="flex aic jcc">
                  {/* <Lock /> */}
                  <Input2
                    ref={(el) => PasswordInputRef.current.push(el)}
                    className=""
                    id="password"
                    type="password"
                    value={newPassword}
                    placeholder="Enter your new password"
                    onChange={(e) => setNewPassword(e.currentTarget.value)}
                  />
                  {passVisible === 1 ? (
                    <RemoveRedEye
                      sx={{
                        cursor: "pointer",
                        position: "absolute",
                        right: "10px",
                        fontSize: "1.2rem",
                      }}
                      onClick={() => ToggleVisibility(1)}
                      id="visiblePassword_Icon"
                    />
                  ) : (
                    <VisibilityOff
                      sx={{
                        cursor: "pointer",
                        position: "absolute",
                        right: "10px",
                        fontSize: "1.2rem",
                      }}
                      onClick={() => ToggleVisibility(1)}
                      id="visiblePassword_Icon"
                    />
                  )}
                </InputContainer>
              </Input2Con>
            </ResetPassCon>
            <Back className="flex aic jcse fdc w100">
              <BackBtn
                onClick={handleResetPassword}
                className="button_transition flex aic jcc"
              >
                Reset Password
              </BackBtn>
              <div>
                <p
                  style={{
                    color: "red",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={Logout}
                >
                  forgot password?
                </p>
              </div>
            </Back>
          </ResetPassWrapper>
        )}
      </Wrapper>
    </Container>
  );
}

export default ResetPassword