import './ageStat.css'
import AgePiechart from '../Piechart/AgePiechart';

function AgeStat(props) {

  const { title, pre, statData, post, chartData } = props;

  return (
    <>
        <div className="stat_container">
            <div className="title">{title}</div>
            <div className="content">
                <div className="graph">
                  <AgePiechart id = "pieChart" data = {chartData} />
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

export default AgeStat;
