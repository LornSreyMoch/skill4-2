import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import { getFarmers } from "../api/Farmer";
import "../styles/Table.css";

const Farmers = () => {
  const [Farmers, setFarmers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFarmers();
        console.log("Data fetched:", data);

        const data1 = data.map(item => {
          return {
            "id": item.id,
            "id_card": item.id_card,
            "First_name": item.first_name,
            "Last_name":item.last_name,
            "Gender": item.gender,
            "Phone": item.phone,
            "Source": item.source,
            "District_id": item.district_id,

          }
        })
        console.log(data1);

        setFarmers(data1);
        // return farmersData;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
<>
   
     
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
        ]}
        data={Farmers}
      />
    </>

  );
};

export default Farmers;

//  <tbody>
//         {Farmers.map((farmer, index) => (
//           <tr key={farmer.id}>
//             <td>{index + 1}</td>
//             <td>{farmer.id_card}</td>
//             <td>{farmer.first_name}</td>
//             <td>{farmer.last_name}</td>
//             <td>{farmer.gender}</td>
//             <td>{farmer.phone}</td>
//             <td>{farmer.source}</td>
//             <td>{farmer.district_id}</td>
//             <td>Edit</td>]}
//     />
//   );
// }
//           </tr>
//         ))}
//       </tbody>
