import Stock from "./models/Stock";

class Data {
  stocks: Array<Stock> = [
    { id: 1, name: "BMW", price: 150 },
    { id: 2, name: "Marcedeze", price: 125 },
    { id: 3, name: "Ford", price: 100 },
    { id: 4, name: "Toyota", price: 50 }
  ];
}

export default new Data().stocks;
