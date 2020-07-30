import React from "react";

export default function CardProduk({ key_id, name, lang }) {
  return (
    <div className="card p-3" key={key_id}>
      <div className="card-title">Name : {name}</div>
      <div className="card-title">Language : {lang}</div>
    </div>
  );
}
