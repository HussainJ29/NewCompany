import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideNav from './SideNav'
import CompanyList from './CompanyList';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CompanyForm from './CompanyForm';


const Layout = () => {
  return (
    <BrowserRouter>
        <Container className='py-5'>
            <Row>
                <Col><SideNav/></Col>
                <Col xs={10}>
                <Routes>
                    <Route path='/' element={<CompanyList/>}/>
                    <Route path='/form' element={<CompanyForm/>}/>
                </Routes>
                </Col>
            </Row>
        </Container>
        </BrowserRouter>
    
  )
}

export default Layout