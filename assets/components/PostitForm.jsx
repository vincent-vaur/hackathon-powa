import React from 'react';
import { useForm } from 'react-hook-form';
import { postPostIt } from '../api/api'

const PostitForm = () => {
  const type = 'postIt';
  const [Postit, setPostit] = useState('');

  const { register, handleSubmit } = useForm();

  const onSubmit = (values) => {
    postPostIt(values).then((newPostIt) => {
      setPostit([...Postit, newPostit]);
    });
  };

  return (
    <div>
      <Card className='form-container'>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId='formBasicType'>
            <Form.Label>type</Form.Label>
            <Form.Control
              type='text'
              value={type}
              placeholder='type'
              {...register('type', {
                required: 'You have to fill the type field',
              })}
            />
          </Form.Group>
          <Form.Group controlId='formBasicboard'>
            <Form.Label>board</Form.Label>
            <Form.Control
              type='board'
              placeholder='board'
              {...register('user_board', {
                required: 'You have to fill the name field',
              })}
            />
          </Form.Group>
          <Form.Group controlId='formBasicpostItText'>
            <Form.Label>postItText</Form.Label>
            <Form.Control
              type='text'
              placeholder='postItText'
              {...register('postItText', {
                required: 'You have to fill the name field',
              })}
            />
          </Form.Group>
          <Form.Group controlId='formBasicvoteUp'>
            <Form.Label>voteUp</Form.Label>
            <Form.Control
              type='text'
              placeholder='voteUp'
              {...register('voteUp', {
                required: 'You have to fill the name field',
              })}
            />
          </Form.Group>
          <Form.Group controlId='formBasicvoteDown'>
            <Form.Label>voteDown</Form.Label>
            <Form.Control
              type='text'
              placeholder='voteDown'
              {...register('voteDown', {
                required: 'You have to fill the name field',
              })}
            />
            <Form.Text className='text-muted'>
              We'll never share your email and your board with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId='formBasicvoteposition'>
            <Form.Label>position</Form.Label>
            <Form.Control
              type='text'
              placeholder='position'
              {...register('position', {
                required: 'You have to fill the name field',
              })}
            />
            <Form.Text className='text-muted'>
              We'll never share your email and your board with anyone else.
            </Form.Text>
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default PostitForm;
