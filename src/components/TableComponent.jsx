import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./../styles/table.css";
import { fontFamily, fontSize } from "../assets/fonts";
const TableComponent = () => {
  const applyStyle=()=>{
    const th=document.querySelectorAll("th");
    const td=document.querySelectorAll("td");
    th.forEach((element) => {
      element.style.fontFamily=fontFamily.poppins;
      element.style.fontSize=fontSize.xxs;
    });
    td.forEach((element) => {
      element.style.fontFamily=fontFamily.poppins;
      element.style.fontSize=fontSize.xxs;
    });
  }
  useEffect(() => {
    applyStyle();
  }
  , []);
  const submitted = useSelector((state) => state.form.submittedData);
  return (
    <div className="container" style={{fontFamily:fontFamily.poppins}}>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
          </tr>
        </thead>
        <tbody>
          {submitted.map((info, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{info.name}</td>
              <td>{info.email}</td>
              <td>{info.phone}</td>
              <td>{info.street}</td>
              <td>{info.city}</td>
              <td>{info.state}</td>
              <td>{info.zip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
