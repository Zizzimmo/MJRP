import React, { useContext } from 'react';
import { ResultContext } from './Context/ResultContext';
import './Result.css';

const Result = () => {
    const { result } = useContext(ResultContext);
  console.log("Result object:", result); // Log the entire result object
  const objectFromArray = result[0];
  
  const { C: Cost, Q: orderQuantity, T_p: optimalTime } = objectFromArray;
  // const Cost = result.C;
  // const orderQuantity = result.Q;
  // const optimalTime = result.T_p;

  console.log("Cost:", Cost); // Log individual properties
  console.log("Order Quantity:", orderQuantity);
  console.log("Optimal Time:", optimalTime);

  return (
    <div>
      {result ? ( // Check if result is available
        <div className="result-container">
            <p>Cost: {Cost}</p>
            <p className="quantity">Quantity: {Array.isArray(orderQuantity) ? orderQuantity.join(', ') : orderQuantity}</p> {/* Display order quantity as a comma-separated list if it's an array */}
            <p>Optimal Time: {optimalTime}</p>
        </div>
      ) : (
        <p>Loading data...</p> // Display loading message while data is unavailable
      )}
    </div>
  );
};

export default Result;
