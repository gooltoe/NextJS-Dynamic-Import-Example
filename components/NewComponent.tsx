import React from "react";

type Props = {};

function DynamicImport({}: Props) {
  const { innerWidth: width, innerHeight: height } = window;

  return (
    <div>
      <p>screenW: {width}</p>
      <p>screenH: {height}</p>
    </div>
  );
}

export default DynamicImport;
