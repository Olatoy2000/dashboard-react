import "./home.scss";
import TopBox from "../../components/topBox/topBox";
import ChatBox from "../../components/chartBox/ChatBox";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox  />
      </div>
      <div className="box box2">
        <ChatBox />
      </div>
      <div className="box box3"><ChatBox /></div>
      <div className="box box4"><ChatBox /></div>
      <div className="box box5"><ChatBox/></div>
      <div className="box box6">Box6</div>
      <div className="box box7">Box7</div>
      <div className="box box8">Box8</div>
      <div className="box box9">Box9</div>
    </div>
  );
};
export default Home;
