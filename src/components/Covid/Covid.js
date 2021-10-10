import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "./Covid.css";

const Covid = () => {
  const [covidData, setCovid] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.covid19api.com/summary")
      .then((res) => setCovid(res.data.Countries));
  }, []);

  let cases = covidData.map((obj) => (
    <tr>
      <td>{obj.Country}</td>
      <td>{obj.TotalConfirmed}</td>
      <td>{obj.TotalDeaths}</td>
      <td>{obj.TotalConfirmed - obj.TotalDeaths}</td>
    </tr>
  ));

  return (
    <div className="table-back">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Country</th>
            <th>Total Confirmed</th>
            <th>Total Deaths</th>
            <th>Total Recovered</th>
          </tr>
        </thead>
        <tbody>{cases}</tbody>
      </Table>
    </div>
  );
};

export default Covid;
