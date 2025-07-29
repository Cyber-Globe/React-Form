import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  function handleSubmit(event) {
    event.preventDefault();
    const formEl = event.target;
    const formData = new FormData(formEl);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(
      `Submitted Email: ${email} and Password: ${password} for brain Tech Company`
    );
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form onSubmit={handleSubmit} method="POST" action="/signup">
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
