import React,{ useContext } from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UserContext from '../contexts/UserContext';

const Login = () => {
   const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm();


   const { users, setusers, isConnected, postLogin } = useContext(UserContext);

     const onSubmit = (values) => {
       postLogin(values).then((newPostIt) => {
         setusers([...users, newPostIt]);
       });
     };

  return (
    <div className='formulaire'>
      <Card className='form-container'>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              {...register('user_email')}
            />
            {errors.user_email && <p>{errors.user_email.message}</p>}
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              {...register('user_password')}
            />
            {errors.user_password && <p>{errors.user_password.message}</p>}
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
