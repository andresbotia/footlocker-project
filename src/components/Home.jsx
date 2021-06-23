import React, {useState} from "react";

function Home() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState(1.5);
  const [number3, setNumber3] = useState(2);
  // const number2 = 1.5;
  // const number3 = 2;
  const number4 = 31;
  const [total, setTotal] = useState(number1 - number2);
  const [total2, setTotal2] = useState(number1 - number3);
  const [total3, setTotal3] = useState(number1 + number4);

  function calculateTotal() {
    setTotal(number1 - number2);
    setTotal2(number1 - number3);
    setTotal3(number1 + number4);
  }
  return (
    <div className="home">
      <header align="center">
        
        <br></br>
  
          <h2>Please Enter Shoe Size</h2>
          <div className="number-inputs">
          <input
            
            type="number"
            value={number1}
            onChange={e => setNumber1(+e.target.value)}
            placeholder="0"
          />
          <button onClick={calculateTotal}>Enter</button>
          {/* <input
            type="number"
            value={number2}
            onChange={e => setNumber2(+e.target.value)}
            placeholder="0"
          /> */}
          </div>

        {/* <button onClick={calculateTotal}>Calculate Shoe Size</button> */}

        <h2>Men Shoe size: {total}</h2>
        <h2>Kids Shoe size: {total2}</h2>
        <h2>EU Shoe size: {total3}</h2>
        <h2>UK Shoe size: {total2}</h2>
         
      </header>
      <body>
      </body>
      {/* <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
