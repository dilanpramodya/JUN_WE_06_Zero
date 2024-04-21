import axios from "axios";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:8080/workoutplan/";

function AddWorkoutplan() {
  const [workoutPlanName, setWorkoutPlanName] = useState("");
  const [workoutPlanAddress, setWorkoutPlanAddress] = useState("");
  const [status, setStatus] = useState("");
  const [noOfReps, setNoOfReps] = useState("");
  const [ranDistance, setRanDistance] = useState("");
  const [weightLifted, setWeightLifted] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`${API_URL}/`, {
        workoutPlanName,
        workoutPlanAddress,
        status,
        noOfReps,
        ranDistance,
        weightLifted,
      });
      alert("Workoutplan Added Successfully!");
      setWorkoutPlanName("");
      setWorkoutPlanAddress("");
      setStatus("");
      setNoOfReps("");
      setRanDistance("");
      setWeightLifted("");
      navigate("/");
    } catch (error) {
      setError("Error saving details");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>Add Workout Details</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="workoutPlanName">Date</label>
              <input
                type="date"
                className="form-control"
                id="workoutPlanName"
                value={workoutPlanName}
                onChange={(event) => setWorkoutPlanName(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="workoutPlanAddress">Caption</label>
              <input
                type="text"
                className="form-control"
                id="workoutPlanAddress"
                value={workoutPlanAddress}
                onChange={(event) => setWorkoutPlanAddress(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select
                className="form-control"
                id="status"
                value={status}
                onChange={(event) => setStatus(event.target.value)}
                required
              >
                <option value="">Select Type</option>
                <option value="Type 01">Type 01</option>
                <option value="Type 02">Type 02</option>
                <option value="Type 03">Type 03</option>
                <option value="Type 04">Type 04</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="noOfReps">No Of Reps</label>
              <input
                type="number"
                className="form-control"
                id="noOfReps"
                value={noOfReps}
                onChange={(event) => setNoOfReps(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="ranDistance">Ran Distance</label>
              <input
                type="number"
                className="form-control"
                id="ranDistance"
                value={ranDistance}
                onChange={(event) => setRanDistance(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="weightLifted">Weight Lifted</label>
              <input
                type="number"
                className="form-control"
                id="weightLifted"
                value={weightLifted}
                onChange={(event) => setWeightLifted(event.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              Add Workout
            </button>
          </form>
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </div>
    </div>
  );
}

export default AddWorkoutplan;
