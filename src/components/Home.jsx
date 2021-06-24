import React, {useState} from "react";

function Home() {

  const [number1, setNumber1] = useState();
  const number2 = 1.5;
  const number3 = 2;
  const number4 = 31;

  

  const [total, setTotal] = useState(number1 - number2);
  const [total2, setTotal2] = useState(number1 - number3);
  const [total3, setTotal3] = useState(number1 + number4);
  function calculateTotal() {
    setTotal(number1 - number2);
    setTotal2(number1 - number3);
    setTotal3(number1 + number4);
  }

  
  function switchState(){
    setShow(true);
    calculateTotal();
  }
  
  const [show,setShow] = React.useState()

 
  // let result = document.querySelector('h2')
  // selection.addEventListener('change',()=>{
  //   result.innerText = selection.options[selection.selectedIndex].text;
  // })
  let e = document.querySelector("select")
  
  
console.log("E E E E",e);

  return (
    <div className="home">
      <div class="container">
        <div align="center">
          <br></br>
        <h1 class="font-weight-light">Enter Shoe Size</h1>

        {/* <select id="select">
          <option value="men">Men's size</option>
          <option value="women">Women's size</option>
        </select> */}
          <input 
            type="number"
            value={number1}
            onChange={e => setNumber1(+e.target.value)}
            placeholder="0"
          />
          

          <div>
            <br></br>
          {/* <button onClick={calculateTotal}>Click to Calculate</button> */}
          {/* {
            show?<h1>Hello testing</h1>:null
          } */}
          {/* <button onClick={()=>setShow(!show)}>toggle test</button> */}
          <button type="button" class="btn btn-dark"onClick={()=>switchState()}>Click to Calculate</button> 
         
          </div>

            <br></br><br></br><br></br><br></br>
          {show?
          <div>
            <h1 class="font-weight-light">You can also shop in these sizes:</h1>
            {/* <h5>Kids sizes end 7.5 and men sizes start at 7.5</h5> */}
              
              <table >
                <tr>
                  <th>Men :</th>
                  <th>{total}</th>
                  
                </tr>
                <tr>
                  <th>Kids :</th>
                  <th>{total}Y</th>
                  
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
              
              {/* <p><a href={link}><button class="btn btn-dark">Show in Men's sizes</button></a></p> */}
              

              {/* <p><a href="https://www.footlocker.com/search?query=womens+shoes%3Arelevance%3Agender%3A200001%3AproductType%3A200005%3Asize%3A08.5"><button class="btn btn-dark">Show in Men's sizes</button></a></p>
               */}
              {/* <p><a href="https://www.footlocker.com/search?query=womens+shoes%3Arelevance%3Agender%3A200001%3AproductType%3A200005%3Asize%3A08.5">SHop your womens size</a></p> */}
            </div>:null


            
          }
        </div>
      </div>
      {/* <div align='center'>
       

          <br></br>
        <select id="inputType">
          <option value="meter">Meter</option>
          <option value="kilometer">kilometer</option>
          <option value="centimeter">centimeter</option>
        </select>
        <select id="resultType">
          <option value="meter">Meter</option>
          <option value="kilometer">kilometer</option>
          <option value="centimeter">centimeter</option>
        </select>
      </div> */}
    </div>
  );
}
export default Home;
