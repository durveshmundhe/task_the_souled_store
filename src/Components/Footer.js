import React from "react";

function Footer() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-3 col-xs-6">
              <div className="footer-column">
                <h5 className="column-heading">Need Help</h5>
                <ul className="list-unstyled footer-links">
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                  <li>
                    <a href="#">Shipping & Tracking</a>
                  </li>
                  <li>
                    <a href="#">Return & Exchange</a>
                  </li>
                  <li>
                    <a href="#">T&Cs</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-3 col-xs-6">
              <div className="footer-column">
                <h5 className="column-heading">company</h5>
                <ul className="list-unstyled footer-links">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Schools & Colleges</a>
                  </li>
                  <li>
                    <a href="#">Bulk & Custom Orders</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-3 col-xs-6">
              <div className="footer-column">
                <h5 className="column-heading">more info</h5>
                <ul className="list-unstyled footer-links">
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">Gift Vouchers</a>
                  </li>
                  <li>
                    <a href="#">Souled Army</a>
                  </li>
                  <li>
                    <a href="#">Sell Your Artwork</a>
                  </li>
                  <li>
                    <a href="#">Sitemap</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-3 col-xs-6">
              <div className="purchase-features">
                <div className="circle-wrap">
                    <i class="fa fa-rupee"></i>
                    <p>COD Available</p>
                </div>
                <div className="circle-wrap">
                    <i class="fa fa-refresh"></i>
                    <p> 15 Day Easy Returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-social mt-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="copy-right-wrap mb-3">
                            <i class="fa fa-exclamation-triangle"></i>
                            <u className="ml-2">Report: Inappropriate Content or Copyright Infringement</u>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-social">
                            <span>Follow Us:</span>
                            <i class="fa fa-facebook"></i>
                            <i class="fa fa-instagram"></i>
                            <i class="fa fa-snapchat"></i>
                            <i class="fa fa-twitter"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="footer-navigation-wrap mt-4">
            <div className="container accordian-container">

                <div className="accordian-wrap">
                    <p>NAVIGATION LINKS</p>
                    <p>+</p>
                </div>
                <div className="accordian-wrap">
                    <p>WHO WE ARE</p>
                    <p>+</p>
                </div> 

            </div>
        </div>

        <div className="payment-partners mt-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="payment-wrap">
                            <span>100% Secure Payment: </span>
                            <div className="payment-options">
                                <img src="../images/footer/masterdcard.png" alt="payment" />
                                <img src="../images/footer/mobikwik.png" alt="payment" />
                                <img src="../images/footer/paytm.png" alt="payment" />
                                <img src="../images/footer/americanExpress.png" alt="payment" />
                                <img src="../images/footer/cod.png" alt="payment" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="payment-wrap justify-content-lg-end">
                            <span className="mr-2">Shipping Partners: </span>
                            <div className="payment-options">
                                <img src="../images/footer/fedex.png" alt="payment" />
                                <img src="../images/footer/dtdc.png" alt="payment" />
                                <img src="../images/footer/delivery.png" alt="payment" />
                                <img src="../images/footer/rapid.png" alt="payment" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container mt-4">
            <div className="text-center">
                <span className="copyright">&copy;  The Souled Store 2018-19</span>
            </div>
        </div>
    
      </footer>
    );
}

export default Footer;