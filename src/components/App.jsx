import React, { useState } from "react";

function App() {
  const [cobntact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  function handleInputs(event) {
    const { name, value } = event.target;
    ////
    // setContact((prevValue) => {
    //   if (name === "fName") {
    //     return { fName: value, lName: prevValue.lName, email: prevValue.email };
    //   } else if (name === "lName") {
    //     return {
    //       lName: value,
    //       fName: prevValue.fName,
    //       email: prevValue.email
    //     };
    //   } else if (name === "email") {
    //     return {
    //       lName: prevValue.lName,
    //       fName: prevValue.fName,
    //       email: value
    //     };
    //   }
    // });

    ///// instead of above code we can use spread operator
    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {cobntact.fName} {cobntact.lName}
      </h1>
      <span> {cobntact.email}</span>
      <form>
        <input
          name="fName"
          onChange={handleInputs}
          placeholder="First Name"
          value={cobntact.fName}
        />
        <input
          name="lName"
          onChange={handleInputs}
          placeholder="Last Name"
          value={cobntact.lName}
        />
        <input
          type="email"
          name="email"
          onChange={handleInputs}
          placeholder="Enter Email"
          value={cobntact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
