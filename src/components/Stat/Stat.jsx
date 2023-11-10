import './Stat.css'
import Piechart from '../Piechart/Piechart';

function Stat(props) {

  const { title, pre, statData, post, chartData } = props;

  return (
    <>
        <div className="container">
            <div className="title">{title}</div>
            <div className="content">
                <div className="graph">
                  <Piechart id = "pieChart" data = {chartData} />
                </div>
                <div className = "description" >
                  <span className="text">{pre}</span>
                  <span id="statData" className="text">{statData}</span>
                  <span className="text">{post}</span>
                </div>
            </div>
        </div>
    </>
  );
}

export default Stat;
