import './home';
const jewellery= ()=>{
   return (
      <>
     <section id="header">
        <a href="#"><img src={'src/images/craftVine-logo-removebg-preview (1).png'} /></a>
        <div>
          <ul id="navbar">
            <li><a href="/" className='active'>Home</a></li>
            <li><a href="#catogoriesitems">Shop By Catogory</a></li>
            <li><a href="#editorpicks">Editor's choice</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="">Login & Sign-up</a></li>
            <li><a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a></li>
          </ul>
        </div>
      </section>
      </>
   )
} 
export default jewellery;