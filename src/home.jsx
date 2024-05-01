import React, { useState } from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart, faStar, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    // State to track items in the cart and cart visibility
    const [cart, setCart] = useState([]);
    const [isCartVisible, setCartVisible] = useState(false);

    // Example product data
    const products = [
        {
            id: 1,
            image: 'src/images/jewe.jpg',
            category: 'Jewellery',
            name: 'Zirconia Stacking Rings Prom Wedding Bridal Finger Jewelry Gift for Her',
            price: 'Rs. 55,000',
        },
        {
            id: 2,
            image: 'src/images/decor1.jpg',
            category: 'Lightening',
            name: 'Tiffany Style Stained Glass Ceiling Pendant Light Fixture',
            price: 'Rs. 5,000',
        },
        {
            id: 3,
            image: 'src/images/clothing.jpg',
            category: 'Cookware',
            name: 'Ajinomoto Peruano Peruvian Seasonings Pets Special Editions T-shirts',
            price: 'Rs. 499',
        },
        {
            id: 4,
            image: 'src/images/kitchen 1.jpg',
            category: 'Beauty & Grooming',
            name: 'Beauty Sets',
            price: 'Rs. 55,000',
        },
        {
            id: 5,
            image: 'src/images/kitchen and.jpg',
            category: 'Kitchen & Dining',
            name: 'Cups & Mugs',
            price: 'Rs. 55,000',
        },
        {
            id: 6,
            image: 'src/images/personalized.jpg',
            category: 'Stationery & Party Supplies',
            name: 'Personalized Hockey Stationery',
            price: 'Rs. 55,000',
        },
        {
            id: 7,
            image: 'src/images/toys.jpg',
            category: 'Toys',
            name: 'Baby & Toddler Toys',
            price: 'Rs. 55,000',
        },
        {
            id: 8,
            image: 'src/images/clothing.jpg',
            category: 'Clothing',
            name: 'Men\'s T-shirt',
            price: 'Rs. 55,000',
        },
    ];

    // Function to add an item to the cart
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    // Function to remove an item from the cart
    const removeFromCart = (index) => {
        setCart(cart.filter((_, i) => i !== index));
    };

    // Function to toggle cart visibility
    const toggleCartVisibility = () => {
        setCartVisible(!isCartVisible);
    };

    return (
        <>
            {/* Header section */}
            <section id="header">
                <a href="#"><img src={'src/images/craftVine-logo-removebg-preview (1).png'} alt="Logo" /></a>
                <div>
                    <ul id="navbar">
                        <li><a href="#header" className='active'>Home</a></li>
                        <li><a href="#product">Featured Products</a></li>
                        <li><a href="#catogoriesitems">Shop By Category</a></li>
                        <li><a href="#editorpicks">Editor's Choice</a></li>
                        <li><a href="#footer">Contact</a></li>
                        <li><a href="#">Login</a></li>
                        <li>
                            {/* Cart icon */}
                            <a href="#" onClick={toggleCartVisibility}>
                                <FontAwesomeIcon icon={faShoppingCart} />
                                {cart.length > 0 && (
                                    <span className="cart-count">{cart.length}</span>
                                )}
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="mobile">
                    <a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
                    <FontAwesomeIcon id="bar" icon={faBars} />
                </div>
            </section>

            {/* Discount section */}
            <section id="discount">
                <h4>Trade-in Offer</h4>
                <h2>Super Value Deals</h2>
                <h1>On all Products</h1>
                <p>Save more with coupons and up to 70% off!</p>
                <a href="#product"><button>Shop Now</button></a>
            </section>

            {/* Featured Products section */}
            <section id="product">
                <h2>Featured Products</h2>
                <p>Summer Collection New Modern Design</p>
                <div className='pro-container'>
                    {products.map((product) => (
                        <div className='pro' key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <div className='des'>
                                <span>{product.category}</span>
                                <h5>{product.name}</h5>
                                <div className='star'>
                                    {[...Array(5)].map((_, index) => (
                                        <FontAwesomeIcon key={index} icon={faStar} />
                                    ))}
                                </div>
                                <h4>{product.price}</h4>
                            </div>
                            <button onClick={() => addToCart(product)}>
                                <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Cart Display */}
            {isCartVisible && (
                <div className="cart-container">
                    <h3>Your Cart</h3>
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <ul>
                            {cart.map((item, index) => (
                                <li key={index}>
                                    <span>{item.name} - {item.price}</span>
                                    <button onClick={() => removeFromCart(index)}>
                                        <FontAwesomeIcon icon={faTrashAlt} /> Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                    <p>
                        Total Price: Rs. {cart.reduce((acc, item) => acc + parseFloat(item.price.replace('Rs. ', '')), 0).toFixed(2)}
                    </p>
                </div>
            )}
            
            {/* Shop By Category section */}
            <section id="catogoriesitems">
                <h3>Shop By Category</h3>
                <div className="catogories-items">
                    <div className="boxs"><a href="/jewellery">Jewellery</a></div>
                    <div className="boxs"><a href="/home_decor">Home Decor</a></div>
                    <div className="boxs"><a href="/kitchen_dining">Kitchen & Dining</a></div>
                    <div className="boxs"><a href="/beauty_grooming">Beauty & Grooming</a></div>
                    <div className="boxs"><a href="/handbags_totes">Handbags & Totes</a></div>
                    <div className="boxs"><a href="/stationary_party_supply">Stationery & Party Supply</a></div>
                    <div className="boxs"><a href="/clothing_accessories">Clothing & Accessories</a></div>
                    <div className="boxs"><a href="/toys_games">Toys & Games</a></div>
                </div>
            </section>

            {/* Editor's Choice section */}
            <section id="editorpicks">
                <h3>Editor's Choice</h3>
                <div className='editorspickitems'>
                    <div className='arrival'><a href="#">Arrival</a></div>
                    <div className='madeinusa'><a href="#">Made in USA</a></div>
                    <div className='bestseller'><a href="#">Best Seller</a></div>
                </div>
            </section>

            {/* Sign Up section */}
            <section id="signup">
                <div className='signup-text'>
                    <h4>Sign Up for CraftsVine</h4>
                    <p>Get email updates about our latest shop and <span>special offers</span>.</p>
                </div>
                <div className='form'>
                    <input type="text" placeholder='Your email address' />
                    <button className='normal'>Sign-Up</button>
                </div>
            </section>

            {/* Footer section */}
            <footer id="footer">
                <div className='col'>
                    <img src='src/images/craftVine-logo-removebg-preview (1).png' alt='CraftsVine Logo' className='logo' />

                    <p><strong>Address:</strong> Your address here</p>
                    <p><strong>Phone:</strong> Your phone number here</p>
                    <p><strong>Hours:</strong> Your hours here</p>
                    <div className='follow-us'>
                        
                        <div className='social-icons'>
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
                    <a href="/delivery_info">Delivery Information</a>
                    <a href="/privacy_policy">Privacy Policy</a>
                    <a href="/terms_conditions">Terms & Conditions</a>
                    <a href="/contact_us">Contact Us</a>
                </div>

                <div className='col'>
                    <h6>My Account</h6>
                    <a href="/sign_in">Sign In</a>
                    <a href="/Seller">Seller Account</a>
                    <a href="/view_cart">View Cart</a>
                    <a href="/track_order">Track My Order</a>
                    <a href="/help">Help</a>
                </div>

                <div className='col'>
                    <h2>Install App</h2>
                    <p>From App Store or Google Play</p>
                    <div className='app-links'>
                        <img src='src/images/png-clipart-app-store-google-play-apple-apple-text-logo (1).png' alt='App Store' />
                        <img src='src/images/png-clipart-app-store-google-play-apple-apple-text-logo (1).png' alt='Google Play' />
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Home;
