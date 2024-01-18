import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState,useRef,createContext } from "react";
import { tablet } from "../responsive";
import { useContext } from "react";
import { UserContext } from "../context/context";
import { useEffect } from "react";
import { api_endPoint } from "../api_endPoint";
import { EmailAlert, ErrorAlert } from "../alerts";
const Container = styled.div`
  width: 100vw;
  height: 100dvh;
  background: #dbeafe;
  color: #3c3c3c;
`;
const Wrapper = styled.div`
  width: 40%;
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
const RegisterText = styled.span`
  font-weight: 900;
  font-size: 25px;
`;

const InputWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
   {
    ${tablet({ gridTemplateColumns: "1fr" })}
  }
`;
const InputCon = styled.div``;
const Input = styled.input`
  width: 100%;
  padding: 7px;
  border: none;
  outline: none;
  background: transparent;
  border: 1px solid #c5c5c5;
  border-radius: 6px;
  box-sizing: border-box;

  &::placeholder {
    font-size: 12px;
  }
`;
const Inputlabel = styled.label`
  font-size: 13px;
  font-weight: 600;
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
  margin-top: 20px;
`;

const Hr = styled.hr`
  background: #c5c5c5;
  border: none;
  width: 100%;
  height: 1px;
  margin-top: 20px;
`;

const SignUpOptions = styled.div``;
const SignUpOptionsHeader = styled.div`
  padding: 7px 0;
`;
const SignUpOptionsHeaderText = styled.span`
  font-size: 11.6px;
  font-weight: 900;
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
`;
const Links = styled.span`
  font-size: 14px;
  font-weight: 500;
`;
const LinksBl = styled.span`
  color: #2563eb;
  font-weight: 600;
  margin-left: 5px;
`;

const ErrorCon = styled.div`
  margin: 6px 0;
`;
const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  text-transform: capitalize;
`;

const LabelCon = styled.div`
  margin-top: 0.5rem;
`;
const LabelSpan = styled.span`
display:inline-block
// height:2rem;
// width:2rem;
border-radius:9999px;
overflow:hidden;
`;
const LabelImage = styled.img`
  object-fit: cover;
  height: 100px;
  // max-width: 100px;
  width: 100px;
  border-radius: 50%;
  border: 1px solid rgb(209 213 219 /1);
`;
const InputLabel = styled.label`
  margin-left: 1.25rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  // border-width: 1px;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: rgb(55 65 81 / 1);
  background-color: rgb(255 255 255 / 1);
  border: 1px solid rgb(209 213 219 /1);

  &:hover {
    background-color: rgb(249 250 251 / 1);
  }
`;

const InputFile = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

const Register = () => {
  const user = useContext(UserContext)
  const passWordRef = useRef(null);
  const passWordMatchRef = useRef(null);
  const [username, setName] = useState();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [passMatch, setPassMatch] = useState("");
  const navigate = useNavigate();
  const {dispatchUserEvent}=useContext(UserContext);

  useEffect(() => {
    console.log(user)
  }, [dispatchUserEvent]);
  

  const handleSubmitInputChange = (e, type) => {
    e.preventDefault();
    if (type === "name") {
      setName(e.target.value);
      console.log(type, username);
    } else if (type === "email") {
      setEmail(e.target.value);
      console.log(type, email);
    } else {
      setPassword(e.target.value);
      console.log(type, password);
    }
  };

  
  const validatePasswordComfirm = (password, passMatch) => {
    return password === passMatch;
  };
const ValidateEmail = (email)=>{
  //  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
  // return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email)
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 1 || email.length < 1 || username.length < 1) {
      console.log(email, password, username);
      ErrorAlert("Please enter all fields,All fields are required");
    } else if (passMatch.length < 1) {
      ErrorAlert("Please comfirm your password");
    } else if (!validatePasswordComfirm(password, passMatch)) {
      passWordRef.current.value = "";
      passWordMatchRef.current.value = "";
     ErrorAlert(
       "Passwords do not match, make sure both passwords match correctly"
     );
    } 
    else if(!ValidateEmail(email)){
      ErrorAlert('Please enter a valid email address')
    }
    else {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      try {
        const res=  await axios.post(`${api_endPoint}register`, {
          "username":username,
          'email':email,
          "password":password
        });
        console.log(res)

        EmailAlert(`please check your email ${email} to activate your account`);
        dispatchUserEvent("Register", {email:email});


        navigate("/otp-verification");
      } catch (err) {
        console.log(err?.response.data.Error);
        ErrorAlert(err?.response.data.Error)
      }
    }
  };

  return (
    <Container className="flex aic jcc">
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        pauseOnFocusLoss={true}
        draggable
        pauseOnHover
        theme="light"
        rtl={false}
        fontSize="2px"
      />
      <Wrapper className="flex aic jcc fdc">
        <RegisterCon>
          <RegisterTextCon className="flex fdc aifs jcfs">
            <RegisterText>Registration</RegisterText>
            <span
              style={{ width: "22px", height: "3px", background: "blue" }}
            ></span>
          </RegisterTextCon>
          <InputWrapper>
            <InputCon>
              <Inputlabel Htmlfor="name">Enter your username</Inputlabel>
              <Input
                id="username"
                placeholder="enter your username"
                onChange={(e) => handleSubmitInputChange(e, "name")}
              />
            </InputCon>
            <InputCon>
              <Inputlabel Htmlfor="name">Enter your email address</Inputlabel>
              <Input
                id="email"
                type="email"
                placeholder="youremail@example.com"
                onChange={(e) => handleSubmitInputChange(e, "email")}
                required
              />
            </InputCon>
            <InputCon>
              <Inputlabel Htmlfor="password">Create password</Inputlabel>
              <Input
                ref={passWordRef}
                id="password"
                value={password}
                placeholder="create password"
                onChange={(e) => handleSubmitInputChange(e, "password")}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="must contain at least one number and one uppercase letter,and at least 8 or more characters"
              />
            </InputCon>
            <InputCon>
              <Inputlabel Htmlfor="password again">Comfirm password</Inputlabel>
              <Input
                id="password again"
                placeholder="comfirm password"
                value={passMatch}
                ref={passWordMatchRef}
                onChange={(e) => setPassMatch(e.target.value)}
              />
            </InputCon>
          </InputWrapper>

          <SubmitButton type="submit" onClick={handleSubmit}>
            Account Register
          </SubmitButton>
          <Hr />
        </RegisterCon>
        <Redirect>
          <Links className="flex aic jcc">
            Already have an account?
            <LinksBl>
              <Link to="/login" className="link">
                Login
              </Link>
            </LinksBl>
          </Links>
        </Redirect>
      </Wrapper>
    </Container>
  );
};

export default Register;
