import { useRef, useState } from "react";
import InputFormField from "./components/InputFormField";
import InputToField from "./components/InputToField";
import useCurrency from "./hooks/useCurrency";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("");

  const amount = useRef();
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencies = useCurrency(from);
  // const options = Object.keys(currencies);

  const convert = () => {
    const amountValue = amount.current.value;
    if (currencies && to) {
      setConvertedAmount(amountValue * (currencies[to] || 1));
    }
  };

  return (
    <>
      <div className="card bg-dark">
        <div className="card-body ">
          <h1 className="card-title mb-4 text-white">Currency Converter</h1>
          <InputFormField
            currencies={currencies}
            convert={convert}
            amount={amount}
            setFrom={setFrom}
            from={from}
          />
          <InputToField
            currencies={currencies}
            convertedAmount={convertedAmount}
            setTo={setTo}
            to={to}
          />
        </div>
      </div>
    </>
  );
}

export default App;
