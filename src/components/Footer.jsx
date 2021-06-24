import React from "react";

function Footer() {
  return (
    <div className="footer">
      <footer style={{backgroundColor: "Black"}} class="fixed-bottom">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; Footlocker 2021
          </p>
        </div>
      </footer>
    </div>
  );

// <footer style={{backgroundColor: "Black",overflow: "hidden",position: "absolute",bottom: "0",width: "100%",height: "fit-content"}}>
//   <div class="row">
//     <div class="col-12 col-md">
//     <p style={{color: "white",fontSize: "11px"}} align="bottom" color="#FFFFFF">© 2021 FootLocker.com, Inc. All Rights Reserved </p>
//       {/* <p style={{color: "white"}} >logo goes here</p> */}
//       {/* <img src=""></img> */}
//       {/* <small class="d-block mb-3 text-muted">&copy; 2017–2021</small> */}
//     </div>
//     <div class="col-6 col-md">
//       <h5 style={{color: "white"}}>Features</h5>
//       <ul style={{fontSize: "11px"}}class="list-unstyled text-small">
//         <li><a style={{color: "white"}} class="link-secondary" href="https://www.footlocker-inc.com/">About Us</a></li>
//         <li><a style={{color: "white"}} class="link-secondary" href="https://careers.footlocker.com/">Career Opportunities</a></li>
//         <li><a style={{color: "white"}} class="link-secondary" href="https://www.footlocker.com/sitemap.html">SiteMap</a></li>
//         <li><a style={{color: "white"}} class="link-secondary" href="https://www.footlocker.com/sitemap/mens.html">Men's Sitemap</a></li>
//         <li><a style={{color: "white"}} class="link-secondary" href="https://www.footlocker.com/sitemap/womens.html">Women's Sitemap</a></li>
//         <li><a style={{color: "white"}} class="link-secondary" href="https://www.footlocker.com/sitemap/boys.html">Boys' Sitemap</a></li>
//         <li><a style={{color: "white"}} class="link-secondary" href="https://www.footlocker.com/sitemap/girls.html">Girls' Sitemap</a></li>
//         <li><a style={{color: "white"}} class="link-secondary" href="https://help.footlocker.com/hc/en-us/articles/360034125214">Privacy Statement</a></li>
//         <li><a style={{color: "white"}} class="link-secondary" href="https://privacy.footlocker-inc.com/consumer/donotsell">CA-Do Not Sell My Personal Information</a></li>
//         <li><a style={{color: "white"}} class="link-secondary" href="https://optout.aboutads.info/?c=2&lang=EN">Ad Choices</a></li>
//         <li><a style={{color: "white"}} class="link-secondary" href="https://help.footlocker.com/hc/en-us/articles/360034292814">Terms Of Use</a></li>
//       </ul>
//     </div>
//     <div class="col-6 col-md">
//       <h5 style={{color: "white"}}>Customer Service</h5>
//       <ul style={{fontSize: "11px"}} class="list-unstyled text-small">
//         <li><a style={{color: "white"}} class="link-secondary" href="https://help.footlocker.com/hc/en-us/articles/360046621694-Contact-Us">Contact Us</a></li>
//         <li><a style={{color: "white"}} class="link-secondary" href="https://help.footlocker.com/hc/en-us/categories/360002182413">Ordering Help</a></li>
//         <li><a style={{color: "white"}} class="link-secondary" href="https://www.footlocker.com/order/search">Order Status</a></li>
//         <li><a style={{color: "white"}} class="link-secondary" href="https://help.footlocker.com/hc/en-us/categories/360002182413">Shipping Info</a></li>
//         <li><a style={{color: "white"}} class="link-secondary" href="https://www.footlocker.com/help/store-pickup">Store Pick Up</a></li>
//         <li><a style={{color: "white"}} class="link-secondary" href="https://help.footlocker.com/hc/en-us/categories/360002167714">ReturnS-Exchanges</a></li>
//         <li><a style={{color: "white"}} class="link-secondary" href="https://help.footlocker.com/hc/en-us">Help</a></li>
//         <li><a style={{color: "white"}} class="link-secondary" href="https://www.footlocker.com/covid19.html">COVID-19 Information</a></li>
//       </ul>
//     </div>
//     <div class="col-6 col-md">
//       <h5 style={{color: "white"}}>Quick Links</h5>
//       <ul style={{fontSize: "11px"}} class="list-unstyled text-small">
//         <li><a style={{color: "white"}} class="link-secondary" href="https://stores.footlocker.com/search">Store Locator</a></li>
//         <li><a style={{color: "white"}} class="link-secondary" href="https://www.footlocker.com/text-sign-up">Text Sign Up</a></li>
//         <li><a style={{color: "white"}} class="link-secondary" href="https://www.footlocker.com/launch101">Launch 101</a></li>
//         <li><a style={{color: "white"}} class="link-secondary" href="https://www.footlocker.com/coupons">Coupons</a></li>
//         <li><a style={{color: "white"}} class="link-secondary" href="https://www.footlocker.com/affiliates.html">Affiliates</a></li>
//         <li><a style={{color: "white"}} class="link-secondary" href="https://www.footlocker.com/fit.html">Fit Guarantee</a></li>
//         <li><a style={{color: "white"}} class="link-secondary" href="https://help.footlocker.com/hc/en-us/categories/360002167454-Military-Discount">Military Discount</a></li>
//         <li><a style={{color: "white"}} class="link-secondary" href="https://www.footlocker.com/student-beans.html">Student Discount</a></li>
//       </ul>
//     </div>
//     {/* <div class="col-6 col-md">
//       <h5 style={{color: "white"}}>About</h5>
//       <ul class="list-unstyled text-small">
//         <li><i class="fab fa-facebook-f"></i></li>
//         <li><a style={{color: "white"}} class="link-secondary" href="#">Team</a></li>
//         <li><a style={{color: "white"}} class="link-secondary" href="#">Locations</a></li>
//         <li><a style={{color: "white"}} class="link-secondary" href="#">Privacy</a></li>
//         <li><a style={{color: "white"}} class="link-secondary" href="#">Terms</a></li>
//       </ul>
//     </div> */}
//   </div>
//   {/* <div>
//   <p style={{color: "white"}} align="right" color="#FFFFFF">© 2021 FootLocker.com, Inc. All Rights Reserved </p>
//   </div> */}
// </footer>
//   );
}

export default Footer;
