import React, { useEffect, useState } from "react";
import "./styles/Home.css";
import { useGetAllPeople } from "../hooks/useGetAllPeople";
import { v4 as uuidv4 } from 'uuid';

export const Home = () => {
  const { loading, error, data } = useGetAllPeople();
  const [people, setPeople] = useState();
  useEffect(() => {
    if (data) {
      const tabla = data?.allPeople?.people;
      setPeople(tabla);
    }
  }, [data]);
  console.log(people);
  return (
    <>
      <div className="home-header">
        <span className="home-header-title">Ravn Star Wars Registry</span>
      </div>
      <div style={{ color: "black" }}>
        {loading ? "Cargando" : people?.map(item => <div key={uuidv4()}>{item.name}</div>)}
      </div>
    </>
  );
};
