function BoysName({ data = [] }) {
  const boyslist = data.map(
    (item) => (item.sex = "m" ? <li key={item.id}>{item.name}</li> : null)
  );

  return <ul>{boyslist}</ul>;
}

export default BoysName;
