import React, { useState } from "react";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import "./Burger.css";
import "./BuildControls/BuildControl.css";
import BuildControls from "./BuildControls/BuildControls";
import { Modal, Button } from "react-bootstrap";

const Burger = () => {
  const [ingredients, setIngredients] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let burger = ingredients.map((ing, ind) => (
    <BurgerIngredients type={ing} key={ind} />
  ));

  // =====================Add Ingredients=========================

  const addMeat = () => {
    let meat = ingredients.push("Meat");
    setIngredients([...ingredients, meat]);
  };

  const addSalad = () => {
    let salad = ingredients.push("Salad");
    setIngredients([...ingredients, salad]);
  };

  const addCheese = () => {
    let cheese = ingredients.push("Cheese");
    setIngredients([...ingredients, cheese]);
  };

  const addBacon = () => {
    let bacon = ingredients.push("Bacon");
    setIngredients([...ingredients, bacon]);
  };

  // =====================Less Ingredients=========================

  const createAgain = () => {
    // let meat = ingredients.pop();
    setIngredients([]);
  };

  return (
    <>
      <div className="burger-container">
        <BurgerIngredients type="BreadTop" />
        {burger}
        <BurgerIngredients type="BreadBottom" />
      </div>

      <BuildControls label="Meat" addIngredient={addMeat} />
      <BuildControls label="Salad" addIngredient={addSalad} />
      <BuildControls label="Bacon" addIngredient={addBacon} />
      <BuildControls label="Cheese" addIngredient={addCheese} />

      <div className="BuildControl">
        <button className="Less" onClick={createAgain}>
          Create Again
        </button>

        <button className="More" onClick={handleShow}>
          Order Now
        </button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Order</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Burger;
