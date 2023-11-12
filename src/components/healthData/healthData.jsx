import "./healthData.css";
import Piechart from "../Piechart/Piechart";
import AgePiechart from "../Piechart/AgePiechart";
import RiskIcon from "../Piechart/RiskIcon";

function healthData(props) {
  const { title, pre, statData, post, chartData } = props;

  let chartComponent;

  console.log(typeof(statData));

  if (title == "질병 위험도") {
    chartComponent = <RiskIcon className="pieChart" data={statData} />;
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
      <div className="healthData_container">
        <div className="healthData_title">{title}</div>
        <div className="healthData_content">
          <div className="healthData_graph">
            {chartComponent}
            {/* <Piechart className="pieChart" data={chartData} /> */}
          </div>
          <div className="healthData_description">
            <span className="healthData_text">{pre}</span>
            <span id="healthData_data" className="stat_text">
              {statData}단계
            </span>
            <span className="healthData_text">{post}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default healthData;
