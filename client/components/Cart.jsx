import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function Cart({ items, handleDeleteFromCart }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="shopping-cart"
        variant="secondary"
        onClick={handleShow}
      >
        Cart
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {items.map((item, index) => (
                <li key={index} className="li">
                  {item.artist_name} || {item.album_name}{" "}
                  <Button
                    variant="secondary"
                    size="sm"
                    className="delete-btn"
                    onClick={() => handleDeleteFromCart(item.id)}
                  >
                    X
                  </Button>
                </li>
              ))}
            </ul>
          )}
          <Button>Check Out</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
