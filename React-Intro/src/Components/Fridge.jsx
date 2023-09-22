import React from "react";

// Card Component
function Card(props) {
  return (
    <div className="card" style={{width:'50%', backgroundColor:'red', padding:'2rem', textAlign:'center', marginBottom:'1rem'}}>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      {/* <img src={} alt="" /> */}
    </div>
  );
}

// Fridge Component
function Fridge(props) {
  const { contents, temperature, isDoorOpen, shelfPosition } = props;

  return (
    <div className="fridge" style={{width: '100%', height:'100vh', backgroundColor:'blue'}}>
      <Card title="Section A" content={`Contents: ${contents}`} />
      <Card title="Section B" content={`Temperature: ${temperature}°C`} />
      <Card
        title="Section C"
        content={`Door Status: ${isDoorOpen ? "Open" : "Closed"}`}
      />
      <Card title="Section D" content={`Shelf Position: ${shelfPosition}`} />
    </div>
  );
}

export default Fridge;
