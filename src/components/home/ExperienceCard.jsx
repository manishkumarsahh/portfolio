import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <a href={data.url}><img className=" bg-white mb-3" src={data.companylogo} alt="" href={data.url} /></a>
        {/* <img className=" bg-white mb-3" src={data.companylogo} alt="" href={data.url} /> */}
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>

      </div>
    </Col>
  );
}

export default ExperienceCard;