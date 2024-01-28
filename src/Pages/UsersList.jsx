import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Laptop, Lmobile, SLaptop, stablet, tablet } from "../responsive";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { Close, FirstPage, KeyboardArrowLeft, KeyboardArrowRight, LastPage, Menu } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/context";
import { MenuItem, Select } from "@mui/material";

const Con = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: #dbeafe;
  overflow:hidden;
`;

const Container = styled.div`
  width: 100%;
    height: 85vh;
    // height: 10%;
    // background: red;
  color: black;
//   overflow-y: scroll;
`;
  const Wrapper = styled.div`
    //   background: white;
    border-radius: 7px;
    padding: 20px;
    padding: 10px 50px;
    ${stablet({padding:"10px 20px"})};
    gap: 1rem;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position:relative;
  `;
  
  const NavbarCon = styled.div`
    background: #dbeafe;
    height:12vh;
    position: sticky;
    top: 0;
    z-index: 999;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  `;
  const Navbar = styled.div`
    //   height:12dvh;
    width: 100%;
    // background:red;
    padding: 30px 50px;
    ${stablet({ padding: "30px 20px" })};
    box-sizing: border-box;
    // border-bottom:1px solid white;
  `;
const NavbarLeft = styled.div`
  flex: 1;
  font-size: 25px;
  font-weight: 600;
  ${Lmobile({ fontSize: "20px" })};
`;
const NavbarMiddle = styled.div`
  gap: 1rem;
  flex: 3;
  display: flex;
  ${tablet({ display: "none" })};
`;
const NavbarRight = styled.div`
  flex: 1;
  gap: 1rem;
  ${SLaptop({ display: "none" })};
`;


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
  background: ${(props) => (props.outline ? " transparent" : "#2563eb")};
  border: ${(props) => (props.outline ? " 1px solid #2563eb" : "none")};
  color: ${(props) => (props.outline ? " black" : "white")};
  padding: 10px 20px;
  flex: 1;
  border-radius: 30px;
  flex-basis: 10px;
  max-width: 240px;
  cursor: pointer;
  font-weight: 700;
`;

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
  width: 90%;
`;

const TableCon = styled.div`
  width: 100%;
  overflow: hidden;
  // height: 70vh;
  height: 100%;
  background:green;
  ${stablet({ display: "none",maxHeight:"100%",height:"100%" })};
`;
const TableHeaderWrapper = styled.div`
  background: #dbeafe;
  background:red;
`;
const TableHeaderCon = styled.div`
  border: 1px solid #eee;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 2fr;
  background:#eee;
  height:35px;
`;
const TableHeader = styled.div`
   border-left:1px solid gray;
   padding:5px 10px;
   box-sizing:border-box;
   height:100%;
`
const TableHeaderText = styled.p`
//   color:#2563eb;
  font-weight:700;
  ${tablet({ fontSize: "14px" })};
`;
const Table = styled.div`
  height:94%;
  overflow-y:scroll;
//   overflow-x:auto;
//   height:100%;
`;
const TableRows = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 2fr 2fr 2fr 2fr;
  border: 1px solid #eee;
  // height:100%;
`;

const TableColumns = styled.div`
  // background:red;
  border-right: 1px solid #eee;
  padding: 5px 10px;
  box-sizing: border-box;
  ${tablet({ fontSize: "14px" })};
  white-space: wrap;
  text-overflow: ellipsis;
  display: block;
  overflow: hidden;
`;

const TableColumnsButton = styled.button`
  ${tablet({ fontSize: "11px",width:"50px" })};
  padding:7px;
  border-radius:7px;
  font-size:15px;
  border:none;
  color:white;
  width:70px;
`;

const MobileTableCon = styled.div`
  display: none;
  ${stablet({ display: "block" })};
  background: white;
  height: 100%;
  width: 100%;
  padding: 8px;
  border-radius: 7px;
  overflow-y: auto;
  height: 100%;
  // height: 450px;
`;
const MobileTable = styled.div`
  margin:5px 0;
//   background:#f3f4fc;
  padding:8px;
  border-radius:7px;
`
const MobileTableColumns = styled.div`
  border-bottom:1px solid #eee;
`
const MobileTableKey = styled.p`
   color:#007ec3;
   font-size:14px;
`
const MobileTableValue = styled.p`
  font-size: 14px;
  color:grey;
`;

