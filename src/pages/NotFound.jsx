import "./NotFound.css"
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div class="d-flex flex-column align-items-center">
      <h1 className="text-large">Oops!</h1>
      <h2 className="text-large2">404 - Page Not Found</h2>
      <Link to = "/"><button className="home">Home</button></Link>
    </div>
  );
}

export default NotFound;
