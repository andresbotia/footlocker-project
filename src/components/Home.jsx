import React, {useState} from "react";
import { Link } from "react-router-dom";


function Home() {

  const [number1, setNumber1] = useState(0);
  const number2 = 1.5;
  const number3 = 2;
  const number4 = 31;

  let gender = "";
  
  
  const [total, setTotal] = useState();
  const [total2, setTotal2] = useState();
  const [total3, setTotal3] = useState();
  const [total4, setTotal4] = useState();
  const [total5, setTotal5] = useState();
  const [temp,setTemp] = useState();
  const [temp2,setTemp2] = useState();

  
  // const[link,setLink] =useState();
  let link ="https://www.footlocker.com/category/mens/shoes.html";
  let link2 = "https://www.footlocker.com/category/womens/shoes.html"
  let kidsLink = "https://www.footlocker.com/category/kids/shoes/grade-school.html";



  

  function testin1(){
    if (document.getElementById('checkbox2').checked){
      document.getElementById('checkbox2').checked = false;
    }
    if (document.getElementById('checkbox3').checked){
      document.getElementById('checkbox3').checked = false;
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
    if (document.getElementById('checkbox3').checked){
      document.getElementById('checkbox3').checked = false;
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
  function testin3(){
    if (document.getElementById('checkbox').checked){
      document.getElementById('checkbox').checked = false;
    }
    if (document.getElementById('checkbox2').checked){
      document.getElementById('checkbox2').checked = false;
    }
    // var value = document.getElementsByTagName('checkbox');
    if (document.getElementById('checkbox3').checked){
      console.log(" Kids has been checked")
      console.log("current gender var",gender)

      gender = "Kids";

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
    if (document.getElementById('checkbox3').checked){
      console.log("checked")
      gender = "Kids";
    } 
    if(gender === "Men"){
      console.log("calculating men sizing")
      setTotal5(number1+number2)
      setTotal(number1)
      setTotal4("sizing not available")
      // if((number1 > 6)){
      //   setTotal(number1);
      // setTotal4("Sizing not available");
      // }
      // // setTotal(number1);
      // // setTotal4("Sizing not available");
      // if((number1 < 6)){
      //   setTotal("Sizing not available")
      //   setTotal4(number1 + "Y")
      // }
      // setTotal(number1);
      setTotal2(number1 - 1);
      setTotal3(number1 + number4);
      // setTotal4("Sizing not available");
      if((number1 < 6.0) || (number1 > 18.0) ){
        setTotal("Invalid size")
        setTotal2("Invalid size")
        setTotal3("Invalid size")
        setTotal4("Invalid size")
        setTotal5("Invalid size")
      }
    }
    if(gender === "Women"){
      setTotal5(number1)
      console.log("calculating women sizing")
      if(((number1-number2)<6) ){
        setTotal("sizing not available");
      }else if((number1-number2)>6){
        setTotal(number1 - number2);
      }
      if(((number1 - number2) < 3.5)){
        setTotal4("sizing not available");
      }else if((number1 - number2) > 6.0){
        setTotal4("sizing not available");
      }else{
        setTotal4(number1 - number2 + "Y");
      }
      setTotal2(number1 - number3);
      setTotal3(number1 + number4);
      // setTotal4(number1 - number2 + "Y");
      if((number1 < 5.0) || (number1 > 12.0) ){
        setTotal("Invalid size")
        setTotal2("Invalid size")
        setTotal3("Invalid size")
        setTotal4("Invalid size")
        setTotal5("Invalid size")
      }
    }
    if(gender === "Kids"){
      console.log("calculating kids sizing")
      setTotal("Sizing not available");
      setTotal2(number1 - 0.5);
      setTotal3(number1 + number4);
      setTotal4(number1);
      setTotal5(number1 +number2)
      //setting variable condition check
      if((number1 < 3.5) || (number1 > 7.0) ){
        setTotal("Invalid size")
        setTotal2("Invalid size")
        setTotal3("Invalid size")
        setTotal4("Invalid size")
        setTotal5("Invalid size")
      }

      // console.log("calculating kids sizing")
      // setTotal("Sizing not available");
      // setTotal2(number1 - 0.5);
      // setTotal3(number1 + number4);
      // setTotal4(number1);
      // setTotal5(number1 +number2)
    }
    // setTotal(number1 - number2);
    // setTotal2(number1 - number3);
    // setTotal3(number1 + number4);
  }



  function settingLink(){
    if(gender === "Women"){
      if((number1-number2) === Math.floor(number1-number2)){
        console.log("THIS IS AN whole number")
        console.log("number1 inside is ", number1)
        if((number1-number2) <10){
          link = ("https://www.footlocker.com/search?query=%3Arelevance%3Agender%3A200000%3AproductType%3A200005%3Asize%3A0" + (number1-number2) + ".0")
          console.log("link test 1",link)
        }else if((number1-number2) >=10){
          link = ("https://www.footlocker.com/search?query=%3Arelevance%3Agender%3A200000%3AproductType%3A200005%3Asize%3A" + (number1-number2) + ".0")
          // setLink(link1)
          console.log("link test 2",link)
       }
      }else{
        console.log("this is a decimal")
        if((number1-number2) <10){
          link = ("https://www.footlocker.com/search?query=%3Arelevance%3Agender%3A200000%3AproductType%3A200005%3Asize%3A0" + (number1-number2))
          
          console.log("link test 3",link)
        }else if((number1-number2) >10){
          link = ("https://www.footlocker.com/search?query=%3Arelevance%3Agender%3A200000%3AproductType%3A200005%3Asize%3A" + (number1-number2))
          
          console.log("link test 4",link)
       }

       
      }
    }
    if(gender === "Men"){
      if((number1+number2) === Math.floor((number1+number2))){
        console.log("THIS IS AN whole number")
        
        if((number1+number2) <10){
          link2 = ("https://www.footlocker.com/search?query=womens+shoes%3Arelevance%3Agender%3A200001%3AproductType%3A200005%3Asize%3A0" + (number1+number2) + ".0")
          console.log(link2)
          console.log("link test 1",link2)
        }else if((number1+number2) >10){
          link2 = ("https://www.footlocker.com/search?query=womens+shoes%3Arelevance%3Agender%3A200001%3AproductType%3A200005%3Asize%3A" + (number1+number2) + ".0")
          console.log(link2)
          console.log("link test 2",link2)
       }
      }else{
        console.log("this is a decimal")
        if((number1+number2) <10){
          link2 = ("https://www.footlocker.com/search?query=womens+shoes%3Arelevance%3Agender%3A200001%3AproductType%3A200005%3Asize%3A0" + (number1+number2))
          console.log(link2)
          console.log("link test 3",link2)
        }else if((number1+number2) >10){
          link2 = ("https://www.footlocker.com/search?query=womens+shoes%3Arelevance%3Agender%3A200001%3AproductType%3A200005%3Asize%3A" + (number1+number2))
          console.log(link2)
          console.log("link test 4",link2)
       }
      }

       //setting men link
       if((number1) === Math.floor(number1)){
        console.log("THIS IS AN whole number")
        console.log("number1 inside is ", number1)
        if((number1) <10){
          link = ("https://www.footlocker.com/search?query=%3Arelevance%3Agender%3A200000%3AproductType%3A200005%3Asize%3A0" + (number1) + ".0")
          console.log("link test 1",link)
        }else if((number1) >=10){
          link = ("https://www.footlocker.com/search?query=%3Arelevance%3Agender%3A200000%3AproductType%3A200005%3Asize%3A" + (number1) + ".0")
          // setLink(link1)
          console.log("link test 2",link)
       }
      }else{
        console.log("this is a decimal")
        if((number1) <10){
          link = ("https://www.footlocker.com/search?query=%3Arelevance%3Agender%3A200000%3AproductType%3A200005%3Asize%3A0" + (number1))
          
          console.log("link test 3",link)
        }else if((number1) >10){
          link = ("https://www.footlocker.com/search?query=%3Arelevance%3Agender%3A200000%3AproductType%3A200005%3Asize%3A" + (number1))
          
          console.log("link test 4",link)
       }
      }

      if(gender === "Kids"){
        if((number1+number2) === Math.floor((number1+number2))){
          console.log("THIS IS AN whole number")
          
          if((number1+number2) <10){
            link2 = ("https://www.footlocker.com/search?query=womens+shoes%3Arelevance%3Agender%3A200001%3AproductType%3A200005%3Asize%3A0" + (number1+number2) + ".0")
            console.log(link2)
            console.log("link test 1",link2)
          }else if((number1+number2) >10){
            link2 = ("https://www.footlocker.com/search?query=womens+shoes%3Arelevance%3Agender%3A200001%3AproductType%3A200005%3Asize%3A" + (number1+number2) + ".0")
            console.log(link2)
            console.log("link test 2",link2)
         }
        }else{
          console.log("this is a decimal")
          if((number1+number2) <10){
            link2 = ("https://www.footlocker.com/search?query=womens+shoes%3Arelevance%3Agender%3A200001%3AproductType%3A200005%3Asize%3A0" + (number1+number2))
            console.log(link2)
            console.log("link test 3",link2)
          }else if((number1+number2) >10){
            link2 = ("https://www.footlocker.com/search?query=womens+shoes%3Arelevance%3Agender%3A200001%3AproductType%3A200005%3Asize%3A" + (number1+number2))
            console.log(link2)
            console.log("link test 4",link2)
         }
        }
  
      }
        
      
    }
    setTemp(link)
    setTemp2(link2)
    

  }
  
  

  function switchState(){
    setShow(true);
    calculateTotal();
    settingLink();
  }
  
  const [show,setShow] = React.useState()

 

  return (
    <div className="home">
      <div class="container">
        <div align="center">
          <br></br>
          <h1 class="font-weight-light">Enter Shoe Size</h1>
          
          
          <br></br>
          <input 
            type="number"
            value={number1}
            onChange={e => setNumber1(+e.target.value)}
            placeholder="0"
          /><br></br>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="checkbox" name="checkbox" onClick={testin1} ></input>
            <label class="form-check-label" for="checkbox">Women's</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="checkbox2" name="checkbox2" onClick={testin2}></input>
            <label class="form-check-label" for="checkbox2">Men's</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="checkbox3" name="checkbox3" onClick={testin3}></input>
            <label class="form-check-label" for="checkbox2">Kids'</label>
          </div>

          <div>
            <br></br>
         
          <button type="button" class="btn btn-dark"onClick={()=>switchState()}>Click to Calculate</button> 
         
          </div>

            <br></br><br></br><br></br><br></br>
          {show?
          <div>
            <h1 class="font-weight-light">You can also shop in these sizes:</h1>
              <table align="center">
              <tr>
                  <th>Women's :</th>
                  <th>{total5}</th>
                  
                </tr>
                <tr>
                  <th>Men's :</th>
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
                  {/* <th>{temp}</th> */}
                  
                </tr>
              </table>
              <br></br>
              <h5 class="font-weight-light">If Sizing is available <br></br>click the buttons below to shop in your new sizing</h5>

              <div class="btn-group" role="group" >
              <button style={{margin:"5px"}}type="button" class="btn btn-dark"><a href ={temp2} style={{color: "white"}}>Shop in Women's size</a></button>
              <br></br>
              <br></br>
              <button style={{margin:"5px"}}type="button" class="btn btn-dark"><a href ={temp} style={{color: "white"}}>Shop in Men's size</a></button>
              <br></br>
              <br></br>
              <button style={{margin:"5px"}}type="button" class="btn btn-dark"><a href ="https://www.footlocker.com/category/kids/shoes/grade-school.html" style={{color: "white"}}>Shop in Kids size</a></button>
              </div>
              
            </div>:null
          

            
          }
        </div>
      </div>
    </div>
  );
}
export default Home;
