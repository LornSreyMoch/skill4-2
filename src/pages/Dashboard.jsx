import React, { useState, useEffect } from 'react';
import { 
  getTotalFarmers,
  getTotalFarmlands,
  getactiveCropCycles,
  getTotalFarmlandSize
} from '../api/summary';
import '../styles/Dashboard.css';
import Boxdashboard from '../components/Boxdashboard';


const Dashboard = () => {
  const [totalFarmers, setTotalFarmers] = useState(0);
  const [totalFarmlands, setTotalFarmlands] = useState(0);
  const [activeCropcycles, setActiveCropcycles] = useState(0);
  const [totalFarmlandSize, setTotalFarmlandSize] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const farmersData = await getTotalFarmers();
        const farmlandsData = await getTotalFarmlands();
        const cropcyclesData = await  getactiveCropCycles();  
        const farmlandSizeData = await getTotalFarmlandSize();

        console.log("Data fetched: ", { farmersData, farmlandsData, cropcyclesData, farmlandSizeData });


        setTotalFarmers(farmersData.totalFarmers);
        setTotalFarmlands(farmlandsData.totalFarmlands);
        setActiveCropcycles(cropcyclesData.activeCropCycles);
        setTotalFarmlandSize(farmlandSizeData.totalFarmlandSize);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);  

  return (
    <div className="dashboard-container">
      <div className="dashboard-stats">
        <Boxdashboard title="Total Farmers" value={totalFarmers} />
          <Boxdashboard title="Total Farmlands" value={totalFarmlands} />
        <Boxdashboard title="Active Cropcycles" value={activeCropcycles} />
        <Boxdashboard title="Total Farmland Size" value={totalFarmlandSize} />
      </div>
    </div>
  );
};

export default Dashboard;


