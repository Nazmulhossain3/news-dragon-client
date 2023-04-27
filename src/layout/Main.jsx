
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Leftnav from '../pages/Shared/Leftnav/Leftnav';
import Rightnav from '../pages/Shared/Rightnav/Rightnav';
import { Outlet } from 'react-router-dom';
import Navigationbar from '../pages/Shared/Navigationbar/Navigationbar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Navigationbar></Navigationbar>

            
            <Container>
    
      <Row>
        <Col lg={3}>l
      <Leftnav></Leftnav>
        </Col>
        
        <Col lg={6}>
          <Outlet></Outlet>
        </Col>
       
       
        <Col lg={3}>
        <Rightnav></Rightnav>
        </Col>
      </Row>
    
    </Container>


            <Footer></Footer>

        </div>
    );
};

export default Main;