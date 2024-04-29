import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faIntercom } from '@fortawesome/free-brands-svg-icons';
import { faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import { faOutdent, fas } from '@fortawesome/free-solid-svg-icons';
const home = ()=>{
  return (
    <>
      <section id="header">
        <a href="#"><img src={'src/images/craftVine-logo-removebg-preview (1).png'} /></a>
        <div>
          <ul id="navbar">
            <li><a href="#header" className='active'>Home</a></li>
            <li><a href="#product">Featured Products</a></li>
            <li><a href="#catogoriesitems">Shop By Catogory</a></li>
            <li><a href="#editorpicks">Editor's choice</a></li>
            <li><a href="#section1">Contact</a></li>
            <li><a href="">Login</a></li>
            <li><a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a></li>
          </ul>
        </div>
        <div id="mobile">
        <a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
        <FontAwesomeIcon id="bar" icon={faOutdent} />
        </div>
      </section>
      {/* nav bar ended here */}
      <section id="discount">
        <h4>Trade-in-Offer</h4>
        <h2>Super value Deals</h2>
        <h1>On all Products</h1>
        <p>Save more with coupons and up-to 70% off!</p>
        <button>Shop Now</button>

      </section>
      <section id="product">
        <h2>
          Featured Products
        </h2>
        <p className='ptag'>Summer Collection New Modern Design</p>
        <div className='pro-container'>
          <div className='pro'>
            <img src={'src/images/jewe.jpg'}alt="" />
            <div className='des'>
              <span>Jewellery</span>
              <h5>Zirconia Stacking Rings Prom Wedding Bridal Finger Jewelry Gift for Her</h5>
              <div className='star'>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              </div>
              <h4>Rs. 55,000</h4>
            </div>
            <a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
          </div>
          <div className='pro'>
            <img src={'src/images/decor1.jpg'}alt="" />
            <div className='des'>
              <span>Lightening</span>
              <h5>Tiffany Style Stained Glass Ceiling Pendant Light Fixture with 13 Inch Wide Handmade</h5>
              <div className='star'>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              </div>
              <h4>Rs. 5,000</h4>
            </div>
            <a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
          </div>
          <div className='pro'>
            <img src={'src/images/kitchen 1.jpg'}alt="" />
            <div className='des'>
              <span>CoocWare</span>
              <h5>Ajinomoto Peruano Peruvian Seasoning</h5>
              <div className='star'>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              </div>
              <h4>Rs. 499</h4>
            </div>
            <a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
          </div>
          <div className='pro'>
            <img src={'src/images/beauty 1.jpg'}alt="" />
            <div className='des'>
              <span>Beauty & Grooming</span>
              <h5>Beauty Sets</h5>
              <div className='star'>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              </div>
              <h4>Rs.55,000</h4>
            </div>
            <a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
          </div>
          <div className='pro'>
            <img src={'src/images/kitchen and.jpg'}alt="" />
            <div className='des'>
              <span>Kitchen & Dinning</span>
              <h5>Cups & Mugs</h5>
              <div className='star'>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              </div>
              <h4>Rs.55,000</h4>
            </div>
            <a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
          </div>
          <div className='pro'>
            <img src={'src/images/personalized.jpg'}alt="" />
            <div className='des'>
              <span>Stationery & Party Supplies</span>
              <h5>Personalized Hockey Stationery - Set of 12 Flat Notecards & Envelopes</h5>
              <div className='star'>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              </div>
              <h4>Rs.55,000</h4>
            </div>
            <a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
          </div>
          <div className='pro'>
            <img src={'src/images/toys.jpg'}alt="" />
            <div className='des'>
              <span>Toys</span>
              <h5>Baby & Toddler Toys</h5>
              <div className='star'>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              </div>
              <h4>Rs.55,000</h4>
            </div>
            <a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
          </div>
          <div className='pro'>
            <img src={'src/images/clothing.jpg'}alt="" />
            <div className='des'>
              <span>Clothing</span>
              <h5>Mens T-shirt</h5>
              <div className='star'>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              </div>
              <h4>Rs.55,000</h4>
            </div>
            <a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
          </div>
        </div>
      </section>

      <section id='catogoriesitems'>
        <a className="head" href="#catogoriesitems">Shop By Catogory</a>
        <div className='catogoriesitems'>
          <div className='boxs'>
            <a href="/jewellery">Jewellery</a>
          </div>
          <div className='boxs'>
            <a href="/home_decor">Home Decor</a>
          </div>
          <div className='boxs'>
            <a href="/kitchen_and_dinning">Kitchen & Dinning</a>
          </div>
          <div className='boxs'>
            <a href="/beauty_and_grooming">Beauty & Grooming</a>
          </div>
          <div className='boxs'>
            <a href="/handbags_and_totes">Handbags & Totes</a>
          </div>
          <div className='boxs'>
            <a href="/stationary_and_parties_supply">Stationary & Parties Supply</a>
          </div>
          <div className='boxs'>
            <a href="/clothing_and_accesories">Clothing & Accesories</a>
          </div>
          <div className='boxs'>
            <a href="/toys_and_games">Toys & Games </a>
          </div>
        </div>
      </section>

      {/* middle section begins */}
      <section id='editorpicks'>
        <a className="text "  href="#editorpicks">Editor's Pick</a>
        <div className='editorspickitems'>
          <div className='arrival'>
            <a href="#">Arrival </a>
          </div>
          <div className='madeinusa'>
            <a href="#">Made in USA</a>
          </div>
          <div className='bestseller'>
            <a href="#">Best Seller</a>
          </div>
        </div>
      </section>

      {/* follow us begins here */}
      <section id="signup">
        <div className='signuptext'>
          <h4>Sign Up for CraftsVine</h4>
          <p>get email updates about our lastest shop and <span>special offers</span></p>
        </div>

        <div className='form'>
          <input type="text" placeholder='Your email address' />
          <button className='normal'>Sign-Up</button>
        </div>
      </section>

      {/* footer section begins here  */}

      <footer id='section1'>
        <div className='col'>
          <img  className="lowelogo" src={'src/images/craftVine-logo-removebg-preview (1).png'} />
          <h4>Contact</h4>
          <p><strong>Address:</strong>asdfghjkl</p>
          <p><strong>Phone No:</strong>asdfghjkl</p>
          <p><strong>Hours:</strong>asdfghjkl</p>

          <div className='followus'>
            <h3>Follow Us</h3>
            <div className='icon'>
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faYoutube} />
            </div>
          </div>
        </div>

        <div className='col'>
          <h5>About</h5>
          <a href="/Seller">About Us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
        </div>
        <div className='col'>
          <h6>My Account</h6>
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>
        <div className='colinstall'>
          <h2>Install App</h2>
          <p>From App Store or Google Play</p>
          <div className='row'>
            <img src={'src/images/png-clipart-app-store-google-play-apple-apple-text-logo.png'} alt=""/>
            <img src={'src/images/png-clipart-app-store-google-play-apple-apple-text-logo.png'} alt=""/>
          </div>
        </div>
      </footer>
    </>
  )
}

export default home;