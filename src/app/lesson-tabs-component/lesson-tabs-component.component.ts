import {Component, OnDestroy, OnInit} from '@angular/core';
import LessonServiceClient from '../../services/LessonServiceClient';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-lesson-tabs-component',
  templateUrl: './lesson-tabs-component.component.html',
  styleUrls: ['./lesson-tabs-component.component.css']
})
export class LessonTabsComponentComponent implements OnInit, OnDestroy {

  lessons: Array<any>;
  selectedLesson: any;
  private moduleId: string;
  private courseId: string;
  isDataLoaded: boolean;

  constructor(private router: Router, private lessonService: LessonServiceClient, private activatedRoute: ActivatedRoute) {
    this.isDataLoaded = false;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.courseId = params.courseId;
      this.moduleId = params.moduleId;
      this.lessonService.findLessonsForModule(this.moduleId, (resp) => {this.lessons = resp; this.isDataLoaded = true; });
    });
  }

  ngOnDestroy(): void {
  }

  selectLesson(lesson: any): void {
    this.selectedLesson = lesson;

    if (this.selectedLesson === undefined) {
      alert('Lesson not selected');
    } else {
      this.router.navigate([`course/${this.courseId}/modules/${this.moduleId}/lessons/${this.selectedLesson._id}`]);
    }
  }
}
