import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { faFaceSurprise } from "@fortawesome/free-solid-svg-icons";
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";
import "./RiskIcon.css";

function RiskIcon(level) {
  // console.log("위험도렙벨: ", level.data);

    let riskLevel;
    let faceIcon;

    let thisLevel = parseInt(level.level);
  

  if (level.level > 0 && level.level < 5) {
    //1,2,3,4
    riskLevel = 1;
    faceIcon = (
      <FontAwesomeIcon
        icon={faFaceSmile}
        style={{ color: "#4ead00" }}
        size="9x"
      />
    );
  } else if (level.level >= 5 && level.level < 8) {
    //5,6,7
    riskLevel = 2;
    faceIcon = (
      <FontAwesomeIcon
        icon={faFaceSurprise}
        style={{ color: "#ffbb00" }}
        size="9x"
      />
    );
  } else {
    // 8,9,10
    riskLevel = 3;
    faceIcon = (
      <FontAwesomeIcon
        icon={faFaceSadTear}
        style={{ color: "#d60000" }}
        size="9x"
      />
    );
  }

  return (
    <>
      <div className="risk_face" style={{ margin: "25px 90px" }}>
        {faceIcon}
      </div>
      <h2
        className="risk_info"
        style={{
          color:
            riskLevel == 1 ? "#4ead00" : riskLevel == 2 ? "#ffbb00" : "#d60000",
        }}
      >
        <strong>{level.data}단계</strong>
      </h2>
    </>
  );
}

export default RiskIcon;
