import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";

type PizzaProps = {
  formData: {
    pizzaTitle: string;
    pizzaImage: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};
const Pizza = ({ formData, setFormData }: PizzaProps) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [transPerPage] = useState(5);
  const [search, setSearch] = useState("");
  const indexOfLastTrans = currentPage * transPerPage;
  const indexOfFirstTrans = indexOfLastTrans - transPerPage;
  const currentTrans = filteredData?.slice(indexOfFirstTrans, indexOfLastTrans);

  const changePaginationTrans = (page: number) => {
    setCurrentPage(page);
  };

  //simulating making an api call, data is stored in data.json file
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson.recipes);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const filter = data?.filter((item: { title: string }) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filter);
    setCurrentPage(1);
  }, [search, data]);


  return (
    <div>
      <strong>Select a recipe to continue</strong>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "95%", marginTop : 5 }}
        placeholder="search recipe"
      />
      <div className="pizza-card">
        {currentTrans.map((item: { title: string; image_url: string }) => (
          <div
            className={
              formData.pizzaTitle === item.title
                ? "pizza-item active"
                : `pizza-item `
            }
            key={item.title}
            onClick={() =>
              setFormData({
                ...formData,
                pizzaTitle: item.title,
                pizzaImage: item.image_url,
              })
            }
          >
            <img src={item.image_url} alt={item.title} />{" "}
            <span> {item.title}</span>
          </div>
        ))}
      </div>
      <Pagination
        transPerPage={transPerPage}
        currentPage={currentPage}
        totalTrans={filteredData?.length}
        paginationHandler={(num) => changePaginationTrans(num)}
      />
    </div>
  );
};

export default Pizza;
