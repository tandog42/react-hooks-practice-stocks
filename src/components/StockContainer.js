import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleAddToPortfolio }) {
 console.log(stocks)
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(stock => (
        <Stock
          onStockClick={handleAddToPortfolio}
          singleStock={stock}
          key ={stock.id}
        
        />
      ))}
    </div>
  );
}

export default StockContainer;
