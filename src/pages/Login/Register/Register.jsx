import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Register = () => {
    const {user,createUser} = useContext(AuthContext)

    const handleRegister = (event)=> {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        console.log(name,photo,email,password)
      
        createUser() 
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser)
        })  
        .catch(error => {
            console.log(error)
        }) 

        
    }

    return (
        <Container className='w-25 mx-auto mt-4  rounded'>
             
            <Form className='p-4' onSubmit={handleRegister} >
            <h4>Please Register</h4>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter name" required />
       
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name='photo' placeholder="Enter photo" required />
       
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required />
       
      </Form.Group>
      
      
      
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" name='accept' label="Accept terms and conditions" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button> <br />
     
      <Form.Text className="text-secondary">
        Already have an account ? <Link to='/login'>Login</Link>
     </Form.Text>
    
      <Form.Text className="text-success">
        
        </Form.Text>
    
    </Form>
        </Container>
    );
    
};

export default Register;