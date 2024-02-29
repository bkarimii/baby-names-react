// import React from react;
// import babyNamesData from "./Data/babyNamesData.json";

function GirlsName({ data = [] }) {
  const girlsList = data.map((item) =>
    item.sex == "f" ? <li key={item.id}>{item.name}</li> : null
  );

  return <ul>{girlsList}</ul>;
}

export default GirlsName;
