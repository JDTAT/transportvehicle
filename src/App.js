import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';

const App = props => {

  let [listData, setListData] = useState([]);
  let [filterYear, setFilterYear] = useState();
  let [launchStatus, setLaunchStatus] = useState();
  let [landingStatus, setLandingStatus] = useState();
  let [isLoading, setIsLoading] = useState(false);
  // let url = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014";


  useEffect(() => {
    let url;
    let filerByYear;
    let filerByLaunch;
    let filerByLanding;

    setIsLoading(!isLoading);

    if (!!filterYear) {
      filerByYear = "&launch_year=" + filterYear
    } else {
      filerByYear = ""
    }

    if (!!launchStatus) {
      let realStatus = launchStatus.toLowerCase() === 'launchtrue' ? true : false
      filerByLaunch = "&launch_success=" + realStatus
    } else {
      filerByLaunch = ""
    }

    if (!!landingStatus) {
      let realStatus = landingStatus.toLowerCase() === 'true' ? true : false
      filerByLanding = "&land_success=" + realStatus
    } else {
      filerByLanding = ""
    }

    url = "https://api.spacexdata.com/v3/launches?limit=100" + filerByLaunch + "" + filerByLanding + "" + filerByYear

    Axios.get(url)
      .then((response) => {
        setIsLoading(false);
        setListData(response.data);
      })
      .then((err) => {
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, [filterYear, launchStatus, landingStatus]);

  useEffect(() => {

    let yearBox = document.getElementsByClassName("btn");
    for (var a = 0; a < yearBox; a++) {
      yearBox[a].style.backgroundColor = "yellow"
    }
  }, []);

  const onYearChange = (e) => {
    let val = e.target.id;
    console.log(e.target.id);
    setFilterYear(val);

    let yearBox = document.getElementsByClassName("btn");
    for (var a = 0; a < yearBox.length; a++) {
      yearBox[a].style.backgroundColor = "#adf5ad";
      document.getElementById(val).style.backgroundColor = "#a2a20c"
    }


  }

  const onLaunchChange = (e) => {
    let val = e.target.id;
    setLaunchStatus(val);
    let yearBox = document.getElementsByClassName("launchbtn");
    for (var a = 0; a < yearBox.length; a++) {
      yearBox[a].style.backgroundColor = "#adf5ad";
      document.getElementById(val).style.backgroundColor = "#a2a20c"
    }
  }

  const onLandingChange = (e) => {
    let val = e.target.id;
    setLandingStatus(val);
    let yearBox = document.getElementsByClassName("landbtn");
    for (var a = 0; a < yearBox.length; a++) {
      yearBox[a].style.backgroundColor = "#adf5ad";
      document.getElementById(val).style.backgroundColor = "#a2a20c"
    }
  }


  return (
    <div>
      <h1>SpaceX Launch Programs </h1>
      <div className="container">
        {/* Filter Start*/}
        <div className="filter_container">
          <b>Filters</b>
          <p style={{ textAlign: "center", margin: "0px" }}>Launch Year</p>
          <hr style={{ width: "60%" }} />
          <div className="txt_center">
            <button id="2006" className="btn" onClick={onYearChange}>2006</button>
            <button id="2007" className="btn" onClick={onYearChange}>2007</button>
            <button id="2008" className="btn" onClick={onYearChange}>2008</button>
            <button id="2009" className="btn" onClick={onYearChange}>2009</button>
            <button id="2010" className="btn" onClick={onYearChange}>2010</button>
            <button id="2011" className="btn" onClick={onYearChange}>2011</button>
            <button id="2012" className="btn" onClick={onYearChange}>2012</button>
            <button id="2013" className="btn" onClick={onYearChange}>2013</button>
            <button id="2014" className="btn" onClick={onYearChange}>2014</button>
            <button id="2015" className="btn" onClick={onYearChange}>2015</button>
            <button id="2016" className="btn" onClick={onYearChange}>2016</button>
            <button id="2017" className="btn" onClick={onYearChange}>2017</button>
            <button id="2018" className="btn" onClick={onYearChange}>2018</button>
            <button id="2019" className="btn" onClick={onYearChange}>2019</button>
            <button id="2020" className="btn" onClick={onYearChange}>2020</button>
          </div>

          <div>
            <p style={{ textAlign: "center", margin: "0px" }}>Successfull Launch</p>
            <hr style={{ width: "60%" }} />
            <div className="txt_center">
              <button id="launchtrue" className="launchbtn" onClick={onLaunchChange}>True</button>
              <button id="launchfalse" className="launchbtn" onClick={onLaunchChange}>False</button>
            </div>
          </div>

          <div>
            <p style={{ textAlign: "center", margin: "0px" }}>Successfull Landing</p>
            <hr style={{ width: "60%" }} />
            <div className="txt_center">
              <button id="true" className="landbtn" onClick={onLandingChange}>True</button>
              <button id="false" className="landbtn" onClick={onLandingChange}>False</button>
            </div>
          </div>

        </div>
        {/* Filter End */}
        {/* List Start */}
        <div className="list_container">
          {isLoading ? <div>Loading......</div> :
            <React.Fragment>
              {listData.length > 0 ?
                listData.map((item, index) => {
                  let missionId = "Not mentioned";
                  if (item.mission_id.length > 0) {
                    missionId = item.mission_id;
                  }
                  return <div style={{ height: "500px", padding: "20px", backgroundColor: "white", borderRadius: "5px" }}>
                    <div style={{ height: "200px" }}><img src={item.links.mission_patch_small} height="100%" width="100%" /></div>
                    <div className="fnn"><b>{item.mission_name}#{item.flight_number}</b></div>
                    <div>
                      <b>Mission Ids</b>
                      <ul>
                        <li>{missionId}</li>
                      </ul>
                    </div>
                    <div><span><b>Launch Year: </b> {item.launch_year}</span></div>
                    <div><span><b>Successfull Launch:</b></span> {item.launch_success ? <span>true</span> : <span>false</span>}</div>
                    <div><span><b>Successfull Landing:</b></span> {item.rocket.first_stage.cores[0].land_success ? <span>true</span> : <span>false</span>}</div>
                  </div>


                })
                : <div>No data found</div>}
            </React.Fragment>
          }

        </div>
        {/* List End */}

      </div>
      <div className="txt_center"><b>Developed By</b>: Joginder Singh</div>
    </div>
  );
}


export default App;
