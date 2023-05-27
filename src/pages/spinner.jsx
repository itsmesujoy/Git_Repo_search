import React from "react";

import { TailSpin } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="spinner">
      <TailSpin
        height="50"
        width="50"
        color="#EA2A2A"
        ariaLabel="tail-spin-loading"
        radius="1"
        visible={true}
      />
    </div>
  );
};

export default Spinner;
