import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  function signUp(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(`Password : ${password} Email : ${email}`);
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form onSubmit={signUp}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="joe@schmoe.com"
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />

        <button>Submit</button>
      </form>
    </section>
  );
}
export default App;
