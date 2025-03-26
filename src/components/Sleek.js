import React, { useState } from 'react';
import './Sleek.css';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';
import Item from './Item';

const Sleek = ({ index,  onChange }) => {
  const [buyerInfo, setBuyerInfo] = useState({});
  const [itemsData, setItemsData] = useState([{}]);

  const handleAddItem = () => {
    setItemsData(prevData => [...prevData, {}]);
  };

  const handleDeleteItem = () => {
    if (itemsData.length > 1) {
      setItemsData(prevData => prevData.slice(0, -1));
    }
  };

  const handleBuyerInfoChange = (event) => {
    const { name, value } = event.target;
    setBuyerInfo(prevInfo => ({
      ...prevInfo,
      [name]: value
    }));
    onChange(index, { buyerInfo, itemsData });
  };

  const handleItemChange = (itemIndex, itemData) => {
    const updatedItemsData = [...itemsData];
    updatedItemsData[itemIndex] = itemData;
    setItemsData(updatedItemsData);
    onChange(index, { buyerInfo, itemsData: updatedItemsData });
  };

  return (
    <div className="container">
      <div className="item-container">
        <div className="form-container">
          <h2>Add Buyer</h2>
          <form>
            <div className="form-group">
              <label htmlFor={`buyerName${index}`}>Buyer Name:</label>
              <input
                type="text"
                id={`buyerName${index}`}
                className="Buyer-input"
                name={`buyerName${index}`}
                value={buyerInfo[`buyerName${index}`] || ''}
                onChange={handleBuyerInfoChange}
              />
            </div>
            
          </form>
        </div>
        <div className="sleek-list">
          {itemsData.map((itemData, itemIndex) => (
            <Item
              key={itemIndex}
              index={itemIndex}
              itemData={itemData}
              onChange={handleItemChange}
            />
          ))}
        </div>
        <div className="button-container">
          <button className="add-button" onClick={handleAddItem} type="button">
            <FaPlus />
          </button>
          <button className="delete-button" onClick={handleDeleteItem} type="button">
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sleek;