package com.core.controllers;

import com.core.dto.CategoryDto;
import com.core.models.Category;
import com.core.services.CategorySevice;
import com.core.services.impl.CategoryServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/public/category")
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:3006","http://localhost:3000"})
public class CategoryController {
    private final CategoryServiceImpl categoryService;
    @GetMapping
    public List<CategoryDto> getAll(){
        List<CategoryDto> allCategories = categoryService.getAllCategories();
        return allCategories;
    }
    @GetMapping("/typeAppointmentsNames")
    public List<String> getAllTypeAppointmentsName(){
        List<String> typeAppointmentsNames=  categoryService.getAllTypeAppointmentsName();
        return typeAppointmentsNames;
    }
}
