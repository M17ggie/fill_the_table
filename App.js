import { useState } from "react";
import OrderData from "./components/OrderData";
import OrderDataForm from "./components/OrderDataForm";

const orders = [{
  key: Math.random().toString(),
  orderId: 1,
  name: 'Black Cat',
  purchaseDate: '2022-12-06',
  deliveryDate: '2022-11-05',
  quantity: 5,
  amount: 450
},
{
  key: Math.random().toString(),
  orderId: 2,
  name: 'Maggie',
  purchaseDate: '2022-15-06',
  deliveryDate: '2022-10-05',
  quantity: 10,
  amount: 10000
},
{
  key: Math.random().toString(),
  orderId: 3,
  name: 'Danny',
  purchaseDate: '2022-15-06',
  deliveryDate: '2022-17-05',
  quantity: 50,
  amount: 50000
}]

function App() {

  const [data, setData] = useState(orders)

  const getDataHandler = (enteredOrder) => {
    
    setData(prevOrder=>[...prevOrder, enteredOrder])
  }

  return (
    <div className="App">
      <OrderData onAddData={data} />
      <OrderDataForm onGetData={getDataHandler} />
    </div>
  );
}

export default App;
