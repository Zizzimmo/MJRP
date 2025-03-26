import React, { useState } from 'react'
import './Item.css';

const Item = ({ index, itemData, onChange }) => {
    const [productID, setProductID] = useState(itemData.productID || 0);
    const [demand, setDemand] = useState(itemData.demand || 0);
    const [minorSetupCost, setMinorSetupCost] = useState(itemData.minorSetupCost || 0);
    const [price, setPrice] = useState(itemData.price || 0);
    const [ frequency, setFrequency] = useState(itemData.frequency || 0);
    // const [ inventoryCarryingCharge, setInventoryCarryingCharge ] = useState(itemData.inventoryCarryingCharge || 0);
    
    const handleItemChange = () => {
      onChange(index, { productID, demand, minorSetupCost, price, frequency });
    };

   return (
    <div className="form-container">
          <h2>Add Product</h2>
          <form>
            <div className="form-group">
              <label htmlFor="productID">Product ID:</label>
              <input type="number" id="productID" className="product_id_input" value={productID} onChange={e => setProductID(e.target.value)} onBlur={handleItemChange} />
            </div>
            <div className="form-group">
              <label htmlFor="demand">Demand:</label>
              <input type="number" id="demand" className="Demand_input" value={demand} onChange={e => setDemand(e.target.value)} onBlur={handleItemChange} />
            </div>
            <div className="form-group">
              <label htmlFor="minorSetupCost">Minor Setup Cost:</label>
              <input type="number" id="minorSetupCost" className="Minor_Setup_cost_input" value={minorSetupCost} onChange={e => setMinorSetupCost(e.target.value)} onBlur={handleItemChange} />
            </div>
            <div className="form-group">
              <label htmlFor="holdingCost">Price:</label>
              <input type="number" id="VariableCost" className="price_input" value={price} onChange={e => setPrice(e.target.value)} onBlur={handleItemChange} />
            </div>
            {/* <div className="form-group">
              <label htmlFor="InventoryCarryingCharge">Inventory Carrying Charge:</label>
              <input type="number" id="InventoryCarryingCharge" className="Inventory_carrying_charge_input" value={inventoryCarryingCharge} onChange={e => setInventoryCarryingCharge(e.target.value)} onBlur={handleItemChange} />
            </div> */}
            <div className="form-group">
              <label htmlFor="frequency">Frequency:</label>
              <input type="number" id="Frequency" className="Frequency" value={frequency} onChange={e => setFrequency(e.target.value)} onBlur={handleItemChange} />
            </div>
          </form>
        </div>
  )
}

export default Item;