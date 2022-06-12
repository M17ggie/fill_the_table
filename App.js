import { useState } from "react";
import OrderData from "./components/OrderData";
import OrderDataForm from "./components/OrderDataForm";

function App() {

  const [data, setData]=useState()

  const getDataHandler=(enteredData)=>{
    const orderData={
      ...enteredData,
      id: Math.random().toString()
    }
    // console.log(orderData);
    setData(orderData)
    console.log(data)
  }

  return (
    <div className="App">
      <OrderData onAddData={data} />
      <OrderDataForm onGetData={getDataHandler} />
    </div>
  );
}

export default App;
