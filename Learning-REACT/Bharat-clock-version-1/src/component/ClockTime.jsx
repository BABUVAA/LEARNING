let ClockTime =()=>{
  let time =new Date();
  return <h3 className="lead">This is the current time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</h3>
};
export default ClockTime