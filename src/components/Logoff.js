import React from "react";

export const Logoff = props => {
  return (
    <div>
      <button
        className="logoff"
        onClick={() => {
          localStorage.removeItem("token");
          props.history.push("/");
        }}
      >
        Logoff
      </button>
    </div>
  );
};
export default Logoff;