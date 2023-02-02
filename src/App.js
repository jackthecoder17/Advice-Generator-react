// import logo from './logo.svg';
import './App.css';
import desktop from "./images/pattern-divider-desktop.svg";
import mobile from "./images/pattern-divider-mobile.svg";
import dice from "./images/icon-dice.svg"
import { useEffect, useState} from "react";

function App() {

  // const [adviceDataID, setAdviceDataID] = useState(" ");
  const [advice, setAdvice] = useState(" ");
  const fetchData = async () => {
   fetch("https://api.adviceslip.com/advice").then((response)=> response.json()).then((jsonData)=> setAdvice(jsonData.slip)).catch((error) => console.log(error))
    // fetch("https://api.adviceslip.com/advice"y).then((response) => response.json).then((resdata) => {
    //   setAdviceDataID(`Advice ${resdata.id}`);
    //   setAdvice(resdata.advice)
    // })
  }
  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <div className="container">
      <div>
        <h1 id="title">
          Advice #{advice.id}
        </h1>
        <p id="text">
          {advice.advice}
          {/* {advice} */}
        </p>
        <picture>
          <source media="(min-width:768px)" srcSet={desktop} />
          <img src={mobile} alt="" />
        </picture>
        <div>
          <button onClick={fetchData}>
            <img src={dice} alt ="" />
          </button>
        </div>
        
      </div>
    <div className="attribution">
      <p>Note: Advice is cached for 2 seconds. Any repeat-request within 2 seconds will return the same piece of advice.😁</p>
      Opedev
    </div>



    </div>
  );
}

export default App;