const PaginationsWrapper = styled.div`
  width: 100%;
  // position:sticky;
  // top:100px;
  padding: 10px 50px;
  ${stablet({ padding: "10px 20px" })}
   display:none;
  box-sizing:border-box;
`;
const PaginationsCon = styled.div`
   justify-content:space-evenly;
   gap:5px;
`;
const ItemsPerPageCon = styled.div`
gap:6px;
`
const ItemsPerPageText = styled.p`
  ${tablet({ fontSize: "14px" })};
`;
const PaginationsEntries = styled.div``
const PaginationsEntriesText = styled.div`
  gap: 0.3rem;
  ${tablet({ fontSize: "14px" })};
`;
const PaginationsButtonsCon = styled.div`
gap:.5rem;
`
const PaginationsButton = styled.div`
  padding: 5px;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:20px;
  ${tablet({ fontSize: "16px" })};

  &:hover {
    background: #eee;
    transition: 2s all;
    cursor: pointer;
  }
  //    color:white;
`;

const UsersList = () => {
  const user = useContext(UserContext);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [itemsPerpage,setItemsPerPage]=useState(20);
  const [currentPage,setCurrentPage]=useState(1);
 useEffect(() => {
  console.log(itemsPerpage)
  setCurrentPage(1)
 }, [itemsPerpage])
 

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
        <NavbarText>
          <Link to="/users-list" className="link">
            Get all users
          </Link>
        </NavbarText>
        <NavbarText>Switch to owner</NavbarText>
        {/* <NavbarText>Delete account</NavbarText> */}
        <NavbarText>Logout</NavbarText>
        {user.accessToken ? (
          <SideMenuButton>LOGOUT</SideMenuButton>
        ) : (
          <>
            <Link
              to="/register"
              className="link flex aic jcc fdc w100"
              style={{ width: "100%" }}
            >
              <SideMenuButton outline>Register</SideMenuButton>
            </Link>
            <Link
              to="/login"
              className="link flex aic jcc fdc w100"
              style={{ width: "100%" }}
            >
              <SideMenuButton>Login</SideMenuButton>
            </Link>
          </>
        )}
      </SideMenuCon>
    );
  };

  const handleUpdateRole = async () => {
    try {
      const res = await axios.post("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    
    const GetUsers =async ()=>{
      const res = await axios.get("users")
    }
  
  }, [])
  

  const demoUsersList = [
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:false
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1 last",
        email:"user1emaillast.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:false
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:19,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:20,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1 last",
        email:"user1emaillast.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:false
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1 last",
        email:"user1emaillast.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:false
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1",
        email:"user1email.com",
        role:"user",
        verifiedEmail:true
    },
    {
        id:0,
        username:"user1 last",
        email:"user1emaillast.com",
        role:"user",
        verifiedEmail:true
    },
  ];
   const currentPageData = demoUsersList.slice(
     (currentPage - 1) * itemsPerpage,
     currentPage * itemsPerpage
   );
    console.log(Math.ceil(demoUsersList.length / itemsPerpage));
    console.log(demoUsersList.slice((currentPage - 1) * itemsPerpage,currentPage * itemsPerpage));


