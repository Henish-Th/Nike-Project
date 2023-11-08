import React from "react";
import { allProducts } from "../constants";

const AllProductPage = () => {
  return (
    <section>
      <h2 className="text-xl font-montserrat font-semibold text-center py-5">All Products</h2>
      <div className="grid gap-4 grid-cols-3">
        {allProducts.map((elem, index) => (
          <div className="flex flex-col items-center gap-2">
            <img src={elem.imgURL} alt="nike air" width={374} height={374} />
            <p className="text-lg font-montserrat font-semibold">{elem.title}</p>
            <p>{elem.MRP}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProductPage;
