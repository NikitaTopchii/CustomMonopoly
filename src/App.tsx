
import './App.css';
import MonopolyBoard from "./components/MonopolyBoard";
import ActionButton from "./components/UI/ActionButton/ActionButton";
import React, {useState} from "react";
import OrderForm from "./components/UI/OrderForm/OrderForm";
import CustomModal from "./components/UI/CustomModal/CustomModal";

function App() {

    const [orderState, setOrderState] = useState(false);

    const openOrderModal = () => {
        setOrderState(true)
    }

    return (
      <div className="App">
          <MonopolyBoard />
          <ActionButton onClick={ () => openOrderModal() }>order now</ActionButton>
          <CustomModal visible={orderState} setModal={setOrderState}>
              <OrderForm/>
          </CustomModal>
      </div>
  );
}

export default App;
