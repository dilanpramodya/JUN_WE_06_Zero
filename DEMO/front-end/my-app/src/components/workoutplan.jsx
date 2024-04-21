import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Chart from "chart.js/auto";

const API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:8080/workoutplan/";

function Workoutplan() {
  const [workoutPlans, setWorkoutPlans] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchWorkoutPlans();
  }, []);

  const fetchWorkoutPlans = async () => {
    try {
      const response = await axios.get(`${API_URL}/getall`);
      setWorkoutPlans(response.data);
    } catch (error) {
      setError("Error fetching details");
    }
  };

  const handleNavigateToAddWorkoutPlan = () => {
    navigate("/post");
  };

  const handleEditWorkoutPlan = (workoutPlanId) => {
    navigate(`/editpost/${workoutPlanId}`);
  };

  const handleDeleteWorkoutPlan = async (workoutPlanId) => {
    try {
      await axios.delete(`${API_URL}/delete/${workoutPlanId}`);
      alert("Successfully Deleted");
      fetchWorkoutPlans(); // Refetch data after deletion
    } catch (error) {
      setError("Error deleting workout plan details");
    }
  };

  return (
    <center>
      <div>
        <br />
        <h1>Workout Plan</h1>
        <br />
        <button
          className="btn btn-dark mt-4"
          onClick={handleNavigateToAddWorkoutPlan}
        >
          Create Workout Plan
        </button>
        <div>
          <table className="table table-striped mt-4">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Description</th>
                <th scope="col">Status</th>
                <th scope="col">No Of Reps</th>
                <th scope="col">Ran Distance</th>
                <th scope="col">Weight Lifted</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {workoutPlans.map((workoutPlan) => (
                <tr key={workoutPlan._id}>
                  <td>{workoutPlan.studentname}</td>
                  <td>{workoutPlan.studentaddress}</td>
                  <td>{workoutPlan.status}</td>
                  <td>{workoutPlan.noofpushups}</td>
                  <td>{workoutPlan.randistance} Km</td>
                  <td>{workoutPlan.weightlifted} Kg</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary mr-2"
                      onClick={() => handleEditWorkoutPlan(workoutPlan._id)}
                    >
                      Edit Plan
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDeleteWorkoutPlan(workoutPlan._id)}
                    >
                      Delete Plan
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
        <br />
        <br />
      </div>
    </center>
  );
}

export default Workoutplan;
