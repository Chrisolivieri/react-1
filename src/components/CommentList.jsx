import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

function CommentList({ comments, loadComments }) {
  return (
    <ListGroup>
      {comments.map((comment) => (
        <SingleComment
          key={comment._id}
          loadComments={loadComments}
          comment={comment}
        />
      ))}
    </ListGroup>
  );
}

export default CommentList;
