const Conditions = () => {
  const boolean = true;
  return <>
    <div className={`${boolean ? "bg-orange-500" : "bg-red-500"}`}>testing</div>
  </>;
};

export default Conditions;
