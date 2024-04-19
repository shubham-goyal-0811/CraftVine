import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
        <div className='header'>
          <ul>
            <li>Gifts</li>
            <li>Jewellery</li>
            <li>Home & Kitchen</li>
            <li>Clothing, Shoes & Accessories</li>
            <li>Wedding</li>
          </ul>
        </div>
        <img  className="logo" src={'src/images/Screenshot 2024-04-19 171738.png'}/>
      </header>
      {/* header section is finished here */}

      <div className='mothersdaygift'>
        <img src={'CraftVine\src\images\Screenshot 2024-04-19 171738.png'} />
      </div>
      <div className='primeligible'>
        <img src={'src/images/prime eligible products.jpg'} />
      </div>
      <div className='shopbycatogory'>Shop By Catogory</div>

      <div className='catogoriesitems'>
        <div className='boxs'></div>
        <div className='boxs'></div>
        <div className='boxs'></div>
        <div className='boxs'></div>
        <div className='boxs'></div>
        <div className='boxs'></div>
        <div className='boxs'></div>
        <div className='boxs'></div>
        <div className='boxs'></div>
        <div className='boxs'></div>
      </div>

      {/* end of the upper half */}

      {/* middle section begins */}
      <div className='editorspick'>
        <p>Editor's picks</p>
      </div>

      <div className='editorspickitems'>
        <div className='newarrival'></div>
        <div className='bestseller'></div>
        <div className='madeinusa'></div>
        </div>

        <div className='undertext'>
          <a href="#">New Arrival</a>
          <a href="#">Best Seller</a>
          <a href="#">Made in USA</a>
        </div>
    </>
  )
}

export default App;
