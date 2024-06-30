import React, { useContext, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {CompanyContext} from '../Providers/stateProvider'


const CompanyForm = () => {
    const defaultSkillInfo = {

        "skillName": { value: "", errorMessage: null },
        "skillRating": { value: "", errorMessage: null }
    }
    const defaultEducationInfo = {
        "instituteName": { value: "", errorMessage: null },
        "courseName": { value: "", errorMessage: null }, "completedYear": { value: "", errorMessage: null }
    }
    const defaultEmployeeData = {

        "empName": { value: "", errorMessage: null }, "designation": { value: "", errorMessage: null }, "joinDate": { value: "", errorMessage: null }, "email":
            { value: "", errorMessage: null }, "phoneNumber": { value: "", errorMessage: null }, "skillInfo": [defaultSkillInfo], "educationInfo": [defaultEducationInfo]
    }
    const defaultCompanyData = {
        "companyName": { value: "", errorMessage: null }, "address": { value: "", errorMessage: null },
        "email": { value: "", errorMessage: null }, "phoneNumber": { value: "", errorMessage: null }, "empInfo": [defaultEmployeeData]
    }


    const [newCompanyData, setNewCompanyData] = useState(defaultCompanyData)
    const {addCompanyData} = useContext(CompanyContext)
    const handleFormSubmit = ()=>{
        addCompanyData(newCompanyData)
        setNewCompanyData(defaultCompanyData)
    }
    return (
        <div>
            <h1>Add New Company Information</h1>

            <Form onSubmit={handleFormSubmit}>
                <h2 className='my-3'>Company Basic Info</h2>
                <Form.Group className="mb-3">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control placeholder="Enter Company Name" value={newCompanyData.companyName.value} onChange={(e) => { setNewCompanyData({ ...newCompanyData, companyName: { ...newCompanyData.companyName, value: e.target.value } }) }} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Company Address</Form.Label>
                    <Form.Control as={"textarea"} rows={3} placeholder="Enter Company Address" value={newCompanyData.address.value} onChange={(e) => { setNewCompanyData({ ...newCompanyData, address: { ...newCompanyData.address, value: e.target.value } }) }} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control placeholder="Enter PhoneNumber" value={newCompanyData.phoneNumber.value} onChange={(e) => { setNewCompanyData({ ...newCompanyData, phoneNumber: { ...newCompanyData.phoneNumber, value: e.target.value } }) }} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control placeholder="Enter Email Address" value={newCompanyData.email.value} onChange={(e) => { setNewCompanyData({ ...newCompanyData, email: { ...newCompanyData.email, value: e.target.value } }) }} />
                </Form.Group>
                <h2 className='my-3'>Employee Information</h2>
                {newCompanyData.empInfo.map((empData, empIndex) => (<>
                    <h3 className='my-3'>Employee : {empIndex + 1}</h3>
                    <Form.Group className="mb-3">
                        <Form.Label>Employee Name</Form.Label>
                        <Form.Control placeholder="Enter Employee Name" value={empData.empName.value} onChange={(e) => { setNewCompanyData({ ...newCompanyData, empInfo: [...newCompanyData.empInfo.slice(0, empIndex), { ...empData, empName: { ...empData.empName, value: e.target.value } }, ...newCompanyData.empInfo.slice(empIndex + 1)] }) }} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Designation</Form.Label>
                        <Form.Select placeholder="Designation" value={empData.designation.value} onChange={(e) => { setNewCompanyData({ ...newCompanyData, empInfo: [...newCompanyData.empInfo.slice(0, empIndex), { ...empData, designation: { ...empData.designation, value: e.target.value } }, ...newCompanyData.empInfo.slice(empIndex + 1)] }) }}>
                            <option value="1"> Developer</option>
                            <option value="2">Manager</option>
                            <option value="3">System Admin</option>
                            <option value="4">Team Lead</option>
                            <option value="5">PM</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Enter Join Date</Form.Label>
                        <Form.Control type='date' placeholder="Enter Join Date" value={empData.joinDate.value} onChange={(e) => { setNewCompanyData({ ...newCompanyData, empInfo: [...newCompanyData.empInfo.slice(0, empIndex), { ...empData, joinDate: { ...empData.joinDate, value: e.target.value } }, ...newCompanyData.empInfo.slice(empIndex + 1)] }) }} />
                    </Form.Group><Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control placeholder="Enter Email" value={empData.email.value} onChange={(e) => { setNewCompanyData({ ...newCompanyData, empInfo: [...newCompanyData.empInfo.slice(0, empIndex), { ...empData, email: { ...empData.email, value: e.target.value } }, ...newCompanyData.empInfo.slice(empIndex + 1)] }) }} />
                    </Form.Group><Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type='number' placeholder="Enter Phone Number" value={empData.phoneNumber.value} onChange={(e) => { setNewCompanyData({ ...newCompanyData, empInfo: [...newCompanyData.empInfo.slice(0, empIndex), { ...empData, phoneNumber: { ...empData.phoneNumber, value: e.target.value } }, ...newCompanyData.empInfo.slice(empIndex + 1)] }) }} />
                    </Form.Group>
                    <h3>Skills Info</h3>
                    {empData.skillInfo.map((skill, skillIndex) => (<Row>
                        <Col xs={5}><Form.Group className="mb-3">
                            <Form.Label>Skill</Form.Label>
                            <Form.Select placeholder="Skill" value={skill.skillName.value} onChange={(e) => { setNewCompanyData({ ...newCompanyData, empInfo: [...newCompanyData.empInfo.slice(0, empIndex), { ...empData, skillInfo: [...empData.skillInfo.slice(0, skillIndex), { ...skill, skillName: { ...skill.skillName, value: e.target.value } }] }, ...newCompanyData.empInfo.slice(empIndex + 1)] }) }}>
                            <option value="1">Java</option>
                            <option value="2">Angular</option>
                            <option value="3">CSS</option>
                            <option value="4">HTML Lead</option>
                            <option value="5">JavaScript</option>
                            <option value="6">UI</option>
                            <option value="7">SQL</option>
                            <option value="8">React</option>
                            <option value="9">PHP</option>
                            <option value="10">GIT</option>
                            <option value="11">AWS</option>
                            <option value="12">Python</option>
                            <option value="13">Django</option>
                            <option value="14">C</option>
                            <option value="15">C++</option>
                            <option value="16">C#</option>
                            <option value="17">Unity</option>
                            <option value="18">R</option>
                            <option value="19">AI</option>
                            <option value="20">NLP</option>
                            <option value="21">Photoshop</option>
                            <option value="22">Node JS</option>
                            </Form.Select>
                        </Form.Group></Col>
                        <Col xs={5}><Form.Group className="mb-3">
                            <Form.Label>Skill Rating</Form.Label>
                            <Form.Control type='number' min={1} max={5} placeholder="Rate your skill" value={skill.skillRating.value} onChange={(e) => { setNewCompanyData({ ...newCompanyData, empInfo: [...newCompanyData.empInfo.slice(0, empIndex), { ...empData, skillInfo: [...empData.skillInfo.slice(0, skillIndex), { ...skill, skillRating: { ...skill.skillRating, value: e.target.value } }] }, ...newCompanyData.empInfo.slice(empIndex + 1)] }) }} />
                        </Form.Group>
                        </Col>
                        <Col>
                            <div className='h-100 d-flex justify-content-center align-items-center mt-2'>
                                <Button onClick={() => setNewCompanyData({ ...newCompanyData, empInfo: [...newCompanyData.empInfo.slice(0, empIndex), { ...empData, skillInfo: [...empData.skillInfo, defaultSkillInfo] }, ...newCompanyData.empInfo.slice(empIndex + 1)] })}>Add Skill</Button>
                            </div>
                        </Col>
                    </Row>))}

                    <h3>Education Info</h3>
                    {empData.educationInfo.map((edu, eduIndex) => (<Row>
                        <Col xs={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Institute Name</Form.Label>
                            <Form.Control  placeholder="Institute Name" value={edu.instituteName.value} onChange={(e) => { setNewCompanyData({ ...newCompanyData, empInfo: [...newCompanyData.empInfo.slice(0, empIndex), { ...empData, educationInfo: [...empData.educationInfo.slice(0, eduIndex), { ...edu, instituteName: { ...edu.instituteName, value: e.target.value } }] }, ...newCompanyData.empInfo.slice(empIndex + 1)] }) }} />
                            
                        </Form.Group>
                        </Col>
                        <Col xs={3}><Form.Group className="mb-3">
                            <Form.Label>Course Name</Form.Label>
                            <Form.Control  placeholder="Course Name" value={edu.courseName.value} onChange={(e) => { setNewCompanyData({ ...newCompanyData, empInfo: [...newCompanyData.empInfo.slice(0, empIndex), { ...empData, educationInfo: [...empData.educationInfo.slice(0, eduIndex), { ...edu, courseName: { ...edu.courseName, value: e.target.value } }] }, ...newCompanyData.empInfo.slice(empIndex + 1)] }) }} />
                            
                        </Form.Group>
                        </Col>
                        <Col xs={3}><Form.Group className="mb-3">
                            <Form.Label>Completion Year</Form.Label>
                            <Form.Control type='month'  placeholder="Completion Year" value={edu.completedYear.value} onChange={(e) => { setNewCompanyData({ ...newCompanyData, empInfo: [...newCompanyData.empInfo.slice(0, empIndex), { ...empData, educationInfo: [...empData.educationInfo.slice(0, eduIndex), { ...edu, completedYear: { ...edu.completedYear, value: e.target.value } }] }, ...newCompanyData.empInfo.slice(empIndex + 1)] }) }} />
                            
                        </Form.Group>
                        </Col>
                        <Col>
                            <div className='h-100 d-flex justify-content-center align-items-center mt-2'>
                                <Button onClick={() => setNewCompanyData({ ...newCompanyData, empInfo: [...newCompanyData.empInfo.slice(0, empIndex), { ...empData, educationInfo: [...empData.educationInfo, defaultEducationInfo] }, ...newCompanyData.empInfo.slice(empIndex + 1)] })}>Add Institution</Button>
                            </div>
                        </Col>
                    </Row>))}

                </>))}
                <div className='d-flex justify-content-center gap-5 mt-5'>
                    <Button onClick={() => setNewCompanyData({ ...newCompanyData, empInfo: [...newCompanyData.empInfo, defaultEmployeeData] })}>Add Employee</Button>

                    <Button onClick={handleFormSubmit}>Save Details</Button>
                    
                </div>
            </Form>

        </div>
    )
}

export default CompanyForm