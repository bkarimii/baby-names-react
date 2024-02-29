import logo from "./logo.svg";
import "./App.css";
import babyNamesData from "./Data/babyNamesData.json";
import GirlsName from "./Components/GirlsPicker";
import BoysName from "./Components/‌BoysPicker";
function App() {
  // const girlsList = babyNamesData.map((item) =>
  //   item.sex == "f" ? <li key={item.id}>{item.name}</li> : null
  // );
  return (
    <>
      <h2>Girls:</h2>
      <GirlsName data={babyNamesData} />
      <h2>Boys:</h2>
      <BoysName data={babyNamesData} />
    </>
  );
}

export default App;
