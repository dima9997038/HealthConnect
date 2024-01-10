package com.core.services;

import com.core.dto.CategoryDto;
import com.core.models.Category;

import java.util.List;

public interface CategorySevice {
    List<CategoryDto> getAllCategories();

    List<String> getAllTypeAppointmentsName();
}
