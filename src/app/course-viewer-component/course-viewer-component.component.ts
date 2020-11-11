import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import CourseServiceClient from '../../services/CourseServiceClient';

@Component({
  selector: 'app-course-viewer-component',
  templateUrl: './course-viewer-component.component.html',
  styleUrls: ['./course-viewer-component.component.css']
})
export class CourseViewerComponentComponent implements OnInit, OnDestroy {

  isDataAvail: boolean;
  private courseId: string;
  course: any;

  constructor(private courseService: CourseServiceClient,
              private activatedRoute: ActivatedRoute) {
    this.isDataAvail = false;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log('ngOnInit CourseViewer');
      console.log('Params: ', params);
      this.courseId = params.courseId;
      this.courseService.findCourseById(params.courseId, (resp) => {
        this.isDataAvail = true;
        this.course = resp;
      });
    });
  }

  ngOnDestroy(): void {
  }
}
