import { useContext } from "react";
import { Container,Nav,Navbar,Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';


const NavBar = () => {
  const {user,logoutUser} = useContext(AuthContext);
  console.log("user",user);
    return (
    <>
      <Navbar bg="dark" className="mb-4" style={{height:"3.7rem"}}>
        <Container>
            <h2>
                <Link to="/chat" className="link-light text-decoration-none">ChatApp</Link>
            </h2>
           {user && <>
            <span className="text-warning">Logged in as {user?.name}</span>
           </>}
            <Nav>
                <Stack direction="horizontal" gap='3'>
                  {user && <>
                    <Link onClick={(e)=>logoutUser()} to='/' className="link-light text-decoration-none">
                    Logout
                  </Link>
                  </>}
                  {!user && <>
                    <Link to='/login' className="link-light text-decoration-none">
                    Login
                  </Link>
                  <Link to='/register' className="link-light text-decoration-none">
                    Register
                  </Link></>}
                </Stack>
            </Nav>
        </Container>
      </Navbar>
    </>
    );
}
 
export default NavBar;