package com.exercise.demo.Service;

import com.exercise.demo.Entity.WorkoutPlan;
import com.exercise.demo.Repo.WorkoutplanRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WorkoutPlanServices {

    @Autowired
    private WorkoutplanRepo repo;

    public void saveOrUpdate(WorkoutPlan workoutPlan) {
        repo.save(workoutPlan);
    }

    public Iterable<WorkoutPlan> listAll() {
        return repo.findAll();
    }

    public void deleteWorkoutPlan(String id) {
        repo.deleteById(id);
    }

    public WorkoutPlan getWorkoutPlanById(String id) {
        return repo.findById(id).orElse(null);
    }
}
