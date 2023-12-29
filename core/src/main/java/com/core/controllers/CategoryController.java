package com.core.controllers;

import com.core.models.Category;
import com.core.services.CategorySevice;
import com.core.services.impl.CategoryServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/category")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000")
public class CategoryController {
    private final CategoryServiceImpl categoryService;
    @GetMapping
    public List<Category> getAll(){
        return categoryService.getAllCategories();
    }
}
