import React, { useEffect } from "react";
import useObjectMapper from "../hooks/useObjectMapper.js";
import { v4 as uuidv4 } from "uuid";
import actions from "../data/actions";

import { connect } from "react-redux";
import { projectStorage } from "../firebase/config";

function Sidebar(props) {
  const {
    universities,
    university,
    course,
    assignment,
    question,
    numQuestions,
    dispatch,
  } = props;

  const storage = projectStorage;

  const bucket = `Assignments/${university
    .toLowerCase()
    .replace(/\s/g, "")}/${course
    .toLowerCase()
    .replace(
      /\s/g,
      ""
    )}/assignment_${assignment}/${assignment}_${question}.pdf`;

  const storageRef = storage.ref(bucket);

  useEffect(() => {
    const fetchData = async () => {
      const urlReceived = await storageRef.getDownloadURL();
      return urlReceived;
    };
    fetchData()
      .then((response) => {
        dispatch({ type: actions.changeUrl, payload: { value: response } });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: actions.changeUrl, payload: { value: "" } });
      });
  }, [bucket, dispatch, storageRef]);

  useEffect(() => {
    const fetchData = async () => {
      const listReceived = await storage
        .ref(
          `Assignments/${university
            .toLowerCase()
            .replace(/\s/g, "")}/${course
            .toLowerCase()
            .replace(/\s/g, "")}/assignment_${assignment}`
        )
        .listAll();
      return listReceived;
    };
    fetchData()
      .then((response) => {
        dispatch({
          type: actions.changeNumQuestions,
          payload: { value: response.items.length },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [university, course, assignment, dispatch, storage]);

  const createOptions = (num) => {
    const options = [];
    for (let i = 0; i < num; i++) {
      options.push(
        <option key={uuidv4()} value={i + 1}>
          {i + 1}
        </option>
      );
    }
    return options;
  };

  return (
    <form className="form flex-column">
      <div className="form-control flex">
        <label htmlFor="university">University: </label>
        <select
          name="university"
          id="university"
          value={university}
          onChange={(event) => {
            dispatch({
              type: actions.changeUni,
              payload: { value: event.target.selectedOptions[0].value },
            });
          }}
        >
          {useObjectMapper(universities)}
        </select>
      </div>

      <div className="form-control flex">
        <label htmlFor="course">Course: </label>
        <select
          name="course"
          id="course"
          value={course}
          onChange={(event) => {
            dispatch({
              type: actions.changeCourse,
              payload: { value: event.target.selectedOptions[0].value },
            });
          }}
        >
          {useObjectMapper(universities[university])}
        </select>
      </div>

      <div className="form-control flex">
        <label htmlFor="assignment">Assignment: </label>
        <select
          name="assignment"
          id="assignment"
          value={assignment}
          onChange={(event) => {
            dispatch({
              type: actions.changeAssignment,
              payload: { value: event.target.selectedOptions[0].value },
            });
          }}
        >
          {createOptions(universities[university][course])}
        </select>
      </div>

      <div className="form-control flex">
        <label htmlFor="question">Question: </label>
        <select
          name="question"
          id="question"
          value={question}
          onChange={(event) => {
            dispatch({
              type: actions.changeQuestion,
              payload: { value: event.target.selectedOptions[0].value },
            });
          }}
        >
          {createOptions(numQuestions)}
        </select>
      </div>
    </form>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Sidebar);
