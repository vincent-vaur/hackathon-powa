import React from "react";
import { Container } from "react-bootstrap";
import PostIt from "../PostIt";
import PostVideo from '../PostVideo';
import Link from '../Link';
import PostImg from "../PostImg";

const list = [
  {
    id: "a",
    header: "Robin",
    text: "I'll be always here for you Batman",
    type: "PostIt",
  },
  {
    id: "b",
    source: "https://www.youtube.com/1ZJTuep3w5g",
    text: "You know nothing John Snow",
    type: "video",
  },
  {
    id: "c",
    link: "https://react-bootstrap.github.io/",
    text: "A great link for you to check ...",
    type: "link",
  },
  {
    id: "d",
    img_source: "https://aws.vdkimg.com/film/6/9/9/3/6993_backdrop_scale_1280xauto.jpg",
    text: "Come Surfing Buddy",
    type: "image",
  },
  {
    id: "b",
    source: "https://www.youtube.com/1ZJTuep3w5g",
    text: "You Bitch !!!",
    type: "video",
  }
];

const List = () => {
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
