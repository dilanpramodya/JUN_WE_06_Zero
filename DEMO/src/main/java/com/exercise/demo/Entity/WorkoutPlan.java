package com.exercise.demo.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "fitness")
public class WorkoutPlan {


    @Id
    private String id;
    private String planName;
    private String duration;
    private String intensity;
    private String description;

    public WorkoutPlan(String id, String planName, String duration, String intensity, String description) {
        this.id = id;
        this.planName = planName;
        this.duration = duration;
        this.intensity = intensity;
        this.description = description;
    }

    public WorkoutPlan() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPlanName() {
        return planName;
    }

    public void setPlanName(String planName) {
        this.planName = planName;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getIntensity() {
        return intensity;
    }

    public void setIntensity(String intensity) {
        this.intensity = intensity;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "WorkoutPlan{" +
                "id='" + id + '\'' +
                ", planName='" + planName + '\'' +
                ", duration='" + duration + '\'' +
                ", intensity='" + intensity + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
