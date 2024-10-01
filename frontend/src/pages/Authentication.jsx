import * as React from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";
import { Snackbar } from "@mui/material";

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
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5%",
      }}
    >
      <div
        className="row"
        style={{
          borderRadius: "1%",
          border: "2px solid black",
          height: "60%",
          width: "25%",
          padding: "2%",
        }}
      >
        <div
          className="col-12"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ color: "black" }}>
            {formstate === 0 ? "Login" : "Register"}
          </h1>
          <br />
        </div>
        <div
          className="col-12"
          style={{
            display: "flex",
            height: "10%",
            alignItems: "center",
            justifyContent: "center",
            gap: "5%",
            marginBottom: "5%",
          }}
        >
          <button
            style={{
              backgroundColor: formstate === 1 ? "gray" : "black",
              width: "25%",
              color: "white",
              border: "none",
              height: "80%",
              borderRadius: "0.5rem",
            }} // Change color based on formState
            onClick={() => {
              setFormState(0);
            }}
          >
            Login
          </button>
          <button
            style={{
              backgroundColor: formstate === 1 ? "black" : "gray",
              width: "25%",
              color: "white",
              border: "none",
              height: "80%",
              borderRadius: "0.5rem",
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
            style={{
              height: "10%",
              fontSize: "2vh",
              boxSizing: "border-box",
              border: "none",
              borderBottom: "2px solid black",
              backgroundColor: "white",
              color: "black",
              // marginTop: "-10%"
            }}
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
          style={{
            height: "10%",
            fontSize: "2vh",
            boxSizing: "border-box",
            border: "none",
            borderBottom: "2px solid black",
            backgroundColor: "white",
            color: "black",
            // marginTop: "-10%"
          }}
          id="username"
          label="username"
          name="username"
          autoComplete="username"
          autoFocus
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />

        <input
          style={{
            height: "10%",
            fontSize: "2vh",
            boxSizing: "border-box",
            border: "none",
            borderBottom: "2px solid black",
            backgroundColor: "white",
            color: "black",
            display: "inline",
            width: "80%",
            // marginTop: "-10%"
          }}
          name="password"
          label="Password"
          type={passwordShow ? "text" : "password"}
          id="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          style={{
            display: "inline",
            width: "20%",
            height: "10%",
            border: "none",
            backgroundColor:"black",
            color:"white",
            borderRadius: "0.5rem",
          }}
          onClick={tooglePassword}
        >
          See
        </button>

        <p style={{ color: "red" }}>{error}</p>
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            height: "10%",
            backgroundColor: "black",
            border: "none",
            borderRadius:"0.5rem"
          }}
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