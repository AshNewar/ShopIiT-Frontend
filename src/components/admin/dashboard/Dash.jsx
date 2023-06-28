import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, ArcElement, Legend } from "chart.js";
import Loader from "../Loader";
import "./dash.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { adminRequest } from "../../../redux/action/admin";

ChartJS.register(Tooltip, ArcElement, Legend);


const Box = ({ title, value }) => (
  <div className="dashbox">
    <h3>
      {title === "Income" && "₹ "}
      {value}
    </h3>
    <p>{title}</p>
  </div>
);

const Dashboard = () => {
  const dispatch=useDispatch();
  const {loading,totalUser,totalIncome,orderCount}=useSelector(state=>state.admin);

  useEffect(()=>{
    dispatch(adminRequest());
  },[dispatch]);





  const data = {
    labels: ["Preparing", "Shipped", "Delivered"],
    datasets: [
      {
        label: "# of orders",
        data:orderCount ? [orderCount.preparing,orderCount.shipping,orderCount.delivered] : [0,0,0] ,
        backgroundColor: [
          "rgba(159,63,176,0.1)",
          "rgba(78,63,176,0.2)",
          "rgba(156,0,60,0.3)",
        ],
        borderColor: ["rgb(159,63,176)", "rgb(78,63,176)", "rgb(156,0,60)"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <section className="dashboard">
      {loading === false ? (
        <main className="dashmain">
          <article className="dashheader">
            <Box   title="Users" value={totalUser} />
            <Box  title="Orders" value={orderCount.total} />
            <Box  title="Income" value={totalIncome} />
          </article>

          <section className="dashchart">
            <div className="dashbutton">
              <Link className="dashkey" to="/admin/orders">View Orders</Link>
              <Link className="dashkey" to="/admin/users">View Users</Link>
            </div>

            <aside>
              <Doughnut className="dashgraph" data={data} />
            </aside>
          </section>
        </main>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Dashboard;