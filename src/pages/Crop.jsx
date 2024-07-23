import React, { useEffect, useState } from 'react';
import Table from '../components/Table';
import { getCrop } from '../api/crop';
import "../styles/Table.css";

const Crops = () => {
  const [crop, setCrop] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCrop();
        console.log("Data fetched: ", data);

        const Data1 = data.map(item => ({
          "ID": item.id,
          "Name": item.name,
        }));

        console.log(Data1);

        setCrop(Data1);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Table 
        headers={["ID", "Name"]}
        data={crop}
      />
    </>
  );
};

export default Crops;
