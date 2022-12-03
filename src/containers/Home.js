import React, { useState } from "react";
import "./styles/Home.css";
import { People } from "../components/people"

export const Home = () => {
  const [loading, setLoading] = useState(false)

  return (
    <>
      <div className="home-header">
        <span className="home-header-title">Ravn Star Wars Registry</span>
      </div>
      <div style={{ color: "black" }}>
        {loading ? "Cargando" : <People />}
      </div>
    </>
  );
};
