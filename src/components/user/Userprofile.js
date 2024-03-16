import React from "react";
import profilePic from "./image.png";

const UserProfile = ({ user }) => {
  return (
    <div className="container">
      <h3>Your Profile</h3>
      <div className="card mb-3">
        <div className="img-container d-flex justify-content-center py-4">
          <div className="d-flex justify-content-center">
            <img
              src={profilePic}
              className="card-img-top profile-pic"
              alt="Profile Picture"
              style={{
                width: "60%",
                borderRadius: "100%",
                border: "2px solid black",
                boxShadow: "3px 3px 7px black",
              }}
            />
          </div>
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">Your Name :- {user.name}</h5>
          <h5 className="card-title">Your Email :- {user.email}</h5>
          <h5 className="card-title">Your Mobile Number :- {user.mobile}</h5>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
