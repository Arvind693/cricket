

import { useState } from "react";
var count = 0
function App() {
  let [data, change] = useState({ Score: 76 })
  let [wick, changewicket] = useState({ Wicket: 2 })
  let [balls, changeball] = useState({ Ball: 50 })
  let add1 = (value) => {
    change({ Score: data.Score + value })
  }
  let addWicket = (value) => {
    if(wick.Wicket>=12){
      return 
    }
    else{
      changewicket({ Wicket: wick.Wicket + value })
    }
    
  }


  let addball = (value) => {

    if (count === 5) {
      changeball({ Ball: balls.Ball + value + 0.4 })
      count = 0
     
    }
    else {
      changeball({ Ball: balls.Ball + value })
      count = count + 1
      
    }
  }


  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{""}
          <h1 className="scoreCount">
            {
              // show "score" here
              data.Score
            }
          </h1>
        </div>
        <div>
          Wicket:{""}
          <h1 className="wicketCount">
            {
              // show wicket here
              wick.Wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              balls.Ball.toFixed(1)
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={() => { add1(1) }}>Add 1</button>
        <button className="addScore4" onClick={() => { add1(4) }}>Add 4</button>
        <button className="addScore6" onClick={() => { add1(6) }}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={() => { addWicket(1) }}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={() => { addball(0.1) }}>Add 1</button>
      </div>

      {data.Score > 100 ? "India won" : " "}
    </div>
  );
}

export default App;