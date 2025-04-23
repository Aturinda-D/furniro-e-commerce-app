import React from "react";
import Benefits from "../components/Benefits";
import Hero from "../components/Hero";
import IconButton from "../components/IconButton";
import ProductCard from "../components/ProductCard";
import { HiViewGrid } from "react-icons/hi";
import { BsViewList } from "react-icons/bs";
import { RiEqualizerLine } from "react-icons/ri";

const Shop = () => {
  const sampleProducts = [
    {
      image: "assets/images/sample_img_1.png",
      title: "syltherine",
      subtitle: "stylish cafe chair",
      price: 2500000,
      from: 3500000,
    },
    {
      image: "assets/images/sample_img_2.png",
      title: "leviosa",
      subtitle: "stylish cafe chair",
      price: 2500000,
    },
    {
      image: "assets/images/sample_img_3.png",
      title: "lolito",
      subtitle: "luxury big chair",
      price: 7000000,
      from: 14000000,
    },
    {
      image: "assets/images/sample_img_4.png",
      title: "respira",
      subtitle: "outdoor bar table and stool",
      price: 500000,
      isNew: true,
    },
  ];
  const [show, setShow] = React.useState(16);
  const [sort, setSort] = React.useState("default");
  const [products, setProducts] = React.useState([]);
  const [filteredProducts, setFilteredProducts] = React.useState([]);

  const handleOnShowChange = (e) => {
    if (e.target.value < 0) {
      setShow(0);
    } else if (e.target.value > products?.length) {
      setShow(products?.length);
    } else if (e.target.value == "") {
      setShow(0);
    } else {
      setShow(e.target.value.replace(/^0+/, ""));
    }
  };

  React.useEffect(() => {
    const displayedProducts = [];
    for (let i = 1; i <= 4; i++) {
      displayedProducts.push(...sampleProducts);
    }
    setProducts(displayedProducts);
  }, []);
  React.useEffect(() => {
    setFilteredProducts(products.filter((product, index) => index < show));
  }, [show, products]);

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
            <p>
              Showing 1-{show} of {products?.length} items
            </p>
          </div>
          <form>
            <div>
              <h4>Show</h4>
              <input
                type="number"
                name="show"
                value={show}
                onChange={handleOnShowChange}
                min={0}
                max={products?.length}
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
        <div className="products">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              image={product?.image}
              title={product?.title}
              subtitle={product?.subtitle}
              price={product?.price}
              from={product?.from}
              isNew={product?.isNew}
            />
          ))}
        </div>
      </main>
      <Benefits />
    </div>
  );
};

export default Shop;
