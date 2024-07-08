import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

function CommentList({ comments }) {
    return (
        <ListGroup>
            {comments.map(comment => 
                <SingleComment key={comment.id} comment={comment} />
            )}
        </ListGroup>
    );
}

export default CommentList;
