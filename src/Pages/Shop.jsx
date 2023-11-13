import React from "react";
import Heroi from "../Components/Hero/Heroi";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";

const Shop = () => {
  return (
    <div>
      <Heroi />
      <Popular />
      <Offers />
      <NewCollections />
    </div>
  );
};

export default Shop;
