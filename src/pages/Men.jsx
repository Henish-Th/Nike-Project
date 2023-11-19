import React from "react";
import { allProducts } from "../constants";
import Item from "../Components/Item";

const Men = () => {
  return (
    <section>
      <div className="flex justify-between px-36 mt-10">
        <h3 className="text-medium font-montserrat font-semibold">
          Men's Shoes
        </h3>
        <p className="text-medium font-montserrat font-semibold">Sort by</p>
      </div>
      <div className="grid gap-1 grid-cols-3 px-28 py-10">
        {allProducts.map((elem) => {
          if (elem.category == "Mens Shoes") {
            return (
              <Item
                key={elem.id}
                id={elem.id}
                imgURL={elem.imgURL}
                title={elem.title}
                MRP={elem.MRP}
              />
            );
          } else return null;
        })}
      </div>
    </section>
  );
};

export default Men;
