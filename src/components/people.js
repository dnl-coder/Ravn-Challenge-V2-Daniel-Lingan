import React, { useState, useEffect } from "react";
import { useGetAllPeople } from "../hooks/useGetAllPeople";
import { v4 as uuidv4 } from "uuid";

export const People = () => {
  const { loading, error, data } = useGetAllPeople();
  const [people, setPeople] = useState();
  useEffect(() => {
    if(error) return <div>Failed to Load Data</div>
    if (data) {
      const tabla = data?.allPeople?.people;
      setPeople(tabla);
    }
  }, [data]);
  console.log(people);
  return (
    <div>
      {loading ? "Spinner" : people?.map((item) => {
        console.log(item?.species?.name);
        return (
          <div key={uuidv4()}>
            <div>{item.name}</div>
            <div>{item.species?.name ?? "Human"} from {item.homeworld.name}</div>
          </div>
        );
      })}
    </div>
  );
};
