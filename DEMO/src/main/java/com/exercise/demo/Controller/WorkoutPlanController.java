package com.exercise.demo.Controller;

import com.exercise.demo.Entity.WorkoutPlan;
import com.exercise.demo.Service.WorkoutPlanServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/workoutplan")
public class WorkoutPlanController {

    @Autowired
    private WorkoutPlanServices workoutPlanServices;

    @PostMapping(value = "/")
    private String saveWorkoutPlan(@RequestBody WorkoutPlan workoutPlan) {
        workoutPlanServices.saveOrUpdate(workoutPlan);
        return workoutPlan.getId();
    }

    @GetMapping(value = "/getall")
    public Iterable<WorkoutPlan> getWorkoutPlans() {
        return workoutPlanServices.listAll();
    }

    @PutMapping(value = "{id}")
    private WorkoutPlan update(@RequestBody WorkoutPlan workoutPlan, @PathVariable(name = "id") String id) {
        workoutPlan.setId(id);
        workoutPlanServices.saveOrUpdate(workoutPlan);
        return workoutPlan;
    }

    @DeleteMapping("{id}")
    private void deleteWorkoutPlan(@PathVariable("id") String id) {
        workoutPlanServices.deleteWorkoutPlan(id);
    }

    @RequestMapping("{id}")
    private WorkoutPlan getWorkoutPlan(@PathVariable(name = "id") String id) {
        return workoutPlanServices.getWorkoutPlanById(id);
    }

}
