import { Component, OnInit } from '@angular/core';
import CourseServiceClient from '../../services/CourseServiceClient';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-table-component',
  templateUrl: './course-table-component.component.html',
  styleUrls: ['./course-table-component.component.css']
})

export class CourseTableComponentComponent implements OnInit {

  courses: Array<any>;
  selectedCourse: any;

  constructor(private router: Router, private courseService: CourseServiceClient) {
  }

  ngOnInit(): void {
    console.log('ngOnInit for CourseTableComponent');
    this.courseService.findAllCourses(resp => this.courses = resp);
  }

  courseViewer(course: any): void {
    this.selectedCourse = course;
    console.log(course);

    if (this.selectedCourse === undefined) {
      alert('Course not selected');
    } else {
      this.router.navigate([`course/`, this.selectedCourse._id]);
    }
  }
}
