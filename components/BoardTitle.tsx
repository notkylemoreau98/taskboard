import { title } from "process";
import React from "react";

const props = {
  title: String,
};

const BoardTitle = ({ title }) => {
  return <div>{title}</div>;
};

export default BoardTitle;
