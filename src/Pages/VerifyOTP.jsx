import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { tablet } from "../responsive";
import styled from "styled-components";
import OTPInput from "react-otp-input";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../context/context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  width: 100vw;
  height: 100dvh;
  background: #dbeafe;
  color: #3c3c3c;
`;
const Wrapper = styled.div`
  background: white;
  border-radius: 7px;
  padding: 20px;
  gap: 1rem;
  //   width: 30%;
  // height: 65%;
  ${tablet({ width: "80%" })};
`;

const Header = styled.div``;
const HeaderMainText = styled.h2`
  font-weight: 700;
  text-align: center;
`;
const HeaderSmText = styled.p`
  font-size: 0.79rem;
  text-align: center;
`;
const HeaderBdText = styled.h4``;

const ResetEmail = styled.div`
  width: 100%;
  text-align: center;
`;
const ResetEmailBgText = styled.h4``;
const ResetEmailBdText = styled.span`
  margin: 0 2px;
  font-size: 0.91rem;
`;

const ChangeEmailCon = styled.div`
  width: 60%;
`;
const ChangeEmailInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid grey;
  // border-radius: 5px;
  padding: 5px 3px;
  transition: 0.5s all;

  &:focus {
    border-bottom: 1.8px solid #2563eb;
  }
`;
const ChangeEmailButton = styled.div``;

const OtpPinsInput = styled.input`
  outline: none;
  height: 100%;
  width: 100%;
  border: none;
  border-bottom: 2px solid grey;
  margin: 0 10px;
  font-size: 30px;
`;

const ButtonCon = styled.div``;
const Button = styled.button`
  background: #2563eb;
  padding: 0.6rem 2.2rem;
  border-radius: 4px;
  color: white;
  border: none;
  outline: none;
  font-size: 15px;
  font-weight: 600;
`;

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const [changeEmail, setChangeEMail] = useState(false);
  const user = useContext(UserContext);
  const dispatchUserEvent = useContext(UserContext);
  const [newEmail, setNewEmail] = useState(user.user.email);
  console.log(user);
  const navigate = useNavigate();

  useEffect(() => {
    // sessionStorage.setItem("email", user.user.email);

    // dispatchUserEvent("Register", {
    //   email: sessionStorage.getItem("email"),
    // });
    // handle
    handleEmailUpdate();

    console.log(user);
  }, [dispatchUserEvent]);

  // const [test,setTest]=useContext(A)
  const handleSubmit = async () => {
    try {
      const res = await axios.get(
        "verifyemail",
        {
          email: user.user.email,
        }
      );
      // sessionStorage.setItem("email", newEmail);
      dispatchUserEvent("Register", { email: user.user.email });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    // sessionStorage.setItem('user',"username")
  };

  const UpdateEmail = async (ty) => {
    // sessionStorage.removeItem("email");
    setChangeEMail(false);
   try {
     console.log(newEmail);
     const res = await axios.put(
       "verifyemail",
       {
         email: user.user.email,
         newEmail: newEmail,
       }
     );
   } catch (err) {
     console.log(err);
   } 
   handleEmailUpdate();
  };
  
  
  const  handleEmailUpdate =async ()=>{
    try {
      const res = await axios.post("verifyemail",{
       otp:otp,
       email:user.user.email,
      });
      navigate('/')
    } catch (error) {
      console.log(error)
    }
    // sessionStorage.setItem("email", newEmail);
    dispatchUserEvent("Register", { email: newEmail });
    // setNewEmail();
}

  return (
    <Container className="flex aic jcc">
      <Wrapper className="flex aic jcc fdc">
        <Header className="w100 flex aic jcc fdc">
          {!changeEmail ? (
            <>
              <HeaderMainText>
                Verify your Email
                {/* Please enter the One-Time-Password to verify your account */}
              </HeaderMainText>
              <HeaderSmText>
                Type in the 6 digit OTP code that was sent to your Email.
                {/* A one time password has been sent to email */}
              </HeaderSmText>
            </>
          ) : (
            <>
              <HeaderMainText>
                Enter your email-address to continue
              </HeaderMainText>
              <HeaderSmText>
                We care about your privacy,like our own
              </HeaderSmText>
            </>
          )}
        </Header>
        {!changeEmail ? (
          <>
            <ResetEmail className=" aifs jcfs fdc w100 ">
              <ResetEmailBgText>{user.user.email}</ResetEmailBgText>
              <ResetEmailBdText>Wrong Email?</ResetEmailBdText>
              <ResetEmailBdText
                onClick={() => setChangeEMail(true)}
                style={{ color: "#2563eb", fontWeight: 600, cursor: "pointer" }}
              >
                Change
              </ResetEmailBdText>
            </ResetEmail>

            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span> </span>}
              renderInput={(props) => <OtpPinsInput {...props} />}
            />
          </>
        ) : (
          <ChangeEmailCon className="flex aic jcc">
            <ChangeEmailInput
              placeholder={`Update your email`}
              type="email"
              defaultValue={user.user.email}
              onChange={(e) => setNewEmail(e.target.value)}
            />
            {/* <ChangeEmailButton>Change Email</ChangeEmailButton> */}
          </ChangeEmailCon>
        )}
        <ButtonCon className="flex aic jcc">
          {changeEmail ? (
            <Button className="cp" onClick={UpdateEmail}>
              Continue
            </Button>
          ) : (
            <div className="flex aic jcc fdc" style={{ gap: "10px" }}>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  lineHeight: "18px",
                }}
              >
                Did`nt recieve otp?
                <br />
                <b style={{color:"#2563eb",cursor:"pointer"}} >Resend</b>
              </p>
              <Button className="cp" type="submit" onClick={handleEmailUpdate}>
                VERIFY
              </Button>
            </div>
          )}
        </ButtonCon>
        {/* <div>
          <div>
            <p>Didn`t recieve otp? send again</p>
            <p>change email</p>
          </div>
        </div> */}
      </Wrapper>
    </Container>
  );
};

export default VerifyOTP;
