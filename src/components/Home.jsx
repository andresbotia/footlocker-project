import React, {useState} from "react";

function Home() {
  // const [number1, setNumber1] = useState();
  // const [number2, setNumber2] = useState(1.5);
  // const [number3, setNumber3] = useState(2);
  // const [total, setTotal] = useState(number1 - number2);
  // const [total2, setTotal2] = useState(number1 - number3);
  // const [total3, setTotal3] = useState(number1 + number4);
  // function calculateTotal() {
  //   setTotal(number1 - number2);
  //   setTotal2(number1 - number3);
  //   setTotal3(number1 + number4);
  }
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
        
          <div class="col-lg-7">
          <h1 class="font-weight-light">Enter Shoe Size</h1>
          {/* <input
            type="number"
            value={number1}
            onChange={e => setNumber1(+e.target.value)}
            placeholder="0"
          /> */}
          {/* <div>
          <button onClick={calculateTotal}>Click to Calculate</button>
          </div> */}
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">You can also shop in these sizes:</h1>
            
            {/* <table style={{border: "1px solid black"}}>
              <tr>
                <th>Men :</th>
                <th>{total}</th>
                <th></th>
              </tr>
              <tr>
                <th>Kids :</th>
                <th>{total2}</th>
                <th></th>
              </tr>
              <tr>
                <th>EU :</th>
                <th>{total3}</th>
                <th></th>
              </tr>
              <tr>
                <th>UK :</th>
                <th>{total2}</th>
                <th></th>
              </tr>
            </table> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
