import React from "react";

const Welcome = ({ handleLogout }) => {
  return (
    <section className="hero">
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogout}></button>
      </nav>
    </section>
  );
};

export default Welcome;
