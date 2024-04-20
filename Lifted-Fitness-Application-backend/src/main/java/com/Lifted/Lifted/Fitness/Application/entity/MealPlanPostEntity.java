package com.Lifted.Lifted.Fitness.Application.entity;

import org.springframework.data.annotation.Id;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

public class MealPlanPostEntity {
    @Id
    private String id;

    private String userId;

    private String originalUserId;

    private String content;

    private String image;

    private Instant createdAt;

    List<String> love = new ArrayList<>();

    List<String> share = new ArrayList<>();

    List<MealPlanCommentEntity> comment = new ArrayList<>();
}
