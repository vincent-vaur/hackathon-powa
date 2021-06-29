import React from 'react';
import { Container } from "react-bootstrap";
import Link from '../Link';
import PostImg from "../PostImg";
import PostIt from "../PostIt";
import PostVideo from '../PostVideo';

export default function Board() {
  return (
    <Container fluid-md className='d-flex justify-content-around align-items-center flex-wrap mt-3'>
      <Link />
      <PostIt />
      <PostImg />
      <PostVideo />
       <Link />
      <PostIt />
      <PostImg />
      <PostVideo />
       <Link />
      <PostIt />
      <PostImg />
      <PostVideo />
       <Link />
      <PostIt />
      <PostImg />
      <PostVideo />
    </Container>
  );
}
