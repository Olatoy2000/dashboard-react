import "./home.scss";
import TopBox from "../../components/topBox/topBox";
import ChatBox from "../../components/chartBox/chartBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxUser,
} from "../../data";
import PieChartBox from "../../components/pieChartBox/pieChartBox";
import BarChartBox from "../../components/barChartBox/barChartBox";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChatBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChatBox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChatBox {...chartBoxConversion} />
      </div>
      <div className="box box6">Box6</div>
      <div className="box box7">Box7</div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};
export default Home;
