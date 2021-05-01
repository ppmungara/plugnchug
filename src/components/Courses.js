import React from "react";
import Sidebar from "./Sidebar";
import Assignment from "./Assignment";
import Comments from "./Comments"
// import universities from "../data/universities";
// import { projectStorage } from "../firebase/config";
// import useStorage from "../hooks/useStorage";

import { connect } from "react-redux";

function Courses(props) {
  return (
    <React.Fragment>
    <section className="content">
      <div className="container flex">
        <div className="sidebar">
          <Sidebar/>
        </div>
        <div className="assignment">
          <Assignment />
        </div>
      </div>
    </section>
    <Comments />
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return state;
};


export default connect(mapStateToProps)(Courses);
