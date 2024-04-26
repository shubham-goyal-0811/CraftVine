import React, { useState } from 'react'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faIntercom } from '@fortawesome/free-brands-svg-icons';
import { faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="header">
        <a href="#"><img src={'iScreenshot 2024-04-19 171738.png'} /></a>
        <div>
          <ul id="navbar">
            <li><a href="#" className='active'>Home</a></li>
            <li><a href="#catogoriesitems">Shop</a></li>
            <li><a href="#">Kitchen</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#catogoriesitems">Login & Sign-up</a></li>
          </ul>
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

      <section>
        <a className="head" href="#">Shop By Catogory</a>
        <div className='catogoriesitems'>
          <div className='boxs'>
            <a href="#">Jewellery</a>
          </div>
          <div className='boxs'>
            <a href="#">Home Decor</a>
          </div>
          <div className='boxs'>
            <a href="#">Kitchen & Dinning</a>
          </div>
          <div className='boxs'>
            <a href="#">Beauty & Grooming</a>
          </div>
          <div className='boxs'>
            <a href="#">Handbags & Totes</a>
          </div>
          <div className='boxs'>
            <a href="#">Stationary & Parties Supply</a>
          </div>
          <div className='boxs'>
            <a href="#">Clothing & Accesories</a>
          </div>
          <div className='boxs'>
            <a href="#">Toys & Games </a>
          </div>
        </div>
      </section>

      {/* middle section begins */}
      <section>
        <a className="text" href="#">Editor's Pick</a>
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

      <footer className='section1'>
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
          <a href="#">About Us</a>
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

export default App;
