package com.example.SpringMongo.Service;

import com.example.SpringMongo.Model.Student;
import com.example.SpringMongo.Repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServices {

    @Autowired
    private StudentRepo studentRepo;

    // Register or Update a student
    public Student saveOrUpdate(Student student) {
        return studentRepo.save(student);
    }

    // Retrieve a student by ID
    public Student getStudentById(String id) {
        return studentRepo.findById(id).orElse(null);
    }

    // Delete a student by ID
    public boolean deleteStudent(String id) {
        if (studentRepo.existsById(id)) {
            studentRepo.deleteById(id);
            return true;
        }
        return false;
    }
}
