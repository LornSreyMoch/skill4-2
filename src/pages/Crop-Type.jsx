import Table from "../components/Table";
import { useEffect, useState } from "react";
import { getCropTypes } from "../api/crop-cycle";
import "../styles/Table.css";

const CropTypes = () => {
  const [CropType, setCropType] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const data = await getCropTypes();

        console.log("Data fetched: ", {data});

        const data1 = data.map(item => {
          return {
            "ID": item.id,
            "Name": item.name,
            "Crop-Type": item.crop_type_id
          }
        })

        console.log(data1);

        setCropType(data1);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);
  return(
    <>
    <Table 
      headers={[
        "ID",
        "Name",
        "Crop-Type"
      ]}
      data={CropType}
    />
    </>
  );
};

export default CropTypes;