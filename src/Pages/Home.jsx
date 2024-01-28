import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Laptop, Lmobile, SLaptop, stablet, tablet } from "../responsive";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { Close, Menu } from "@mui/icons-material";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/context";

const Con = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #dbeafe;
`;

const Container = styled.div`
  width: 100vw;
  height: 100%;
  background: #dbeafe;
  color: black;
`;
const Wrapper = styled.div`
  background: white;
  border-radius: 7px;
  padding: 20px;
  gap: 1rem;
  width: 30%;
  // height: 65%;
  ${Laptop({ width: "50%" })};
  ${tablet({ width: "80%" })};
`;

const Navbar = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  // background:red;
  padding: 30px 50px;
  box-sizing: border-box;
  z-index: 999;
  // border-bottom:1px solid white;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  ${stablet({ padding: "30px 20px" })};
`;
const NavbarLeft = styled.div`
flex:1;
font-size:25px;
font-weight:600;
  ${Lmobile({ fontSize: "20px" })};
`
const NavbarMiddle = styled.div`
  gap: 1rem;
  flex: 3;
  display:flex;
  ${tablet({display:"none"})};
  `;
  const NavbarRight = styled.div`
  flex: 1;
  gap: 1rem;
  ${SLaptop({display:"none"})};
`;

const NavbarTextCon = styled.div``

const NavbarText = styled.p`
  white-space: nowrap;
  font-size: 0.9rem;
  cursor: pointer;
`;

const NavbarMenu = styled.div`
  display: none;
  font-size: 35px;
  cursor: pointer;
  ${Lmobile({ fontSize: "25px" })};
  ${tablet({ display: "flex" })};
`;

const NavbarButton = styled.button`
   background:${props=>props.outline ? " transparent":"#2563eb"};
   border:${props=>props.outline ? " 1px solid #2563eb":"none"};
   color:${props=>props.outline ? " black":"white"};
   padding:10px 20px;
   flex:1;
   border-radius:30px;
   flex-basis:10px;
   max-width:240px;
   cursor:pointer;
   font-weight:700;
`

const ProfilePicCon = styled.div``;
const ProfilePicWrapper = styled.div`
  max-width: 200px;
  max-height: 200px;
  border-radius: 50%;
  min-width: 0;
  min-height: 0;
  // border: 1px solid gray;
  ${tablet({ maxWidth: "100px",maxHeight:"100px" })};
`;
const HeaderCon = styled.div``
const HeaderMainText = styled.h2`
  font-weight: 700;
  color: black;
  text-align: center;
`;
const HeaderSmText = styled.p`
  font-size: 0.99rem;
  text-align: center;
`;
const ResetPasswordCon = styled.div`
  width: 100%;
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 20px;
  // background:red;
  padding: 0 50px;
  box-sizing: border-box;
  // margin:25px 0;
`;
const ResetPassword = styled.div`
cursor:pointer;
`;
const ResetPasswordBdText = styled.span`
margin: 0 2px;
  font-size: 0.99rem;
`;
  const DeleteAccount = styled.div`
  background:red;
cursor:pointer;
color:white;
padding:10px;
border-radius:9px;
${tablet({padding:"6px"})};
`;
const DeleteAccountBdText = styled.span`
  margin: 0 2px;
  font-size: 0.99rem;
`;

const ButtonCon = styled.div`
   gap:10px;
`;
const Button = styled.button`
  background: #2563eb;
  padding: 0.6rem 2.2rem;
  border-radius: 4px;
  color: white;
  border: none;
  outline: none;
  font-size: 15px;
  font-weight: 600;
  cursor:pointer;

  &:hover{
    transform:scale(1.05);
    transition:.4s all;
  }
`;

const ButtonSpan = styled.span`
  font-size:20px;
`

const SideMenuCon = styled.div`
  position: absolute;
  left: 0;
  z-index: 99999;
  width: 0;
  height: 100vh;
  background: rgba(255, 255, 255, 0.9);
  background: whitesmoke;
  top: 0;
  overflow: hidden;
  text-slign: center;
  gap: 1rem;
  
`;

const SideMenuButton = styled.button`
  background: ${(props) => (props.outline ? " transparent" : "#2563eb")};
  border: ${(props) => (props.outline ? " 1px solid #2563eb" : "none")};
  color: ${(props) => (props.outline ? " black" : "white")};
  padding: 10px 20px;
  // flex: 1;
  border-radius: 30px;
  flex-basis: 10px;
  max-width: 240px;
  cursor: pointer;
  font-weight: 700;
  width:90%;
`;



