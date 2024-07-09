import ListGroup from "react-bootstrap/ListGroup";
import Badge from 'react-bootstrap/Badge';

function SingleComment({comment}) {
  return (
    <>
      <ListGroup as="ol" className="list-group-numbered py-2" >
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Rate</div>
          {comment.rate}
        </div>
        <Badge bg="primary" pill>
          1 to 5
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Comment</div>
          {comment.comment}
        </div>
        <Badge bg="primary" pill>
          User Comment
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Author</div>
          {comment.author}
        </div>
        <Badge bg="primary" pill>
          Comment Author
        </Badge>
      </ListGroup.Item>
    </ListGroup>
      
    </>
  );
}

export default SingleComment;

{/* <ListGroup.Item> Rate: {comment.rate}</ListGroup.Item>
      <ListGroup.Item> Comment: {comment.comment}</ListGroup.Item>
      <ListGroup.Item> Autore: {comment.author}</ListGroup.Item> */}