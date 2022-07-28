import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [sortby, setSortby] = useState("Alphabetically");
  const [portfolioStock, setPortfolioStock] = useState([]);
  const [stocksFilter, setStocksFilter] = useState("Tech");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(r => r.json())
      .then(stock => setStocks(stock));
  }, []);

  

  const sortedStocks = [...stocks].sort((stockA, stockB) => {
    if (sortby === "Alphabetically") {
      return stockA.ticker.localeCompare(stockB.ticker);
    } else {
      return stockA.price - stockB.price;
    }

    // console.log("stock1", stockA)
    // console.log("stock2", stockB)
  });
  const filterStocks = sortedStocks.filter(stock => {
    return stock.type === stocksFilter;
  });
  // function alphaFilteredStocks() {
  //   if (sortby === "Alphabetically") {
  //     const mapped = stocks.sort((a, b) => {
  //       return a.ticker.localeCompare(b.ticker);
  //     });
  //     // console.log(mapped)
  //     // console.log(stocks)
  //     setStocks(mapped);
  //   } else {
  //     return stocks;
  //   }
  // }

  function handleAddToPortfolio(stock) {
    setPortfolioStock([...portfolioStock, stock]);
  }
  function deletedPortfolioStock(stock) {
    const deleteListing = portfolioStock.filter(l => l.id !== stock.id);
    setPortfolioStock(deleteListing);
  }
  console.log(sortedStocks);
  return (
    <div>
      <SearchBar
        setStocksFilter={setStocksFilter}
        sortby={sortby}
        setSortby={setSortby}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={filterStocks}
            handleAddToPortfolio={handleAddToPortfolio}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            deletedPortfolioStock={deletedPortfolioStock}
            portfolioStock={portfolioStock}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
