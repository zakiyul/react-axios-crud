import React, { useState, useEffect } from "react";
import API from "../Axios/Api";
import CardProduk from "./CardProduk";

function DaftarProduk() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get(`framework`)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  });

  const renderData = data.map((produk, index) => {
    return (
      <CardProduk name={produk.name} lang={produk.language} key_id={index} />
    );
  });

  return (
    <div className="container">
      <h2>Daftar Produk</h2>
      {renderData}
    </div>
  );
}

export default DaftarProduk;
