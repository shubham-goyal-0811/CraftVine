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
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

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
            image: 'src/images/jewe3.webp',
            category: 'Jewellery',
            name: 'Moissanite 925 Sterling Silver Necklace Women Girls Love Valentine Gift',
            price: 'Rs. 35,000',
        },
        {
            id: 3,
            image: 'src/images/jewe7.jpg',
            category: 'Jewellery',
            name: 'Butterfly Pendant Necklace with Jewelry for Women Teen Girls',
            price: 'Rs. 1899',
        },
        {
            id: 4,
            image: 'src/images/jewe4.webp',
            category: 'Jewellery',
            name: 'Zirconia Stacking Rings Prom Wedding Bridal Finger Jewelry Gift for Her',
            price: 'Rs. 5,000',
        },
        {
            id: 5,
            image: 'src/images/jewe8.jpg',
            category: 'Jewellery',
            name: 'Onyx necklace for women - Gold filled necklace - statement necklace - Handmade - Sterling silver - Rose gold (19.6, 14K Gold filled)',
            price: 'Rs. 899',
        },
        {
            id: 6,
            image: 'src/images/jewe9.webp',
            category: 'Jewellery',
            name: 'Tagua Necklace Yellow Hoops Handmade Fair Trade, andmade - Sterling silver - andmade - Sterling silver - Lightweight by Florama Natural Jewelry',
            price: 'Rs. 999',
        },
        {
            id: 7,
            image: 'src/images/jewe10.jpg',
            category: 'Jewellery',
            name: 'COOLSTEELANDBEYOND Champagne Gold Oval Beads Statement Necklace.',
            price: 'Rs. 13999',
        },
        {
            id: 8,
            image: 'src/images/jewe11.jpg',
            category: 'Jewellery',
            name: 'Zirconia Stacking Rings Prom Wedding Bridal Finger Jewelry Gift for Her',
            price: 'Rs. 8,999',
        },
        {
            id: 9,
            image: 'src/images/decor1.jpg',
            category: 'Home Decor',
            name: 'Tiffany Style Stained Glass Ceiling Pendant Light Fixture Stained Glass Ceiling Personalized Name Sign Wooden Baby',
            price: 'Rs. 4,999',
        },
        {
            id: 10,
            image: 'src/images/home decor2.jpg',
            category: 'Home Decor',
            name: 'Personalized Wooden Name Sign for Nursery Wall Decor, Customized Name Sign Baby Room Decor',
            price: 'Rs. 1,999',
        },
        {
            id: 11,
            image: 'src/images/home decor3.webp',
            category: 'Home Decor',
            name: 'Bath Bomb Gift Set, Relaxing Gifts for Women & Men, Spa Gifts & Birthday Gifts for Women and Mom',
            price: 'Rs. 2,999',
        },
        {
            id: 12,
            image: 'src/images/clothing1.webp',
            category: 'Clothing',
            name: 'Ajinomoto Peruano Peruvian Seasonings Pets Special Editions T-shirts',
            price: 'Rs. 499',
        },
        {
            id: 13,
            image: 'src/images/kitchen 1.jpg',
            category: 'Home Decor',
            name: 'Caraway Nonstick Ceramic Cookware Set (12 Piece) Pots, Pans, Lids and Kitchen Storage - Non Toxic',
            price: 'Rs. 899',
        },
        {
            id: 14,
            image: 'src/images/kitchen4.webp',
            category: 'Kitchen & Dining',
            name: 'Mothers Day Gift For Mom, Custom Kitchen Apron for Women, Yod A Best Mom Gifts',
            price: 'Rs. 799',
        },
        {
            id: 15,
            image: 'src/images/kitchen3.webp',
            category: 'Kitchen & Dining',
            name: 'Personalized silverware set, Newly, Bridal shower anniversary birthday present for her him',
            price: 'Rs. 14,999',
        },
        {
            id: 16,
            image: 'src/images/kitchen and.jpg',
            category: 'Kitchen & Dining',
            name: 'C & M Personal Gifts Stemless Wine Glass (1 Piece) 17 Ounces, Gag Gifts for Women, Funny Christmas gift',
            price: 'Rs. 499',
        },
        {
            id: 17,
            image: 'src/images/personalized.jpg',
            category: 'Stationery & Party Supplies',
            name: 'Personalized Hockey Stationery',
            price: 'Rs. 599',
        },
        {
            id: 18,
            image: 'src/images/toys.jpg',
            category: 'Toys',
            name: 'Baby & Toddler Toys',
            price: 'Rs. 699',
        },
        {
            id: 19,
            image: 'src/images/clothing.jpg',
            category: 'Clothing',
            name: 'Men\'s T-shirt',
            price: 'Rs. 699',
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

    // Function to toggle dropdown visibility
    const toggleDropdownVisibility = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    // Function to handle category selection
    const handleCategorySelection = (category) => {
        setSelectedCategory(category);
    };

    // Filter products based on selected category
    const filteredProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;

    return (
        <>
            {/* Header section */}
            <section id="header">
                <a href=""><img src={'src/images/craftVine-logo-removebg-preview (1).png'} alt="Logo" /></a>
                <div>
                    <ul id="navbar">
                        <li><a href="#header" className='active'>Home</a></li>
                        <li><a href="#product">Featured Products</a></li>
                        <li><a href="/Seller">Seller</a></li>
                        <li>
                            <a href="#" onClick={toggleDropdownVisibility} className={`dropdown-button ${isDropdownVisible ? 'open' : ''}`}>
                                Shop By Category
                            </a>
                            {/* Dropdown menu */}
                            {isDropdownVisible && (
                                <div className="dropdown-menu">
                                    <a href="#product" onClick={() => handleCategorySelection('Jewellery')}>Jewellery</a>
                                    <a href="#product" onClick={() => handleCategorySelection('Home Decor')}>Home Decor</a>
                                    <a href="#product" onClick={() => handleCategorySelection('Kitchen & Dining')}>Kitchen & Dining</a>
                                    <a href="#product" onClick={() => handleCategorySelection('Beauty & Grooming')}>Beauty & Grooming</a>
                                    <a href="#product" onClick={() => handleCategorySelection('Handbags & Totes')}>Handbags & Totes</a>
                                    <a href="#product" onClick={() => handleCategorySelection('Stationery & Party Supplies')}>Stationery & Party Supplies</a>
                                    <a href="#product" onClick={() => handleCategorySelection('Clothing')}>Clothing</a>
                                    <a href="#product" onClick={() => handleCategorySelection('Toys')}>Toys</a>
                                </div>
                            )}
                        </li>
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
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </section>

            {/* Discount section */}
            <section id="discount">
                <h4>Trade-in Offer</h4>
                <h2>Super Value Deals</h2>
                <h1>On all Products</h1>
                <p>Save more with coupons and up to 70 off!</p>
                <a href="#product"><button>Shop Now</button></a>
            </section>

            {/* Featured Products section */}
            <section id="product">
                <h2>Featured Products</h2>
                <p>Summer Collection New Modern Design</p>
                <div className='pro-container'>
                    {filteredProducts.map((product) => (
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
                    <div className="boxs"><a href="#" onClick={() => handleCategorySelection('Jewellery')}>Jewellery</a></div>
                    <div className="boxs"><a href="#" onClick={() => handleCategorySelection('Home Decor')}>Home Decor</a></div>
                    <div className="boxs"><a href="#" onClick={() => handleCategorySelection('Kitchen & Dining')}>Kitchen & Dining</a></div>
                    <div className="boxs"><a href="#" onClick={() => handleCategorySelection('Beauty & Grooming')}>Beauty & Grooming</a></div>
                    <div className="boxs"><a href="#" onClick={() => handleCategorySelection('Handbags & Totes')}>Handbags & Totes</a></div>
                    <div className="boxs"><a href="#" onClick={() => handleCategorySelection('Stationery & Party Supplies')}>Stationery & Party Supplies</a></div>
                    <div className="boxs"><a href="#" onClick={() => handleCategorySelection('Clothing')}>Clothing & Accessories</a></div>
                    <div className="boxs"><a href="#" onClick={() => handleCategorySelection('Toys & Games')}>Toys & Games</a></div>
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

                    <p><strong>Address:</strong> 45 Sector Street, Chandigarh, Haryana 160014, India</p>
                    <p><strong>Phone:</strong> 9056110958, 7814742159</p>
                    <p><strong>Hours:</strong> From 9:00 a.m. to 6:30 p.m., Monday to Saturday</p>
                    <div className='follow-us'>
                        <div className='social-icons'>
                            {/* Facebook icon with link */}
                            <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            {/* Twitter icon with link */}
                            <a href="https://www.twitter.com/your-twitter-page" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            {/* Instagram icon with link */}
                            <a href="https://www.instagram.com/your-instagram-page" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            {/* YouTube icon with link */}
                            <a href="https://www.youtube.com/your-youtube-channel" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
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
