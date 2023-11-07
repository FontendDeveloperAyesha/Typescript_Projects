#!usr/bin/env node 
import inquirer from 'inquirer';
import chalk from "chalk";
import { Student } from './student_mangement_system/student.js';
import { Course } from './student_mangement_system/course.js';

// Uscase 
const course1 = new Course('Math', 500);
const course2 = new Course('Science', 600);
course2.getPrice()

const student1 = new Student('Ali');
student1.enroll(course1.getName());
student1.enroll(course2.getName());
student1.showStatus();
const tuitionAmount = 400;
student1.payTuition(tuitionAmount);
student1.showStatus();

