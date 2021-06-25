import React, {useState} from "react";

function About() {
  const [number1, setNumber1] = useState(0);
  const number2 = 1.5;
  const number3 = 2;
  const number4 = 31;

  let gender = "";
  
  const [total, setTotal] = useState();
  const [total2, setTotal2] = useState();
  const [total3, setTotal3] = useState();
  const [total4, setTotal4] = useState();

  



  // const [total, setTotal] = useState(number1 - number2);
  // const [total2, setTotal2] = useState(number1 - number3);
  // const [total3, setTotal3] = useState(number1 + number4);

  function testin1(){
    if (document.getElementById('checkbox2').checked){
      document.getElementById('checkbox2').checked = false;
    }
    // var value = document.getElementsByTagName('checkbox');
    if (document.getElementById('checkbox').checked){
      console.log("checked")
      gender = "Women";
    } else {
      console.log("not checked")
      gender = ""
    }
    console.log(gender);
  }
   function testin2(){
    if (document.getElementById('checkbox').checked){
      document.getElementById('checkbox').checked = false;
    }
    // var value = document.getElementsByTagName('checkbox');
    if (document.getElementById('checkbox2').checked){
      console.log("checked")

      gender = "Men";

    } else {
      console.log("not checked")
      gender = "";
    }
    console.log(gender);
  }
  function calculateTotal() {
    if (document.getElementById('checkbox2').checked){
      console.log("checked")

      gender = "Men";
    }
  
    if (document.getElementById('checkbox').checked){
      console.log("checked")
      gender = "Women";
    } 
    if(gender === "Men"){
      console.log("calculating men sizing")
      setTotal("Sizing not available");
      setTotal2(number1 - 1);
      setTotal3(number1 + number4);
      setTotal4("Sizing not available");
    }
    if(gender === "Women"){
      console.log("calculating women sizing")
      setTotal(number1 - number2);
      setTotal2(number1 - number3);
      setTotal3(number1 + number4);
      setTotal4(number1 - number2 + "Y");
    }
    // setTotal(number1 - number2);
    // setTotal2(number1 - number3);
    // setTotal3(number1 + number4);
  }

  
  function switchState(){
    setShow(true);
    calculateTotal();
  }
  
  const [show,setShow] = React.useState()

  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div align="center" class="col-lg-7">
              <h1 class="font-weight-light">Enter Shoe Size</h1>
              <div class="form-check form-switch">
                <input class="form-check-input" type="radio" id="checkbox" name="checkbox" onClick={testin1} ></input>
                <label class="form-check-label" for="checkbox">Women's Sizing</label>
              </div>
              <div class="form-check form-switch">
                <input class="form-check-input" type="radio" id="checkbox2" name="checkbox2" onClick={testin2}></input>
                <label class="form-check-label" for="checkbox2">Men's Sizing</label>
              </div>
              
              <br></br>
              <input 
                type="number"
                value={number1}
                onChange={e => setNumber1(+e.target.value)}
                placeholder="0"
              />
              <br></br>
              <br></br>
            <button align="center" type="button" class="btn btn-dark"onClick={()=>switchState()}>Click to Calculate</button>
          </div>
          <div class="col-lg-5">
          {show?
          <div>
            <h2 class="font-weight-light">You can also shop in these sizes:</h2>
              <table align="center">
                <tr>
                  <th>Men :</th>
                  <th>{total}</th>
                  
                </tr>
                <tr>
                  <th>Kids :</th>
                  <th>{total4}</th>
                  
                </tr>
                <tr>
                  <th>EU :</th>
                  <th>{total3}</th>
                  
                </tr>
                <tr>
                  <th>UK :</th>
                  <th>{total2}</th>
                  
                </tr>
              </table>
              
            </div>:null


            
          }
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
