package com.exercise.demo.Repo;

import com.exercise.demo.Entity.WorkoutPlan;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkoutplanRepo extends MongoRepository<WorkoutPlan, String> {
}
