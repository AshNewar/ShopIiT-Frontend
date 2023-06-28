import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";
import "./pagenotfound.css";

const NotFound = () => {
  return (
    <section className="notFound section_padding">
      <main className="notfoundMain">
        <div className="errorpage">
          <MdError />
          <h1>404</h1>
        </div>

        <p>Page not found, click below to go to home page.</p>
        <Link to="/"><div  className="errorbutton">Go to Home</div></Link>
      </main>
    </section>
  );
};

export default NotFound;