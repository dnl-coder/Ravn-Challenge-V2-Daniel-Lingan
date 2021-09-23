import React from 'react';
import './styles/Home.css';
import { useGetAllPeople } from '../hooks/useGetAllPeople';

export const Home = () => {
  const { loading, error, data } = useGetAllPeople();
  console.log(data);

  return (
    <>
      <div className="home-header">
        <span className="home-header-title">Ravn Star Wars Registry</span>
      </div>
    </>
  );
}