import Display from "./components/Display";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [calcVal, setCalcVal] = useState("");
  // const [previousOperator, setPreviousOperator] = useState(null);

  const onButtonClick = (buttonText) => {

    if (buttonText === "c") {
      setCalcVal("");
    }
    else if (buttonText === "=") {
      const result = eval(calcVal);
      setCalcVal(result);
    } else {
      const newDisplayVal = calcVal + buttonText;
      setCalcVal(newDisplayVal);
    }


    // if(buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/")
    // {
    //   setPreviousOperator(buttonText);
    //   setCalcVal(calcVal.slice(0, -1) + buttonText);
    // }
  };

  return (
    <>
      <div className={styles.calculator}>
        <Display displayVal={calcVal} />
        <ButtonsContainer onButtonClick={onButtonClick} />
      </div>
    </>
  );
}

export default App;
