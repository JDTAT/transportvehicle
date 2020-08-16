import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';
import { Card, Input, Form, Button, message, Tag, Row, Col, DatePicker } from 'antd'
import "antd/dist/antd.css";
import { CheckCircleOutlined } from '@ant-design/icons'
import arrow from './arrow.png'


const App = props => {

  let [startDate, setStartDate] = useState();
  let [tripSummary, setTripSummary] = useState();
  let [totalTripTime, setTotalTripTime] = useState();

  let url = "https://staging.watsoo.com:8080/watsoo-amazon-api//trip-controller-web/v1/vehicle/wise/summary/36";


  function onStartDateChange(d, dateString) {
    let date = new Date(dateString);
    let time = date.getTime();
    console.log("Start Date" + dateString);
    console.log("Start Time" + time);
  }

  function onLastDateChange(d, dateString) {
    let date = new Date(dateString);
    let time = date.getTime();
    console.log("Start Date" + dateString);
    console.log("Start Time" + time);
  }



  useEffect(() => {
    const body = {
      "clientId": 10,
      "dataRecord": {
        "userRoleId": 4,
        "userRoleName": "COMPANY",
        "userId": 10
      },
      "fromDate": 1577888571659,
      "toDate": 1593613371659,
      "tripId": 36
    }
    Axios.post(url, body)
      .then((response) => {
        // setIsLoading(false);
        // setListData(response.data);
        setTripSummary(response.data);
        console.log(response.data);
      })
      .then((err) => {
        // setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        // setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {console.log("=========")}
      {console.log(tripSummary)}
      {/* Header */}
      <div className="top_header">
        {/* left side */}
        <div>
          <h3 style={{ margin: "0px" }}>Trip Summary</h3>
          <span style={{ color: "blue" }}>dashboard </span> / <span> Trip Summary</span>
        </div>
        {/* left side */}
        {/* right side */}
        <div>
          <div className="date_from_to">

            <DatePicker onChange={onStartDateChange} className="mr-10" /> TO <DatePicker onChange={onLastDateChange} className="mr-10" />
          </div>
        </div>
        {/* right side */}

      </div>
      {/* Header */}

      <div>
        <div>
          <div style={{ display: "flex", marginRight: "5px", marginBottom: "5px" }}>
            <Tag icon={<CheckCircleOutlined />} color="success" className="box_top box_one">
              {tripSummary && tripSummary.data ? <span>{tripSummary.data.vehicleNo}</span> : null}</Tag>
            <Tag icon={<CheckCircleOutlined />} color="success" className="box_top box_two">
              Total Trips :
            {tripSummary && tripSummary.data ? <span> {tripSummary.data.totalTrips}</span> : null}
            </Tag>
            <Tag icon={<CheckCircleOutlined />} color="success" className="box_top box_three">
              {tripSummary && tripSummary.data ? <span> {tripSummary.data.totalKm} KM</span> : null}
            </Tag>
          </div>
          <div style={{ display: "flex", marginRight: "5px" }}>
            <Tag icon={<CheckCircleOutlined />} color="success" className="box_top box_four">
              Trip Time: {(tripSummary && tripSummary.data) ?
                <span>
                  {Math.floor((tripSummary.data.totalTripTime / (1000 * 60 * 60)) % 24) > 0 ?
                    <span>{Math.floor((tripSummary.data.totalTripTime / (1000 * 60 * 60)) % 24)} hrs </span>
                    : null}
                  {Math.floor((tripSummary.data.totalTripTime / (1000 * 60)) % 60) > 0 ?
                    <span> {Math.floor((tripSummary.data.totalTripTime / (1000 * 60)) % 60)} Min</span>
                    : null}
                </span> : null}
            </Tag>
            <Tag icon={<CheckCircleOutlined />} color="success" className="box_top box_five">
              Trip Time: {(tripSummary && tripSummary.data) ?
                <span>
                  {Math.floor((tripSummary.data.totalTime / (1000 * 60 * 60)) % 24) > 0 ?
                    <span>{Math.floor((tripSummary.data.totalTime / (1000 * 60 * 60)) % 24)} hrs </span>
                    : null}
                  {Math.floor((tripSummary.data.totalTime / (1000 * 60)) % 60) > 0 ?
                    <span> {Math.floor((tripSummary.data.totalTime / (1000 * 60)) % 60)} Min</span>
                    : null}
                </span> : null}
            </Tag>
            <Tag icon={<CheckCircleOutlined />} color="success" className="box_top box_six">
              Total EXP : {(tripSummary && tripSummary.data) ? <span>Rs. {tripSummary.data.totalExpences}</span> : null}
            </Tag>
          </div>
        </div>
      </div>


      {/* Table Card */}
      {(tripSummary && tripSummary.data && tripSummary.data.tripDetails) && tripSummary.data.tripDetails.length > 0 ?
        tripSummary.data.tripDetails.map((item, index) => {
          let tripStart = tripSummary.data.tripDetails[index].startDay;
          let tripEnd = tripSummary.data.tripDetails[index].endDay;
          let diffInTrip = tripEnd - tripStart


          return <div style={{ marginTop: "10px", paddingBottom: "10px", backgroundColor: "white" }}>
            <div style={{
              height: "40px", backgroundColor: "#02023c",
              color: "white", display: "flex", alignItems: "center", paddingLeft: "10px"
            }}>
              Date : &nbsp; {(tripSummary && tripSummary.data && tripSummary.data.tripDetails) && tripSummary.data.tripDetails.length > 0
                ? <span>
                  {(new Date(parseInt(tripSummary.data.tripDetails[index].startDay))).toLocaleString().split(",")[0]}&nbsp;
               at {(new Date(parseInt(tripSummary.data.tripDetails[index].startDay))).toLocaleString().split(",")[1]} &nbsp;
               {(new Date(parseInt(tripSummary.data.tripDetails[index].endDay))).toLocaleString().split(",")[0]}&nbsp;
               at {(new Date(parseInt(tripSummary.data.tripDetails[index].endDay))).toLocaleString().split(",")[1]}
                </span> : null
              }&nbsp;
              ({Math.floor((diffInTrip / (1000 * 60 * 60)) % 24) > 0 ?
                <span>{Math.floor((diffInTrip / (1000 * 60 * 60)) % 24)} hrs &nbsp;</span>
                : null}
                    {Math.floor((diffInTrip / (1000 * 60)) % 60) > 0 ?
                    <span>{Math.floor((diffInTrip / (1000 * 60)) % 60)} Minutes &nbsp;</span> 
                    : <span>00 Minutes</span>})
            </div>
            {/* Table Card Header */}

            {/* Table */}
            <div style={{ margin: "10px" }}>
              <table className="trip_table">
                <tr>
                  <th>#</th>
                  <th>Trip Start node to End Node</th>
                  <th>river Name</th>
                  <th>Trip Expenses</th>
                  <th>Trip Km</th>
                  <th>Trip GPS Km</th>
                  <th>Trip Time</th>
                  <th>Odometer Reading</th>
                  <th>Action</th>
                </tr>
                <tbody>
                  {item.tripLists && item.tripLists.length > 0 ?
                    item.tripLists.map((trip, tripindex) => {
                      

                      let tripTime = trip.tripRunningTime;
                      var milliseconds = parseInt((tripTime % 1000) / 100),
                        seconds = Math.floor((tripTime / 1000) % 60),
                        minutes = Math.floor((tripTime / (1000 * 60)) % 60),
                        hours = Math.floor((tripTime / (1000 * 60 * 60)) % 24);

                      return <tr>
                        <td>{tripindex + 1}</td>
                    <td>{trip.startPointNode}  <img src={arrow} height="20px" width="20px" style={{ marginLeft: "10px", marginRight: "10px" }} />{trip.endPointNode}</td>
                        <td>{trip.driverName}</td>
                        <td>{trip.tripExpenses && trip.tripExpenses.length > 0 ? <span>Rs. {trip.tripExpenses[tripindex].amount}</span> : <span>Rs. 0</span>}</td>
                        <td>{trip.totalKm} Km</td>
                        <td>{trip.gpsDistance} Km</td>
                        <td>{hours > 0 ? <span>{hours + " hrs "}</span> : null}
                          {minutes > 0 ? <span>{minutes + " min"}</span> : null}</td>
                        <td style={{ textAlign: "center" }}>{trip.startODOMeter} <img src={arrow} height="20px" width="20px" style={{ marginLeft: "10px", marginRight: "10px" }} /> {trip.endODOMeter}</td>
                        <td style={{ textAlign: "center" }} >
                          <div>
                            <button style={{ marginRight: "5px" }} className="tbl_btn">Movement Report</button>
                            <button className="tbl_btn">Stoppage Report</button>
                          </div>
                        </td>
                      </tr>
                    }) : null
                  }

                </tbody>
              </table>
            </div>
            {/* Table */}
          </div>
        }) : <div>Error</div>
      }

      {/* Table Card */}
    </div>
  );
}


export default App;
