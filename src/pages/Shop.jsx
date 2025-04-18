import React from "react";
import Benefits from "../components/Benefits";
import Hero from "../components/Hero";
import IconButton from "../components/IconButton";
import { HiViewGrid } from "react-icons/hi";
import { BsViewList } from "react-icons/bs";
import { RiEqualizerLine } from "react-icons/ri";

const Shop = () => {
  const [show, setShow] = React.useState(16);
  const [sort, setSort] = React.useState("default");
  return (
    <div className="shop">
      <main>
        <Hero title={"shop"} />
        <div className="display-options">
          <div className="one">
            <div>
              <IconButton icon={<RiEqualizerLine size={20} />} />
              <h5>Filter</h5>
            </div>
            <IconButton icon={<HiViewGrid size={20} />} />
            <IconButton icon={<BsViewList size={20} />} />
            <p>Showing 1-16 of 32 items</p>
          </div>
          <form>
            <div>
              <h4>Show</h4>
              <input
                type="number"
                name="show"
                value={show}
                onChange={(e) => setShow(e.target.value)}
              />
            </div>
            <div>
              <h4>Sort by</h4>
              <input
                type="text"
                name="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="products"></div>
      </main>
      <Benefits />
    </div>
  );
};

export default Shop;
