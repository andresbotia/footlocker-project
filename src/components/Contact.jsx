import React from "react";

import pic1 from '../pic1.jpg'

function Contact() {
  return (
    

    
    // <div className="contact">
    //   <div class="container">
    //     <div class="row align-items-center my-5">
    //       <div class="col-lg-7">
    //         <img
    //           class="img-fluid rounded mb-4 mb-lg-0"
    //           src="http://placehold.it/900x400"
    //           alt=""
    //         />
    //       </div>
    //       <div class="col-lg-5">
    //         <h1 class="font-weight-light">Contact</h1>
    //         <p>
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry. Lorem Ipsum has been the industry's standard dummy text
    //           ever since the 1500s, when an unknown printer took a galley of
    //           type and scrambled it to make a type specimen book.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    
<div class="container">
  <br></br>
<div class="card-deck">
  <div class="card">
    <img class="card-img-top" src="{pic1}" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Andres Botia</h5>
      <p class="card-text">Core Retail Intern</p>
      <button type="button" class="btn btn-dark" a href="https://www.linkedin.com/in/andres-botia/">LinkedIn</button>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="{logo" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>

</div>


  
  );
}

export default Contact;
