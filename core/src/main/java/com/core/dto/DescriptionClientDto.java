package com.core.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class DescriptionClientDto {
    private Long id;
    private Double weight;
    private Double height;
    private String description;
}