const Home = () => {
  const user = useContext(UserContext)
  const [sideMenuOpen,setSideMenuOpen]=useState(false)

    const SideMenu = () => {
      return (
        <SideMenuCon
          className="flex aic jcc fdc"
          style={{ width: sideMenuOpen ? "80%" : "0" }}
        >
          <NavbarText>
            <Link to="/reset-password" className="link">
              Reset Password
            </Link>
          </NavbarText>
                   <NavbarText>Switch to owner</NavbarText>
          {/* <NavbarText>Delete account</NavbarText> */}
          <NavbarText>Logout</NavbarText>
          {user.accessToken ? (
            <SideMenuButton>LOGOUT</SideMenuButton>
          ) : (
            <>
                <Link to='/register' className='link flex aic jcc fdc w100' style={{width:"100%"}} >
              <SideMenuButton outline>
                  Register
              </SideMenuButton>
                </Link>
                <Link to='/login' className="link flex aic jcc fdc w100" style={{width:"100%"}} >
              <SideMenuButton>
                  Login
              </SideMenuButton>
                </Link>
            </>
          )}
        </SideMenuCon>
      );
    };


  const handleUpdateRole =async ()=>{
    try{
      const res = await axios.post("")
    }catch(err){
     console.log(err)
    }
  }

  return (
    <Con>
      <Navbar className="flex aic jcsb w100">
        <NavbarLeft>
          <p style={{ fontSize: "inherit" }}>Industrial IOT</p>
        </NavbarLeft>
        <NavbarMiddle className="aic jcc">
          <NavbarText>
            <Link to="/reset-password" className="link">
              Reset Password
            </Link>
          </NavbarText>
            <NavbarText>
              <Link to="/users-list" className="link">
                Get all users
              </Link>
            </NavbarText>
          <NavbarText>
            Switch to owner
          </NavbarText>
          <NavbarText>Delete account</NavbarText>
          {/* <NavbarText>Logout</NavbarText> */}
        </NavbarMiddle>
        <NavbarRight className="flex aic jcfe">
          {!user.accessToken ? (
            <>
              <NavbarButton outline>
                <Link to="/register" className="link">
                  REGISTER
                </Link>
              </NavbarButton>
              <NavbarButton>
                <Link to="/login" className="link">
                  Login
                </Link>
              </NavbarButton>
            </>
          ) : (
            <NavbarButton>LOGOUT</NavbarButton>
          )}
        </NavbarRight>
        <NavbarMenu className="flex aic jcc">
          {!sideMenuOpen ? (
            <Menu
              onClick={() => setSideMenuOpen((current) => !current)}
              sx={{ fontSize: "inherit" }}
            />
          ) : (
            <Close
              onClick={() => setSideMenuOpen((current) => !current)}
              sx={{ fontSize: "inherit" }}
            />
          )}
        </NavbarMenu>
      </Navbar>
      <Container className="flex aic jcc fdc">
        <Wrapper className="flex aic jcc fdc bgw">
          <ProfilePicCon className="flex aic jcc w100">
            <ProfilePicWrapper className="flex aic jcc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"

                width="100%"
                height="100%"
                viewBox="0 0 172 172"
                className="w100 h100"
              >
                <defs data-v-871b8aab="">
                  <filter
                    id="Ellipse_3512"
                    x="0"
                    y="0"
                    width="172"
                    height="172"
                    filterUnits="userSpaceOnUse"
                    data-v-871b8aab=""
                  >
                    <feOffset
                      dy="3"
                      input="SourceAlpha"
                      data-v-871b8aab=""
                    ></feOffset>
                    <feGaussianBlur
                      stdDeviation="3"
                      result="blur"
                      data-v-871b8aab=""
                    ></feGaussianBlur>
                    <feFlood flood-opacity="0.161" data-v-871b8aab=""></feFlood>
                    <feComposite
                      operator="in"
                      in2="blur"
                      data-v-871b8aab=""
                    ></feComposite>
                    <feComposite
                      in="SourceGraphic"
                      data-v-871b8aab=""
                    ></feComposite>
                  </filter>
                </defs>
                <g
                  id="Group_58003"
                  data-name="Group 58003"
                  transform="translate(-943 -247)"
                  data-v-871b8aab=""
                  monica-exclude-el="m"
                >
                  <g
                    transform="matrix(1, 0, 0, 1, 943, 247)"
                    filter="url(#Ellipse_3512)"
                    data-v-871b8aab=""
                    monica-exclude-el="m"
                  >
                    <g
                      id="Ellipse_3512-2"
                      data-name="Ellipse 3512"
                      transform="translate(9 6)"
                      fill="#fff"
                      stroke="#707070"
                      stroke-width="0.8"
                      data-v-871b8aab=""
                      monica-exclude-el="m"
                    >
                      <circle
                        cx="77"
                        cy="77"
                        r="77"
                        stroke="none"
                        data-v-871b8aab=""
                      ></circle>
                      <circle
                        cx="77"
                        cy="77"
                        r="76.6"
                        fill="none"
                        data-v-871b8aab=""
                      ></circle>
                    </g>
                  </g>
                  <g
                    id="Group_58002"
                    data-name="Group 58002"
                    transform="translate(-4.755 -50.755)"
                    data-v-871b8aab=""
                    monica-exclude-el="m"
                  >
                    <g
                      id="user_bold"
                      data-name="user/bold"
                      transform="translate(976.755 323.755)"
                      data-v-871b8aab=""
                      monica-exclude-el="m"
                    >
                      <g
                        id="vuesax_bold_user"
                        data-name="vuesax/bold/user"
                        data-v-871b8aab=""
                        monica-exclude-el="m"
                      >
                        <g id="user" data-v-871b8aab="" monica-exclude-el="m">
                          <path
                            id="Vector"
                            d="M0,0H114.749V114.749H0Z"
                            fill="none"
                            opacity="0"
                            data-v-871b8aab=""
                          ></path>
                          <path
                            id="Vector-2"
                            data-name="Vector"
                            d="M47.812,23.906A23.906,23.906,0,1,1,23.906,0,23.906,23.906,0,0,1,47.812,23.906Z"
                            transform="translate(33.468 9.562)"
                            fill="#a8a8a8"
                            data-v-871b8aab=""
                          ></path>
                          <path
                            id="Vector-3"
                            data-name="Vector"
                            d="M43.461,0C19.507,0,0,16.065,0,35.859A2.367,2.367,0,0,0,2.391,38.25H84.531a2.367,2.367,0,0,0,2.391-2.391C86.922,16.065,67.415,0,43.461,0Z"
                            transform="translate(13.913 69.327)"
                            fill="#a8a8a8"
                            data-v-871b8aab=""
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              {/* <ProfilePic src="/noAvatar.png" alt="no Avatar" /> */}
            </ProfilePicWrapper>
          </ProfilePicCon>
          <HeaderCon>
            <HeaderMainText>username</HeaderMainText>
            <HeaderSmText>
              <i>email</i>
            </HeaderSmText>
          </HeaderCon>
          <ButtonCon className="none aic jcc wrap ">
            <Button onClick={handleUpdateRole} className="flex aic jcc">
              <span className="flex aic jcc"> Switch to Owner</span>
              <span className="flex aic jcc"></span>
            </Button>
            <Link className="link" to="/reset-password">
              <Button
                style={{ background: "", gap: "3px" }}
                className="flex aic jcc"
              >
                <span>Reset Password</span>

                <ButtonSpan className=" flex aic jcc">
                  <svg
                    className="w-6 h-6 fill-theme_dark_text"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Reset Password</title>
                    <path d="M13.16,3.17A8.83,8.83,0,1,1,5.76,16.8l1.4-1.11a7.05,7.05,0,1,0-1-4.57H8.6L5.3,14.41,2,11.12H4.38a8.83,8.83,0,0,1,8.78-7.95m2.57,7.21a.81.81,0,0,1,.81.81v3.9a.82.82,0,0,1-.82.82H11a.79.79,0,0,1-.75-.82V11a.79.79,0,0,1,.74-.81V9.46a2.39,2.39,0,0,1,2.71-2.37A2.47,2.47,0,0,1,15.8,9.57v.81m-1.11-.84A1.22,1.22,0,0,0,14,8.4a1.29,1.29,0,0,0-1.86,1.09v.89h2.57Z" />
                  </svg>{" "}
                </ButtonSpan>
              </Button>
            </Link>
          </ButtonCon>
        </Wrapper>
        <ResetPasswordCon className="none aic jcsb">
          <ResetPassword className="flex aic jcc">
            <ResetPasswordBdText className="flex aic jcc">
              Logout
            </ResetPasswordBdText>
            <ResetPasswordBdText className="flex aic jcc">
              <svg
                stroke="rgba(255 228 92)"
                width="1rem"
                height="1rem"
                className="w-5 h-5 fill-theme_secondary rotate-180"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.707,8.707,5.414,11H17a1,1,0,0,1,0,2H5.414l2.293,2.293a1,1,0,1,1-1.414,1.414l-4-4a1,1,0,0,1,0-1.414l4-4A1,1,0,1,1,7.707,8.707ZM21,1H13a1,1,0,0,0,0,2h7V21H13a1,1,0,0,0,0,2h8a1,1,0,0,0,1-1V2A1,1,0,0,0,21,1Z" />
              </svg>
            </ResetPasswordBdText>
          </ResetPassword>
          <DeleteAccount className="flex aic jcc">
            <DeleteAccountBdText className="flex aic jcc">
              Delete Account
            </DeleteAccountBdText>
            <DeleteAccountBdText className="flex aic jcc">
              {/* <svg
                className="w-5 h-5 stroke-theme_dark_text"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                height="1rem"
                width="1rem"
              >
                <title />

                <g id="Complete">
                  <g id="user-remove">
                    <g>
                      <path
                        d="M17,21V19a4,4,0,0,0-4-4H5a4,4,0,0,0-4,4v2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />

                      <circle
                        cx="9"
                        cy="7"
                        fill="none"
                        r="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />

                      <line
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        x1="17"
                        x2="23"
                        y1="11"
                        y2="11"
                      />
                    </g>
                  </g>
                </g>
              </svg> */}
              {/* <DeleteOutline sx={{ fontSize: "inherit" }} /> */}
            </DeleteAccountBdText>
          </DeleteAccount>
        </ResetPasswordCon>
      </Container>
      <SideMenu />
    </Con>
  );


}

export default Home;
