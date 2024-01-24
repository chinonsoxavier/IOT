import axios from "axios";
import styled from "styled-components";
import { SLaptop, stablet, tablet } from "../responsive";
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #dbeafe;
  color: #3c3c3c;
`;
const Wrapper = styled.div`
  max-width: 30%;
  ${SLaptop({ maxWidth: "50%" })};
  ${stablet({ maxWidth: "70%" })};
  // width:100%;
  gap: 1rem;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  border-radius: 0.7rem;
  background: white;
`;
const Header = styled.div``;
const HeaderImgCon = styled.div`
width:100%:
height:100%;
`;
const HeaderImg = styled.img`
  font-size: 0.8rem;
  width: 30%;
  height: 30%;
  object-fit: contain;
`;
const HeaderBgText = styled.p`
  font-size: 2.2rem;
  font-weight: 500;
  text-align: center;
  // white-space:nowrap;
  ${tablet({ fontSize: "1.7rem", lineHeight: "30px" })};
`;
const HeaderSmText = styled.p`
  text-align: center;
  font-weight: 100;
  font-size: 0.85rem;
  opacity: 0.8;

  ${tablet({ fontSize: ".7rem" })};
`;

const InputCon = styled.div`
  width: 100%;
`;
const InputWrapper = styled.div`
  width: 100%;
  border: 1px solid grey;
  height: 100%;
  background: transparent;
  margin: 2px 0;
`;
const InputLabel = styled.label``;
const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  color: gray;
  background: transparent;
  padding: 8px 7px;
`;

const ButtonCon = styled.div`
  width: 100%;
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
  font-weight: 500;
  white-space: nowrap;
`;

const ResetPasswordOtp = () => {
      const [email, setEmail] = useState();
    const [token,setToken]=useState()
    const [newPass,setNewPass]=useState()

    const SendRestOutToken = async () => {
      try {
        await axios.put(
          "resetouttoken",
          {},
          {
            headers: {
              token: token,
              newPass: newPass,
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
    };

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
            Type in the password reset token that has been sent to your email
            address.
          </HeaderSmText>
        </Header>
        <InputCon>
          <InputLabel htmlFor="resetPassword">Token</InputLabel>
          <InputWrapper>
            <Input
              placeholder="Enter your reset password token"
              type="text"
              id="resetPassword token"
              className=""
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
          </InputWrapper>
        </InputCon>
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
          <Button onClick={SendRestOutToken}>Reset Password</Button>
        </ButtonCon>
      </Wrapper>
    </Container>
  );
};

export default ResetPasswordOtp;
