import {Component, OnDestroy, OnInit} from '@angular/core';
import CourseServiceClient from '../../services/CourseServiceClient';
import ModuleServiceClient from '../../services/ModuleServiceClient';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-module-list-component',
  templateUrl: './module-list-component.component.html',
  styleUrls: ['./module-list-component.component.css']
})
export class ModuleListComponentComponent implements OnInit, OnDestroy {

  isDataLoaded: boolean;
  modules: Array<any>;
  selectedModule: any;
  private courseId: any;

  constructor(private router: Router, private moduleService: ModuleServiceClient, private activatedRoute: ActivatedRoute) {
    this.isDataLoaded = false;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log('ngOnInit ModuleList');
      console.log('Params: ', params);
      this.courseId = params.courseId;
      this.moduleService.findModulesForCourse(this.courseId, resp => {
        this.modules = resp;
        this.isDataLoaded = true;
      });
    });
  }

  ngOnDestroy(): void {
  }

  selectModule(module: any): void {
    this.selectedModule = module;

    if (this.selectedModule === undefined) {
      alert('Module not selected');
    } else {
      this.router.navigate([`course/${this.courseId}/modules/${this.selectedModule._id}`]);
    }
  }
}
