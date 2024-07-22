import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import { getFarmers } from "../api/Farmer";
import "../styles/Table.css";
import Dropdown from "../components/Dropdown";

export const Farmers = () => {
  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFarmers();
        console.log("Data fetched:", data);

        const data1 = data.map((item) => {
          return {
            id: item.id,
            id_card: item.id_card,
            First_name: item.first_name,
            Last_name: item.last_name,
            Gender: item.gender,
            Phone: item.phone,
            Source: item.source,
            District_id: item.district_id,
            Register: item.registered_by,
          };
        });
        console.log(data1);

        setFarmers(data1);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Dropdown setFarmers={setFarmers} />
      <Table
        headers={[
          "id",
          "id_card",
          "First_name",
          "Last_name",
          "Gender",
          "Phone",
          "Source",
          "District_id",
          "Register_by",
          "Name",
          "Province_id"
        ]}
        data={farmers}
      />
    </>

  );
};

export default Farmers;
