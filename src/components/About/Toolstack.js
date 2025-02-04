import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiMacos,
  SiVisualstudiocode,
  SiPostman,
  SiMicrosoftteams,
  SiMicrosoftazure,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-macos">macOS</Tooltip>}
        >
          <span>
            <SiMacos />
          </span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-vscode">Visual Studio Code</Tooltip>}
        >
          <span>
            <SiVisualstudiocode />
          </span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-postman">Postman</Tooltip>}
        >
          <span>
            <SiPostman />
          </span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-teams">Microsoft Teams</Tooltip>}
        >
          <span>
            <SiMicrosoftteams />
          </span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-vercel">Azure</Tooltip>}
        >
          <span>
            <SiMicrosoftazure />
          </span>
        </OverlayTrigger>
      </Col>
    </Row>
  );
}

export default Toolstack;
