import "./navbar.css"
const Navbar = () => {
  return (
     <nav className="container_nav">
  <a href="">Home</a>
  <a href="">Piezas</a>
  <a href="">Combos</a>
  <Navlink to='cart' >
    <CartWidget/>
  </Navlink>

     </nav> );
}
export default Navbar;