const ChangePagPage = (direction,page)=>{
    if (direction === "forward" && itemsPerpage * currentPage < demoUsersList.length){
    setCurrentPage(current => current + page);
    } else if (direction==='backward' && currentPage >1) {
      setCurrentPage((current) => current - page);
    }
}

  return (
    <Con className="">
      <NavbarCon>
        <Navbar className="flex aic jcc w100">
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
            <NavbarText>Switch to owner</NavbarText>
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
      </NavbarCon>
      <Container className="flex aic jcc fdc">
        <Wrapper className="flex aic jcc fdc ">
          <PaginationsWrapper>
            <PaginationsCon className="flex aic jcsb wrap w100">
              <ItemsPerPageCon className="flex aic jcc">
                <ItemsPerPageText>Items per page</ItemsPerPageText>
                <Select
                  value={itemsPerpage}
                  onChange={(e) => setItemsPerPage(e.target.value)}
                  sx={{ padding: "", height: "20px", fontSize: "15px" }}
                >
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                </Select>
              </ItemsPerPageCon>
              <PaginationsEntries>
                <PaginationsEntriesText className="flex aic jcc">
                  <span>{(currentPage - 1) * itemsPerpage + 1}</span>
                  <span>-</span>
                  <span>
                    {itemsPerpage * currentPage > demoUsersList.length
                      ? demoUsersList.length
                      : itemsPerpage * currentPage}
                  </span>
                  <span>of</span>
                  <span>{demoUsersList.length}</span>
                </PaginationsEntriesText>
              </PaginationsEntries>
              <PaginationsButtonsCon className="flex aic jcc">
                <PaginationsButton onClick={() => ChangePagPage("backward", 2)}>
                  <FirstPage sx={{ fontSize: "inherit" }} />
                </PaginationsButton>
                <PaginationsButton onClick={() => ChangePagPage("backward", 1)}>
                  <KeyboardArrowLeft sx={{ fontSize: "inherit" }} />
                </PaginationsButton>
                <PaginationsButton onClick={() => ChangePagPage("forward", 1)}>
                  <KeyboardArrowRight sx={{ fontSize: "inherit" }} />
                </PaginationsButton>
                <PaginationsButton onClick={() => ChangePagPage("forward", 2)}>
                  <LastPage sx={{ fontSize: "inherit" }} />
                </PaginationsButton>
              </PaginationsButtonsCon>
              {/* <Paginations>
              <PaginationsButtonsCon className="flex aic jcc">
                <PaginationsButton style={{ background: "blue" }}>
                  Previous
                </PaginationsButton>
                <PaginationCon className="flex aic jcc">
                  <Pagination>1</Pagination>
                  <Pagination>2</Pagination>
                </PaginationCon>
                <PaginationsButton style={{ background: "red" }}>
                  Next
                </PaginationsButton>
              </PaginationsButtonsCon>
            </Paginations> */}
            </PaginationsCon>
          </PaginationsWrapper>
          <TableCon className="">
            <TableHeaderWrapper>
              <TableHeaderCon className="">
                <TableHeader style={{ maxWidth: "100px" }}>
                  <TableHeaderText>ID</TableHeaderText>
                </TableHeader>
                <TableHeader>
                  <TableHeaderText>Username</TableHeaderText>
                </TableHeader>
                <TableHeader>
                  <TableHeaderText>Email</TableHeaderText>
                </TableHeader>
                <TableHeader>
                  <TableHeaderText>Role</TableHeaderText>
                </TableHeader>
                <TableHeader>
                  <TableHeaderText>Verified</TableHeaderText>
                </TableHeader>
              </TableHeaderCon>
            </TableHeaderWrapper>
            <Table className="custom_scrollbar">
              {demoUsersList.map((users, index) => (
                <TableRows key={index}>
                  <TableColumns
                    style={{
                      color: "red",
                      fontWeight: "500",
                      //   maxWidth: "100px",
                    }}
                  >
                    {users.id}
                  </TableColumns>
                  <TableColumns>{users.username}</TableColumns>
                  <TableColumns>{users.email}</TableColumns>
                  <TableColumns>{users.role}</TableColumns>
                  <TableColumns>
                    <TableColumnsButton
                      style={{
                        background: users.verifiedEmail ? "#2563eb" : "red",
                      }}
                    >
                      {users.verifiedEmail ? "Yes" : "No"}
                    </TableColumnsButton>
                  </TableColumns>
                </TableRows>
              ))}
            </Table>
          </TableCon>
          <MobileTableCon className="custom_scrollbar">
            {currentPageData.map((users, index) => (
              <MobileTable
                style={{ background: index % 2 === 0 ? "#f3f4fc" : "white" }}
                className=""
              >
                <MobileTableColumns className="flex aic jcsb">
                  <MobileTableKey>ID</MobileTableKey>
                  <MobileTableValue>{users.id}</MobileTableValue>
                </MobileTableColumns>
                <MobileTableColumns className="flex aic jcsb">
                  <MobileTableKey>Username</MobileTableKey>
                  <MobileTableValue>{users.username}</MobileTableValue>
                </MobileTableColumns>
                <MobileTableColumns className="flex aic jcsb">
                  <MobileTableKey>Email</MobileTableKey>
                  <MobileTableValue>{users.email}</MobileTableValue>
                </MobileTableColumns>
                <MobileTableColumns className="flex aic jcsb">
                  <MobileTableKey>Role</MobileTableKey>
                  <MobileTableValue>{users.role}</MobileTableValue>
                </MobileTableColumns>
                <MobileTableColumns className="flex aic jcsb">
                  <MobileTableKey>Verified-Email</MobileTableKey>
                  <MobileTableValue
                    style={{ color: users.verifiedEmail ? "blue" : "red" }}
                  >
                    {" "}
                    {users.verifiedEmail ? "Yes" : "No"}
                  </MobileTableValue>
                </MobileTableColumns>
              </MobileTable>
            ))}
          </MobileTableCon>
        </Wrapper>
      </Container>
      <SideMenu />
    </Con>
  );
};

export default UsersList;
