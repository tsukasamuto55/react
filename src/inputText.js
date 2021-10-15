import React, { useState } from "react";

export default function TextInput() {
  const [name, setName] = useState("");

  const handleName = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  return <input onChange={(event) => handleName(event)} type={"text"} value={name} />;
}
