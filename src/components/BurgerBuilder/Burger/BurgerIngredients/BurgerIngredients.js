import React from "react";
import "./BurgerIngredients.css";
import PropTypes from "prop-types";

const BurgerIngredients = (props) => {
  let ingredients = null;
  switch (props.type) {
    case "BreadTop":
      ingredients = (
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
      );
      break;

    case "Meat":
      ingredients = <div className="Meat"></div>;
      break;

    case "Cheese":
      ingredients = <div className="Cheese"></div>;
      break;

    case "Salad":
      ingredients = <div className="Salad"></div>;
      break;

    case "Bacon":
      ingredients = <div className="Bacon"></div>;
      break;

    case "BreadBottom":
      ingredients = <div className="BreadBottom"></div>;
      break;

    default:
      ingredients = null;
      break;
  }

  return ingredients;
};

// BurgerIngredients.propTypes = {
//   type: PropTypes.string.isRequired,
// };
export default BurgerIngredients;
