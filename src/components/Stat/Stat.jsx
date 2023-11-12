import "./Stat.css";
import Piechart from "../Piechart/Piechart";
import AgePiechart from "../Piechart/AgePiechart";
import RiskIcon from "../Piechart/RiskIcon";

function Stat(props) {
  const { title, pre, statData, post, chartData } = props;

  let chartComponent;

  if (title == "질병 위험도") {
    chartComponent = <RiskIcon className="pieChart" level={statData} />;
  } else if (title === "빈도") {
    chartComponent = <Piechart className="pieChart" data={chartData} />;
  } else if (title === "연령대") {
    chartComponent = <AgePiechart className="pieChart" data={chartData} />;
  } else {
    // Default component or handle other cases
    chartComponent = null;
  }

  return (
    <>
      <div className="stat_container">
        <div className="stat_title">{title}</div>
        <div className="stat_content">
          <div className="stat_graph">
            {chartComponent}
            {/* <Piechart className="pieChart" data={chartData} /> */}
          </div>
          <div className="stat_description">
            <span className="stat_text">{pre}</span>
            <span id="statData" className="stat_text">
              {statData}
            </span>
            <span className="stat_text">{post}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stat;
