// Import necessary dependencies and components
import { Link } from "react-router-dom";
import Button from "../../../components/button/Button";

// Import custom hook to access user-related context
import { useUserContext } from "../../../context/userContext";
import Message from "../../../components/message/message";

// Define the RegisterPage component
export default function RegisterPage() {
  // Destructure values from the user context using the custom hook
  const { setUserObj, userObj, registerUser, messageObj } = useUserContext();

  // Render the RegisterPage component
  return (
    <div className="container">
      {/* Display a message if present */}
      {messageObj.message ? <Message messageObj={messageObj} /> : null}

      {/* Display the heading for the registration page */}
      <h1 className="my-5 text-primary text-center">Sign Up</h1>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          {/* Form for user registration */}
          <form>
            <div className="mb-3">
              {/* Name input */}
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                value={userObj.name}
                onChange={(e) => {
                  setUserObj({ ...userObj, name: e.target.value });
                }}
                type="text"
                className="form-control border-primary"
              />
            </div>
            <div className="mb-3">
              {/* Email input */}
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                value={userObj.email}
                onChange={(e) => {
                  setUserObj({ ...userObj, email: e.target.value });
                }}
                type="email"
                className="form-control border-primary"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="mb-3">
              {/* Password input */}
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                value={userObj.password}
                onChange={(e) => {
                  setUserObj({ ...userObj, password: e.target.value });
                }}
                type="password"
                className="form-control border-primary"
                id="exampleInputPassword1"
              />
              {/* Link to the login page */}
              <Link to="/login">Are you already registered?</Link>
            </div>
            {/* Button to trigger user registration */}
            <Button text={"Register"} fn={registerUser} color={"primary"} />
          </form>
        </div>
      </div>
    </div>
  );
}
