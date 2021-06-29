import React from "react";
import { Container } from "react-bootstrap";
import PostIt from "../PostIt";
import PostVideo from '../PostVideo';
import Link from '../Link';
import PostImg from "../PostImg";



const List = ({list}) => {
  return (
    <Container fluid className='d-flex justify-content-around align-items-center flex-wrap mt-3'>
      {list.map((p) => {
        if (p.type === 'video') {
          return <PostVideo key={p.id} {...p} />;
        }else if (p.type === 'link') {
          return <Link key={p.id} {...p} />;
        }else if (p.type === 'image') {
          return <PostImg key={p.id} {...p} />;
        }else {
            return <PostIt key={p.id} {...p} />
        }
      })}
    </Container>
  );
};

export default List;
