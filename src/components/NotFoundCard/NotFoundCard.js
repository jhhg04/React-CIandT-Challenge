import React from "react";
import confusedPikachu from "../../assets/not-found.png";
import "../GenericCard.css";

const NotFoundCard = ({ error }) => {
  return (
    <div className="GenericCard">
      <p>
        <strong>error</strong>
      </p>
      <img src={confusedPikachu} alt="notFoundImg" />
    </div>
  );
};

NotFoundCard.propTypes = {};
NotFoundCard.defaultProps = {};

export default NotFoundCard;