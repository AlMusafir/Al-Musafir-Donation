import { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const Statistics = () => {
  const [allDonatioin, setAllDonation] = useState([]);
  const [noDataFound, setNoDataFound] = useState("");

  useEffect(() => {
    const getItem = JSON.parse(localStorage.getItem('details'));
    if (getItem) {
      setAllDonation(getItem);
    } else {
      setNoDataFound("No data found");
    }
  }, []);

  const totalDonation = 12;
  const yourPercentage = (allDonatioin.length / totalDonation) * 100;
  const yourRemaining = 100 - yourPercentage;

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 ">
        {
          <div>
            {noDataFound ? (
              <div>
                {" "}
                <p className="h-[80vh] flex justify-center items-center text-2xl">
                  {noDataFound}
                </p>
              </div>
            ) : (
              <div>
                <Chart
                  className="h-[80vh] flex justify-center items-center"
                  type="pie"
                  height={500}
                  series={[yourPercentage, yourRemaining]}
                  options={{
                    labels: ["your Donation ", "Total Donation"],
                  }}
                ></Chart>
              </div>
            )}
          </div>
        }
      </div>
    </div>
  );
};

export default Statistics;
