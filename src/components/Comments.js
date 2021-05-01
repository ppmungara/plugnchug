import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { projectDatabase } from "../firebase/config";
import actions from "../data/actions";

function Comments(props) {
  const { university, course, assignment, question, dispatch, commentData } = props;

  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user && comment) {
      setUser("");
      setComment("");

      const getDate = new Date();
      const date = `${getDate.getDate()}/${getDate.getMonth()+1}/${getDate.getFullYear()} @ ${getDate.getHours()}:${getDate.getMinutes()}`;

      const databaseRef = projectDatabase.ref(`${university}/${course}/${assignment}/${question}/comments/`);
      databaseRef
        .push({
          user,
          comment,
          date
        });
      databaseRef.on('value', (snapshot)=>{
          const data = snapshot.val();
          dispatch({type: actions.changeCommentData, payload: {value: data}});
        });
    }
    if (!user) {
      const userInput = document.querySelector('#comment-user');
      userInput.classList.add("invalid");
    }
    if (!comment) {
      const commentInput = document.querySelector('#comment-text');
      commentInput.classList.add("invalid");
    }
    
  };

  useEffect(() => {
    const databaseRef = projectDatabase.ref(`${university}/${course}/${assignment}/${question}/comments/`);
    databaseRef.on('value', (snapshot)=>{
      const data = snapshot.val();
      dispatch({type: actions.changeCommentData, payload: {value: data}});
    });
  }, [university, course, assignment, question, dispatch]);

  return (
    <React.Fragment>
      <div className="comment-section container">
        <h3>{commentData ? Object.keys(commentData).length : 0} Comments</h3>
        <form className="flex-column">
          <div className="form-control flex">
            <label htmlFor="comment-user">Name: </label>
            <input
              type="text"
              name="comment-user"
              id="comment-user"
              value={user}
              onChange={(e) => handleUserChange(e)}
            />
          </div>
          <div className="form-control flex">
            <label htmlFor="comment-comment">Comment: </label>
            <textarea
              type="text"
              name="comment-text"
              id="comment-text"
              value={comment}
              onChange={(e) => handleCommentChange(e)}
            />
          </div>
          <div className="form-control-button flex">
            <button type="submit" onClick={(e) => handleSubmit(e)}>
              Submit
            </button>
          </div>
        </form>
        <div className="comments-view">
          
          {

            commentData && Object.keys(commentData).map(comment => {
              return ( 
                  <div key={comment} className="comment card flex">
                    <img className="comment-image" src="https://firebasestorage.googleapis.com/v0/b/plugnchug-3b5dd.appspot.com/o/Assets%2Fprofile-picture-placeholder.png?alt=media&token=41504cdc-9565-4fb3-812f-3bb8f6ad8c57" alt="profile-pic-placeholder"/>
                    <div className="comment-content flex-column">
                      <div className="comment-text">{commentData[comment].comment}</div>
                      <div className="comment-info flex">
                      <p className="comment-username">{commentData[comment].user}</p>
                      <p className="comment-time">{commentData[comment].date}</p>
                      </div>
                    </div>
                  </div>
              )
            })

          }

        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(Comments);
