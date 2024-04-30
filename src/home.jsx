import React, { useState } from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart, faStar, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faOutdent } from '@fortawesome/free-solid-svg-icons';

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
            image: 'src/images/kitchen1.jpg',
            category: 'Cookware',
            name: 'Ajinomoto Peruano Peruvian Seasoning',
            price: 'Rs. 499',
        },
        {
            id: 4,
            image: 'src/images/beauty1.jpg',
            category: 'Beauty & Grooming',
            name: 'Beauty Sets',
            price: 'Rs. 55,000',
        },
        {
            id: 5,
            image: 'src/images/kitchenand.jpg',
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
        // Remove the item at the given index
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
                <a href="#"><img src={'src/images/craftVine-logo-removebg-preview.png'} alt="Logo" /></a>
                <div>
                    <ul id="navbar">
                        <li><a href="#header" className='active'>Home</a></li>
                        <li><a href="#product">Featured Products</a></li>
                        <li><a href="#catogoriesitems">Shop By Category</a></li>
                        <li><a href="#editorpicks">Editor's choice</a></li>
                        <li><a href="#section1">Contact</a></li>
                        <li><a href="#">Login</a></li>
                        <li>
                            {/* Cart icon */}
                            <a href=""onClick={toggleCartVisibility}>
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="mobile">
                    <a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
                    <FontAwesomeIcon id="bar" icon={faOutdent} />
                </div>
            </section>

            {/* Discount section */}
            <section id="discount">
                <h4>Trade-in-Offer</h4>
                <h2>Super value Deals</h2>
                <h1>On all Products</h1>
                <p>Save more with coupons and up to 70% off!</p>
                <button>Shop Now</button>
            </section>

            {/* Featured Products section */}
            <section id="product">
                <h2>Featured Products</h2>
                <p className='ptag'>Summer Collection New Modern Design</p>
                <div className='pro-container'>
                    {products.map((product) => (
                        <div className='pro' key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <div className='des'>
                                <span>{product.category}</span>
                                <h5>{product.name}</h5>
                                <div className='star'>
                                    {/* Render star ratings */}
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

            {/* Cart Icon */}
            <div className="cart-icon" onClick={toggleCartVisibility} title="Toggle Cart">
                <FontAwesomeIcon icon={faShoppingCart} />
            </div>

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
                        Total Price: Rs. {cart.reduce((acc, item) => acc + parseFloat(item.price.replace('Rs. ', '')), 0)}
                    </p>
                </div>
            )}

            {/* Shop By Category section */}
            <section id="catogoriesitems">
                <h3>Shop By Category</h3>
                <div className="catogoriesitems">
                    <div className="boxs"><a href="/jewellery">Jewellery</a></div>
                    <div className="boxs"><a href="/home_decor">Home Decor</a></div>
                    <div className="boxs"><a href="/kitchen_and_dinning">Kitchen & Dining</a></div>
                    <div className="boxs"><a href="/beauty_and_grooming">Beauty & Grooming</a></div>
                    <div className="boxs"><a href="/handbags_and_totes">Handbags & Totes</a></div>
                    <div className="boxs"><a href="/stationary_and_parties_supply">Stationary & Parties Supply</a></div>
                    <div className="boxs"><a href="/clothing_and_accesories">Clothing & Accessories</a></div>
                    <div className="boxs"><a href="/toys_and_games">Toys & Games</a></div>
                </div>
            </section>

            {/* Editor's Picks section */}
            <section id="editorpicks">
                <h3>Editor's Pick</h3>
                <div className='editorspickitems'>
                    <div className='arrival'>
                        <a href="#">Arrival</a>
                    </div>
                    <div className='madeinusa'>
                        <a href="#">Made in USA</a>
                    </div>
                    <div className='bestseller'>
                        <a href="#">Best Seller</a>
                    </div>
                </div>
            </section>

            {/* Sign Up section */}
            <section id="signup">
                <div className='signuptext'>
                    <h4>Sign Up for CraftsVine</h4>
                    <p>Get email updates about our latest shop and <span>special offers</span>.</p>
                </div>

                <div className='form'>
                    <input type="text" placeholder='Your email address' />
                    <button className='normal'>Sign-Up</button>
                </div>
            </section>

            {/* Footer section */}
            <footer id="section1">
                <div className='col'>
                    <img className="lowelogo" src={'src/images/craftVine-logo-removebg-preview.png'} alt="CraftsVine Logo" />
                    <h4>Contact</h4>
                    <p><strong>Address:</strong> asdfghjkl</p>
                    <p><strong>Phone No:</strong> asdfghjkl</p>
                    <p><strong>Hours:</strong> asdfghjkl</p>
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
                        <img src={'src/images/appstore.png'} alt="App Store" />
                        <img src={'src/images/googleplay.png'} alt="Google Play" />
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Home;
