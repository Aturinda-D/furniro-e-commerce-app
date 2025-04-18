import React from "react";
import SummaryListItem from "../components/SummaryListItem";
import { GrTrophy } from "react-icons/gr";
import { BsPatchCheck } from "react-icons/bs";

const Shop = () => {
  return (
    <div className="shop">
      <main>
        <h1>SHOP</h1>
        <h5>Coming soon</h5>
      </main>
      <div className="benefits">
        <SummaryListItem
          icon={"assets/logos/trophy.svg"}
          title={"high quality"}
          subtitle={"Crafted from top materials"}
        />
        <SummaryListItem
          icon={"assets/logos/check-badge.svg"}
          title={"warranty protection"}
          subtitle={"For over 2 years"}
        />
        <SummaryListItem
          icon={"assets/logos/shipping.svg"}
          title={"free shipping"}
          subtitle={"Order over 150 $"}
        />
        <SummaryListItem
          icon={"assets/logos/customer-support.svg"}
          title={"24/7 support"}
          subtitle={"Dedicated support"}
        />
      </div>
    </div>
  );
};

export default Shop;
