import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Container, Row, Table } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function App() {
  const [formData, setFormData] = useState({
    uname: '',
    uemail: '',
    uphone: '',
    umessage: '',
    index: ''
  });

  const [userData, setUserData] = useState([]);

  const getValue = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const currentUserFormData = {
      uname: formData.uname,
      uemail: formData.uemail,
      uphone: formData.uphone,
      umessage: formData.umessage
    };

    if (formData.index === '') {
      const checkFilterUser = userData.filter(
        v => v.uemail === formData.uemail || v.uphone === formData.uphone
      );

      if (checkFilterUser.length === 1) {
        toast.error(`This Email or Phone Number Already Exists. Please try with another email or phone number.`);
      } else {
        setUserData(prevData => [...prevData, currentUserFormData]);
        setFormData({
          uname: '',
          uemail: '',
          uphone: '',
          umessage: '',
          index: ''
        });
      }
    } else {
      const editIndex = formData.index;
      const checkFilterUser = userData.filter(
     (v,i)=> v.uemail === formData.uemail || v.uphone === formData.uphone && ( i!= editIndex));
      
     if(checkFilterUser.length == 0){

      const updatedUserData = [...userData];
      updatedUserData[editIndex] = formData;
      setUserData(updatedUserData);
      setFormData({
        uname: '',
        uemail: '',
        uphone: '',
        umessage: '',
        index: ''
      });
    }
    else{
      toast.error(`This Email or Phone Number Already Exists. Please try with another email or phone number.`);
    }

  }
  };

  const deleteRow = indexNumber => {
    const filterDataAfterDelete = userData.filter((_, i) => i !== indexNumber);
    setUserData(filterDataAfterDelete);
    toast.success("Data Successfully Deleted");
  };

  const editRow = indexNumber => {
    const editData = userData[indexNumber];
    setFormData({
      ...editData,
      index: indexNumber
    });
  };

  return (
    <>
      <Container fluid>
        <ToastContainer />
        <Container>
          <Col className='text-center py-5'>
            <Row>
              <h1>Enquiry Form</h1>
            </Row>
          </Col>
          <Row>
            <Col lg={5}>
              <form onSubmit={handleSubmit}>
                <div className="p-3">
                  <label className='form-label'>Name:</label>
                  <input type="text" onChange={getValue} value={formData.uname} name='uname' className='form-control' />
                </div>

                <div className="p-3">
                  <label className='form-label'>Email:</label>
                  <input type="email" onChange={getValue} value={formData.uemail} name='uemail' className='form-control' />
                </div>

                <div className="p-3">
                  <label className='form-label'>Phone:</label>
                  <input type="text" onChange={getValue} value={formData.uphone} name='uphone' className='form-control' />
                </div>

                <div className="p-3">
                  <label className='form-label'>Message:</label>
                  <textarea className='form-control' onChange={getValue} value={formData.umessage} name="umessage" id="" rows="4" />
                </div>

                <button className='btn px-5 py-2.5 text-center btn-primary savebtn'>
                  {formData.index !== "" ? "Update" : "Save"}
                </button>
              </form>
            </Col>

            <Col lg={7}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Message</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.length >= 1 ? (
                    userData.map((obj, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{obj.uname}</td>
                        <td>{obj.uemail}</td>
                        <td>{obj.uphone}</td>
                        <td>{obj.umessage}</td>
                        <td>
                          <button onClick={() => deleteRow(index)}>Delete</button>
                          <button onClick={() => editRow(index)}>Edit</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6}>No data Found</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
