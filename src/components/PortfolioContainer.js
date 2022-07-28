import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolioStock, deletedPortfolioStock }) {
  const stocks = portfolioStock.map(stock => {
    return (
      <Stock
        onStockClick={deletedPortfolioStock}
        singleStock={stock}
        key={stock.id}
      />
    );
  });
  return (
    <div>
      <h2>My Portfolio</h2>

      {stocks}
    </div>
  );
}

export default PortfolioContainer;
