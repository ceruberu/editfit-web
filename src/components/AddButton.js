import React from "react";
import { Link } from "react-router-dom";
import "./AddButton.css";

const AddButton = () => (
  <Link to="/post" className="addButton">
    +
  </Link>
);

export default AddButton;
