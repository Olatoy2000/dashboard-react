import { Link } from "react-router-dom"
import "./ChatBox.scss";
import { data } from "../../data"
import { LineChart, Line, ResponsiveContainer } from 'recharts';
const ChatBox = () => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
            <img src="/user.svg" alt="" />
            <span>Total Users</span>
        </div>
        <h1>11.238</h1>
        <Link to="/">View all</Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={data}>
            <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
        </div>
        <div className="texts">
            <div className="percentage">45%</div>
            <div className="duration">this month</div>
        </div>
      </div>
    </div>
  )
}

export default ChatBox
