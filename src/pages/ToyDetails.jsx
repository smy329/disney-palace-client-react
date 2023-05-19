import React from 'react';
import { useParams } from 'react-router-dom';

const ToyDetails = () => {
  const params = useParams();
  return <div>ToyDetails: {params.id}</div>;
};

export default ToyDetails;
