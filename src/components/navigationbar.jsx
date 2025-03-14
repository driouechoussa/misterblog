import {Container , Navbar , Button } from 'react-bootstrap';


export default function Navigationbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Misterblog</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <a className='m-4 text-secondary text-capitalize' href="#login">sign up</a>
        </Navbar.Text>
        <Button className='text-capitalize' variant="dark">log in</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
