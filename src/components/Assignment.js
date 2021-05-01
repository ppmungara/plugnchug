import React from "react";
import {connect} from "react-redux";

function Assignment(props) {

  const {url} = props;

  return (
    <div className="assignment">
      {url !== "" 
        ?  
      <>
      <object data={url} type="application/pdf">
        <iframe src={url} title="Assignment"></iframe>
      </object>
      <div className="popout-overlay"></div>
      </> 
        : 
      <div className="no-valid-aq">
        <p>Please select a valid assignment and question</p>
      </div>}
      
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps) (Assignment);
