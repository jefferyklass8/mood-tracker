import React from "react";

export default function Main(props) {
  const { children } = props;
  return <main className="flex flex-col flex-1 p-4 sm:p-8">{children}</main>;
}
