import { Link } from "react-router-dom";
import Button from "../../../components/button/Button";
import { useUserContext } from "../../../context/userContext";
import Message from "../../../components/message/message";

export default function LoginPage() {
  const { setUserObj, userObj, loginUser, messageObj } = useUserContext();

  return (
    <div className="container">
      {messageObj.message ? <Message messageObj={messageObj} /> : null}
      <h1 className="my-5 text-primary text-center">Sign In</h1>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
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
              <Link to="/register">Are you not registered?</Link>
            </div>
            <Button text={"LogIn"} fn={loginUser} />
          </form>
        </div>
      </div>
    </div>
  );
}
