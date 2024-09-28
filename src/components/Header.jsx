import { useState, useRef, useContext } from "react";
import logo from "../assets/logo.webp";
import CartModal from "./CartModal.jsx";
import { CartContext } from "../store/shopping-cart-context.jsx";

export default function Header() {
  const modal = useRef();
  const { items } = useContext(CartContext);

  const cartQuantity = items.length;

  const [fixedHeader, setFixedHeader] = useState(false);

  function handlingFixedHeader() {
    if (window.scrollY >= 5) {
      //header height plus hero section
      setFixedHeader(true);
    } else {
      setFixedHeader(false);
    }
  }

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  window.addEventListener("scroll", handlingFixedHeader);
  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />
      <header
        className={fixedHeader ? " main-header sticky-header " : "main-header"}
      >
        <div id="main-title">
          <img src={logo} alt="Zinnia Attire" />
        </div>

        <button onClick={handleOpenCartClick}>
          Cart <span>{cartQuantity}</span>
        </button>
      </header>
    </>
  );
}
