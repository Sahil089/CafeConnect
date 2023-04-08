import React from 'react';
import logo from "../assests1/111.png"
import logo3 from "../assests1/about-3.jpg"
import logo2 from "../assests1/about-2.jpg"
import logo1 from "../assests1/about-1.jpg"
import logo4 from "../assests1/about-4.jpg"
import MyComponent from "../MyComponent"
function Home(){
    return (
      <div>
        
        <div className="container-xxl bg-white p-0">
          {/* Spinner Start */}
          {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
              <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div> */}
          {/* Spinner End */}
          {/* Navbar & Hero Start */}
          <div className="container-xxl position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
              <a href className="navbar-brand p-0">
                <h1 className="text-primary m-0"><img src={logo} alt="Logo" />CafeConnect                  </h1>

              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars" />
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0 pe-4">
                  <a href="index.html" className="nav-item nav-link active">Home</a>
                  <a href="#about" className="nav-item nav-link">About</a>
                  {/* <a href="testimonial.html" className="nav-item nav-link">Testimonals</a> */}
                  <a href="#foot" className="nav-item nav-link">Contact</a>
                </div>
                <a href className="btn btn-primary py-2 px-4">Login/Signup</a>
              </div>
            </nav>
            <div className="container-xxl py-5 bg-dark hero-header mb-5">
              <div className="container my-5 py-5">
                <div className="row align-items-center g-5">
                  <div className="col-lg-6 text-center text-lg-start">
                    <h1 className="display-3 text-white animated slideInLeft">Discover Your Perfect Cafe Match:
                      Connect, Compare, and Indulge<br /></h1>
                    <p className="text-white animated slideInLeft mb-4 pb-2">Explore the cafes virtually</p>
                    <a href="www.google.com" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">ENTER</a>
                  </div>
                  <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                    <img className="img-fluid" src="img/111.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Navbar & Hero End */}
          {/* Service Start */}
          <div className="container-xxl py-5">
            <div className="container">
              <div className="row g-4">
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="service-item rounded pt-3">
                    <div className="p-4">
                      <i className="fa fa-3x fa-user-tie text-primary mb-4" />
                      <h5>Geo Tagged Cafes with smart contract
                      </h5>
                      <p>Locate your state,city,and it will take you to your desired Cafe and here your journy starts!</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="service-item rounded pt-3">
                    <div className="p-4">
                      <i className="fa fa-3x fa-utensils text-primary mb-4" />
                      <h5>Discover and be in Cafes virtually</h5>
                      <p>Step in the cafe, enter &amp; interact with others present in cafes virtually</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                  <div className="service-item rounded pt-3">
                    <div className="p-4">
                      <i className="fa fa-3x fa-cart-plus text-primary mb-4" />
                      <h5>Explore the interior of cafes </h5>
                      <p>Step in the cafe, enter &amp; interact with others present in cafes virtually</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                  <div className="service-item rounded pt-3">
                    <div className="p-4">
                      <i className="fa fa-3x fa-headset text-primary mb-4" />
                      <h5>Helper in your decision from where to order</h5>
                      <p>Enter any dish name and it will compare the prices on websites and get you the cheaper one</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Service End */}
          {/* About Start */}
          <div className="container-xxl py-5">
            <div id="about" className="container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6">
                  <div className="row g-3">
                    <div className="col-6 text-start">
                      <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src={logo1} />
                    </div>
                    <div className="col-6 text-start">
                      <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src={logo2} style={{ marginTop: '25%' }} />
                    </div>
                    <div className="col-6 text-end">
                      <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src={logo3} />
                    </div>
                    <div className="col-6 text-end">
                      <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src={logo4} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h5 className="section-title ff-secondary text-start text-primary fw-normal">About Us</h5>
                  <h1 className="mb-4">Welcome to <i className="fa fa-utensils text-primary me-2" />CafeConnect</h1>
                  <p className="mb-4">Discover the cafes of India like never before! With our interactive map, you can choose your state and city, and explore a curated list of cafes. Step inside each cafe with our virtual tour and experience a multiplayer game in the same setting. Wait!Its not over yet, You can compare food prices on different delivery apps to save money on your next meal. Start your adventure today!
                  </p>
                  <p className="mb-4">"Discover hidden gems and local delights, India's cafe scene now in your sights."</p>
                  <div className="row g-4 mb-4">
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                        {/*<h1 class="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">Start</h1>*/}
                        <div className="ps-4">
                          {/*-- <p class="mb-0">of</p> */}
                          <h6 className="text-uppercase mb-0"> Your Virtual Experience</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                        {/*<h1 class="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">50</h1>*/}
                        <div className="ps-4">
                          {/*<p class="mb-0">Popular</p>*/}
                          <h6 className="text-uppercase mb-0">To cafes around India</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*<a class="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>*/}
                </div>
              </div>
            </div>
          </div>
          {/* About End */}
          {/* Menu Start */}
          <div className="container-xxl py-5">
            <div className="container">
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h5 className="section-title ff-secondary text-center text-primary fw-normal">Cafe Tour?</h5>
                <h1 className="mb-5">HELLO,You are here for?</h1>
              </div>
              <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
                <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                  <li className="nav-item">
                    <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                      <i className="fa fa-coffee fa-2x text-primary" />
                      <div className="ps-3">
                        <small className="text-body">Popular</small>
                        <h6 className="mt-n1 mb-0">Breakfast</h6>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                      <i className="fa fa-hamburger fa-2x text-primary" />
                      <div className="ps-3">
                        <small className="text-body">Special</small>
                        <h6 className="mt-n1 mb-0">Lunch</h6>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                      <i className="fa fa-utensils fa-2x text-primary" />
                      <div className="ps-3">
                        <small className="text-body">Lovely</small>
                        <h6 className="mt-n1 mb-0">Dinner</h6>
                      </div>
                    </a>
                  </li>
                </ul>
                {/* Reservation Start */}
                <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="row g-0">
                    <div className="col-md-6">
                      <div className="video">
                        {/* <iframe
                          width="640"
                          height="640"
                          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                          title="YouTube video player"
                          
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe> */}
                       {/*  <button type="button" className="btn-play" data-bs-toggle="modal" src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                          <span />
                        </button> */}
                      </div>
                    </div>
                    <div className="col-md-6 bg-dark d-flex align-items-center">
                      <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                        <h5 className="section-title ff-secondary text-start text-primary fw-normal">Demo Video</h5>
                        <h1 className="text-white mb-4">CafeConnect</h1>
                        {/* <div className="ratio ratio-16x9"> */}
                        <iframe
                          align-item="center"
                          width="540"
                          height="300"
                          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                          title="YouTube video player"
                          frameborder="20"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                          {/* <iframe className="embed-responsive-item" src id="video" allowFullScreen allowscriptaccess="always" allow="autoplay" /> */}
                        {/* </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Reservation Start */}
                {/* Testimonial Start */}
                {/* <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container">
                      <div className="text-center">
                        <h5 className="section-title ff-secondary text-center text-primary fw-normal">Testimonial</h5>
                        <h1 className="mb-5">Our Clients Say!!!</h1>
                      </div>
                      <div className="owl-carousel testimonial-carousel">
                        <div className="testimonial-item bg-transparent border rounded p-4">
                          <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                          <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                          <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg" style={{width: '50px', height: '50px'}} />
                            <div className="ps-3">
                              <h5 className="mb-1">Client Name</h5>
                              <small>Profession</small>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-item bg-transparent border rounded p-4">
                          <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                          <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                          <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" style={{width: '50px', height: '50px'}} />
                            <div className="ps-3">
                              <h5 className="mb-1">Client Name</h5>
                              <small>Profession</small>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-item bg-transparent border rounded p-4">
                          <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                          <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                          <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg" style={{width: '50px', height: '50px'}} />
                            <div className="ps-3">
                              <h5 className="mb-1">Client Name</h5>
                              <small>Profession</small>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-item bg-transparent border rounded p-4">
                          <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                          <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                          <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-4.jpg" style={{width: '50px', height: '50px'}} />
                            <div className="ps-3">
                              <h5 className="mb-1">Client Name</h5>
                              <small>Profession</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                {/* Testimonial End */}
                {/* Footer Start */}
                <div id="foot" className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                  <div className="container py-5">
                    <div className="row g-5">
                      <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Company</h4>
                        <a className="btn btn-link" href>About Us</a>
                        <a className="btn btn-link" href>Contact Us</a>
                        <a className="btn btn-link" href>Privacy Policy</a>
                        <a className="btn btn-link" href>Terms &amp; Condition</a>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />Nagpur</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3" />cafeconnect@food.com</p>
                        <div className="d-flex pt-2">
                          <a className="btn btn-outline-light btn-social" href><i className="fab fa-twitter" /></a>
                          <a className="btn btn-outline-light btn-social" href><i className="fab fa-facebook-f" /></a>
                          <a className="btn btn-outline-light btn-social" href><i className="fab fa-youtube" /></a>
                          <a className="btn btn-outline-light btn-social" href><i className="fab fa-linkedin-in" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <div className="copyright">
                      <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                          © <a className="border-bottom" href="#">CafeConnect.food</a>, All Right Reserved.
                          {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                          Designed By <a className="border-bottom" href="Github link">CafeConnect</a>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                          <div className="footer-menu">
                            <a href>Home</a>
                            <a href>Cookies</a>
                            <a href>Help</a>
                            <a href>FQAs</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Footer End */}
                {/* Back to Top */}
                <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
              </div>
              {/* JavaScript Libraries */}
              {/* Template Javascript */}
            </div></div></div></div>
    );


  }
export default Home;