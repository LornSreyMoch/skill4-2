import React, { useState, useEffect } from "react";
import { getProvince, getDistrict, getFarmersByDistrict } from "../api/province";
import "../styles/Dropdown.css";

const Dropdown = ({ setFarmers }) => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const provincesData = await getProvince();
        console.log("Data: ", provincesData);

        setProvinces(provincesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = async (event) => {
    console.log("Selected Province: ", event.target.value);
    const districtsData = await getDistrict(event.target.value);
    setDistricts(districtsData);
    console.log(districtsData);
  };

  const handleChangedis = async (event) => {
    console.log("Selected District: ", event.target.value);
    const farmerData = await getFarmersByDistrict(event.target.value);
    setFarmers(farmerData);
    console.log(farmerData);
  };

  return (
    <div className="App">
      <div className="dropdown-container">
        <select onChange={handleChange}>
          <option value="">All</option>
          {provinces.map((province) => (
            <option key={province.name} value={province.id}>
              {province.name}
            </option>
          ))}
        </select>

        <select onChange={handleChangedis}>
          <option value="">All</option>
          {districts.map((district) => (
            <option key={district.id} value={district.id}>
              {district.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
