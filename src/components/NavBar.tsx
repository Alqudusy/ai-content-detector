import { Container, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
            <Container>
                <Navbar.Brand href="#">AI Content Detector</Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default NavBar;
