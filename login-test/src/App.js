import React, { useState } from "react";
import './App.css';
import Layout from "./components/layout";

export default function App() {
  const [state, setState] = useState(true);

  return (
    <Layout />
  );
}
