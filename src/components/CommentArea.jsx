import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";


function CommentArea({asin}) {
  const [comments, setComments] = useState([]);
  const loadComments = async () => {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/books/${asin}/comments`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhjMDdiYjNiMDQ4YTAwMTU5MDE3MjkiLCJpYXQiOjE3MjA0NTMwNTEsImV4cCI6MTcyMTY2MjY1MX0.QKHvKhNRevprCC09YfHposyES6FxvVVOjrNcGlPUyUI",
        },
      }
    );
    const data = await response.json();
    setComments(data)
  };
  useEffect(() => {
    loadComments()
  }, []);
  return(
    <>
    <AddComment asin = {asin} />
    <CommentList comments = {comments} />
    </>
   
  )
  
}

export default CommentArea;
