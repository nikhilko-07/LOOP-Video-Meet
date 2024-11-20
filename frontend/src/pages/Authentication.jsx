import * as React from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";
import { Snackbar } from "@mui/material";
import "../css/Authentication.css";
// TODO remove, this demo shouldn't need to reset the theme.

export default function Authentication() {
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const [name, setName] = React.useState();
  const [error, setError] = React.useState();
  const [message, setMessage] = React.useState();

  const [formstate, setFormState] = React.useState(0);
  const [open, setOpen] = React.useState();

  const { handleRegister, handleLogin } = React.useContext(AuthContext);

  let handleAuth = async (e) => {
    try {
      if (formstate === 0) {
        let result = await handleLogin(username, password);
        // setMessage(result);
        setUsername("");
        setPassword("");
      }
      if (formstate === 1) {
        let result = await handleRegister(name, username, password);
        setUsername("");
        setMessage(result);
        setOpen(true);
        setError("");
        setFormState(0);
        setPassword("");
      }
    } catch (error) {
      console.log(error);
      let message = error.response.data.message;
      setError(message);
    }
  };
  const [passwordShow, setPasswordShow] = React.useState(false);
  const tooglePassword = () => {
    setPasswordShow(!passwordShow);
  };

  return (
    <div className="page">
      <div className="row main">
        <div
          className="col-12"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 className="header">{formstate === 0 ? "Login" : "Register"}</h1>
          <br />
        </div>
        <div className="col-12 headercontainer">
          <button
            className="headerButton"
            style={{
              backgroundColor: formstate === 1 ? "gray" : "black",
            }} // Change color based on formState
            onClick={() => {
              setFormState(0);
            }}
          >
            Login
          </button>
          <button
            className="headerButton"
            style={{
              backgroundColor: formstate === 1 ? "black" : "gray",
            }} // Change color based on formState
            onClick={() => {
              setFormState(1);
            }}
          >
            Register
          </button>
        </div>
        {formstate === 1 ? (
          <input
            className="FullName1"
            id="name"
            label="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="FullName"
          />
        ) : (
          <></>
        )}

        <input
          className="UserName1"
          id="username"
          label="username"
          name="username"
          autoComplete="username"
          autoFocus
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />

        <input
          className="Password1"
          name="password"
          label="Password"
          type={passwordShow ? "text" : "password"}
          id="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="toogleButton" onClick={tooglePassword}>
          See
        </button>

        <p style={{ color: "red" }}>{error}</p>
        <button
          className="submitButton"
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleAuth}
        >
          {formstate === 0 ? "Login" : "Register"}
        </button>
        <Snackbar
          style={{ color: "white" }}
          open={open}
          autoHideDuration={4000}
          message={message}
        />
      </div>
    </div>
  );
}
