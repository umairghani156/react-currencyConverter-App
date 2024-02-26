import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useRef } from 'react';
import "./App.css";
import { Col, Row } from "antd";
import Answer from "./components/Answer";
import DataRenderingFrom, { DataRenderingTo } from "./components/OptionData";
import RenderRupees from "./components/RenderRupees";

function App() {
  const amount = useRef("")
  const firstDrapdownRef = useRef("");
  const secondDropdownRef = useRef("");
  const [isTrue, setIsTrue] = useState(false)
  const [isAvailableData, setIsAvailableData] = useState(false);
  const [singleData, setSingleData] = useState()
  const [data, setData] = useState([])
  const [currencyData, setCurrencyData] = useState([])

  const currencyCode = [
    "USD",
    "AED",
  "AFN",
  "ALL",
  "AMD",
  "ANG",
  "AOA",
  "ARS",
  "AUD",
  "AWG",
  "AZN",
  "BAM",
  "BBD",
  "BDT",
  "BGN",
  "BHD",
  "BIF",
  "BMD",
  "BND",
  "BOB",
  "BRL",
  "BSD",
  "BTN",
  "BWP",
  "BYN",
  "BZD",
  "CAD",
  "CDF",
  "CHF",
  "CLP",
  "CNY",
  "COP",
  "CRC",
  "CUP",
  "CVE",
  "CZK",
  "DJF",
  "DKK",
  "DOP",
  "DZD",
  "EGP",
  "ERN",
  "ETB",
  "EUR",
  "FJD",
  "FKP",
  "FOK",
  "GBP",
  "GEL",
  "GGP",
  "GHS",
  "GIP",
  "GMD",
  "GNF",
  "GTQ",
  "GYD",
  "HKD",
  "HNL",
  "HRK",
  "HTG",
  "HUF",
  "IDR",
  "ILS",
  "IMP",
  "INR",
  "IQD",
  "IRR",
  "ISK",
  "JEP",
  "JMD",
  "JOD",
  "JPY",
  "KES",
  "KGS",
  "KHR",
  "KID",
  "KMF",
  "KRW",
  "KWD",
  "KYD",
  "KZT",
  "LAK",
  "LBP",
  "LKR",
  "LRD",
  "LSL",
  "LYD",
  "MAD",
  "MDL",
  "MGA",
  "MKD",
  "MMK",
  "MNT",
  "MOP",
  "MRU",
  "MUR",
  "MVR",
  "MWK",
  "MXN",
  "MYR",
  "MZN",
  "NAD",
  "NGN",
  "NIO",
  "NOK",
  "NPR",
  "NZD",
  "OMR",
  "PAB",
  "PEN",
  "PGK",
  "PHP",
  "PKR",
  "PLN",
  "PYG",
  "QAR",
  "RON",
  "RSD",
  "RUB",
  "RWF",
  "SAR",
  "SBD",
  "SCR",
  "SDG",
  "SEK",
  "SGD",
  "SHP",
  "SLE",
  "SLL",
  "SOS",
  "SRD",
  "SSP",
  "STN",
  "SYP",
  "SZL",
  "THB",
  "TJS",
  "TMT",
  "TND",
  "TOP",
  "TRY",
  "TTD",
  "TVD",
  "TWD",
  "TZS",
  "UAH",
  "UGX",
  "UYU",
  "UZS",
  "VES",
  "VND",
  "VUV",
  "WST",
  "XAF",
  "XCD",
  "XDR",
  "XOF",
  "XPF",
  "YER",
  "ZAR",
  "ZMW",
  "ZWL"
  ]
  
  
  
  useEffect(() => {
  async  function rupeesConverter() {
   
 await fetch(`https://v6.exchangerate-api.com/v6/0ff64c606cb39bb026c371e0/latest/USD`)
 .then(resp => resp.json())
 .then((data) => {
   console.log(data);
   setSingleData(data)
 });
   }
   rupeesConverter()
 }, []);
 
 const calCulateCurrency = () => {
      const fromCurrency = firstDrapdownRef.current.value;
      const toCurrency = secondDropdownRef.current.value;
      const currencyAmount = amount.current.value;
      console.log("fromCurrency",fromCurrency );
      console.log("toCurrency", toCurrency);
      console.log("Amount", currencyAmount);
     console.log("Data", singleData);
      if(currencyAmount.length === 0){
        alert("Please enter a valid number")
      }else{
        let fromExchangeRate = singleData.conversion_rates[fromCurrency];
        let toExchangeRate = singleData.conversion_rates[toCurrency];
        let convertedAmount = (currencyAmount / fromExchangeRate) * toExchangeRate;
        console.log("convertedAmount",convertedAmount);
        console.log("fromExchangeRate",fromExchangeRate);
        console.log("toExchangeRate",toExchangeRate);
        const addData = [...currencyData]
        addData.unshift({
         fromCountryCode: fromCurrency,
         toCurrencyCode: toCurrency,
         userAmount: currencyAmount,
         oneFromCurrency: `${fromExchangeRate}`,
         oneToCurrency: `${toExchangeRate}`,
         convertedAmount,
        })
        setCurrencyData(addData)
        setIsAvailableData(!isAvailableData)
      }
     
    
      
      
      
 }
 const clearBtn = () =>{
     setCurrencyData([])
     setIsAvailableData(!isAvailableData)
 }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent:'center',
        padding: "10px",
        width:"100%",
        height:"100vh"

      }}
    >
      <div style={{backgroundColor: "#f0f0f0", border:'2px solid #afafaf', borderRadius:"10px", padding:'5px'}}>
      <h1 style={{backgroundColor:"#b64b39", color:"#ffffff", fontWeight:"700", width:"100%", textAlign:"center",padding:'10px', borderRadius:"10px", fontSize:"24px"}}>Currency Converter</h1>
      <div style={{ display: "flex",flexDirection:"column",alignItems:"center", gap: "10px", padding:"20px"}}>
        <p style={{fontStyle:"italic", color:"blue", fontSize:"18px", fontWeight:"600",borderBottom:"2px solid blue"}}>Currency Key</p>
        <p style={{fontSize:"22px", margin:"0", fontWeight:"500"}}>Value to Convert</p>
        <input ref={amount} className="w-15 hello" type="Number"/>
        <div style={{display:"flex", flexDirection:"column", width:"100%", gap:"15px"}}>
          <div style={{display:"flex" }}>
          <label htmlFor="rupees1"style={{fontSize:"20px",fontFamily:"sans-serif", fontWeight:"600"}}>From:</label>
        <select name="" id="rupees1" ref={firstDrapdownRef} className="hello"  style={{width:"100%"}}>
           {
            currencyCode?.map((val, ind)=> <DataRenderingFrom key={ind} data={val}/>)
           }
        </select>
        </div>
        <div style={{display:"flex", gap:"27px" }}>
        <label htmlFor="rupees2" style={{fontSize:"20px",fontFamily:"sans-serif", fontWeight:"600"}}>To:</label>
        <select name="" id="rupees2" ref={secondDropdownRef} className="hello" style={{width:"100%"}}>
          {
            currencyCode?.map((val, index)=> <DataRenderingTo key={index} data={val}/>)
          }
        </select>
        </div>
        <div style={{width:"100%", display:"flex", justifyContent:"space-between"}}>
          <button className="clearBtn" onClick={()=> clearBtn()} style={{border:"2px solid #afafaf", padding:"5px 10px",fontWeight:"600", borderRadius:"7px"}}>Clear</button>
          <button className="addBtn" onClick={()=> calCulateCurrency()} style={{border:"2px solid #afafaf", padding:"5px 10px",fontWeight:"600", borderRadius:"7px"}}>Calculate</button>
        </div>
        </div>
        <Answer isAvailableData={isAvailableData} setIsAvailableData={setIsAvailableData} currencyData={currencyData} setCurrencyData={setCurrencyData}/>
      </div>
      </div>
    </div>
  );
}

export default App;
