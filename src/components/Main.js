import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';
import Sleek from './Sleek';
import { ResultContext } from './Context/ResultContext';
// import Result from './Result';

const Main = () => {
  const navigate = useNavigate();
  const [sleekCount, setSleekCount] = useState(1);
  const [majorSetupCost, setMajorSetupCost] = useState(0); 
  const [inventoryCarryingCharge, setInventoryCarryingCharge] = useState(0); 
  const [sleekData, setSleekData] = useState([{}]);
  const { result, updateResult } = useContext(ResultContext);
  // const [ result , setResult ] = useState({});
  // const { Cost, orderQuantity, optimalTime } = result;

  const handleAddSleek = () => {
  setSleekCount(prevCount => prevCount + 1);
  setSleekData(prevData => [
    ...prevData,
    { buyerInfo: { majorSetupCost0: null } } // Initialize majorSetupCost for the new buyer
  ]);
};

  const handleDeleteSleek = () => {
    if (sleekCount > 1) {
      setSleekCount(prevCount => prevCount - 1);
      setSleekData(prevData => prevData.slice(0, -1));
    }
  };

  const handleSleekChange = (index, newData) => {
    const updatedData = [...sleekData];
    updatedData[index] = newData;
    setSleekData(updatedData);
  };

  const handleMajorSetupCostChange = (event) => {
    setMajorSetupCost(parseFloat(event.target.value));
  };

  const handleInventoryCarryingChargeChange = (event) => {
    setInventoryCarryingCharge(parseFloat(event.target.value));
  };

  const sendDataToBackend = async() => {
    console.log('Sleek data:', sleekData);
    const formattedData = sleekData.map(item => ({
      ...item,
      itemsData: item.itemsData.map(data => ({
        ...data,
        demand: parseInt(data.demand), // Convert to integer
        frequency: parseInt(data.frequency),
        productID: parseFloat(data.productID), // Convert to float
        minorSetupCost: parseFloat(data.minorSetupCost),
        price: parseFloat(data.price),
        // inventoryCarryingCharge: parseFloat(data.inventoryCarryingCharge)
      })),
      buyerInfo: {
        majorSetupCost: majorSetupCost,
        inventoryCarryingCharge : inventoryCarryingCharge
      }
    }));
    try {
      const response = await fetch('https://mjrp-backend.onrender.com/calculate', {
        method: 'POST',
        body: JSON.stringify(formattedData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log('Response from backend:', data);
      updateResult(data);
      navigate('/result'); 
    } catch(error) {
      console.error('Error sending data to backend:', error);
    };
  };

  

  return (
    <div className="main-container">
      <h1>Component Manager</h1>
      <div className="Logistic-group"> <h2>Logistic constants </h2>
      <div className="form-group">
              <label htmlFor={`majorSetupCost`}>Major Setup Cost:</label>
              <input
                type="number"
                id={`majorSetupCost`}
                className="Major_setup_cost"
                name={`majorSetupCost`}
                value={majorSetupCost}
                onChange={handleMajorSetupCostChange}
              />
      </div>
      <div className="form-group">
              <label htmlFor={`inventoryCarryingCharge`}>Inventory Carrying Charge:</label>
              <input
                type="number"
                id={`inventoryCarryingCharge`}
                className="inventory_carrying_charge"
                name={`inventoryCarryingCharge`}
                value={inventoryCarryingCharge}
                onChange={handleInventoryCarryingChargeChange}
              />
      </div>
      </div>
      <div className="sleek-list">
        {[...Array(sleekCount)].map((_, index) => (
          <Sleek
            key={index}
            index={index}
            onChange={handleSleekChange}
          />
        ))}
      </div>
      <div className="Buyer-add-button-container">
        <button className="Buyer-add-button" onClick={handleAddSleek} type="button">
          Add Buyer
        </button>
        <button className="Buyer-delete-button" onClick={handleDeleteSleek} type="button">
          Delete
        </button>
        <button className="Send-button" onClick={sendDataToBackend} type="button">
          Send
        </button>
      </div>
    </div>
  );
};

export default Main;
