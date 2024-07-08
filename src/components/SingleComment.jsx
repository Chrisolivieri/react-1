import ListGroup from "react-bootstrap/ListGroup";

function SingleComment({comment}) {
  return (
    <>
      <ListGroup.Item>{comment.rate}</ListGroup.Item>
      <ListGroup.Item>{comment.comment}</ListGroup.Item>
      <ListGroup.Item>{comment.author}</ListGroup.Item>
      
    </>
  );
}

export default SingleComment;
