import "./healthData.css";
import Piechart from "../Piechart/Piechart";
import AgePiechart from "../Piechart/AgePiechart";
import RiskIcon from "../Piechart/RiskIcon";

function HealthData(props) {
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
        <div className="healthData_container">
            <div className="healthData_title">{title}</div>
                <div className="healthData_graph">
                    {chartComponent}
                </div>
        </div>
    </>
  );
}

export default HealthData;
