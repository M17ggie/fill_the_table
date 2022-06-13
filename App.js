import { useState } from "react";
import OrderData from "./components/OrderData";
import OrderDataForm from "./components/OrderDataForm";

function App() {

  const [data, setData]=useState()

  const getDataHandler=(enteredOrder)=>{
    const newOrder={
      ...enteredOrder
    }
    // console.log(newOrder)
    setData(newOrder)
  }

  return (
    <div className="App">
      <OrderData onAddData={data} />
      <OrderDataForm onGetData={getDataHandler} />
    </div>
  );
}

export default App;
