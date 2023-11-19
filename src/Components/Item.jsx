import React from "react";
import { Link } from "react-router-dom";

const Item = ({id,imgURL,title,MRP}) => {
  return (
    <div className="flex flex-col items-center gap-2" key={id}>
      <Link to={`/product/${id}`}><img src={imgURL} alt="nike air" width={374} height={374} /></Link>
      <p className="text-lg font-montserrat font-semibold">{title}</p>
      <p>{MRP}</p>
    </div>
  );
};

export default Item;
