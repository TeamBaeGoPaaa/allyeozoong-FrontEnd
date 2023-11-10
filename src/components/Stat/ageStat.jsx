import './ageStat.css'
import Piechart from '../Piechart/Piechart';

function AgeStat(props) {

  const { title, pre, statData, post } = props;

  return (
    <>
        <div className="age_container">
            <div className="title">{title}</div>
            <div className="age_content">
                <div className = "age_description" >
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
