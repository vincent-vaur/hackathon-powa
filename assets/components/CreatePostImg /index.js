import React from "react";
import picture from '../../img/picture.svg';
import { Form, Button, Modal, Nav } from "react-bootstrap";

function MyCreatePictureForm(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="p-3"
    >
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Picture source</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Picture description:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={props.onHide}>
          Add One picture to the board !
        </Button>
      </Form>
    </Modal>
  );
}

export default function CreatePostImg() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
       <Nav.Link eventKey='link-1' className='mt-5 mb-5'>
          <img className='w-100' src={picture} alt='immages' onClick={() => setModalShow(true)}/>
        </Nav.Link>
      <MyCreatePictureForm
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
