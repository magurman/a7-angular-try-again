import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseTableComponentComponent } from './course-table-component/course-table-component.component';
import { ModuleListComponentComponent } from './module-list-component/module-list-component.component';
import { LessonTabsComponentComponent } from './lesson-tabs-component/lesson-tabs-component.component';
import { CourseViewerComponentComponent } from './course-viewer-component/course-viewer-component.component';
import CourseServiceClient from '../services/CourseServiceClient';
import ModuleServiceClient from '../services/ModuleServiceClient';
import LessonServiceClient from '../services/LessonServiceClient';
import {HttpClientModule} from '@angular/common/http';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponentComponent,
    ModuleListComponentComponent,
    LessonTabsComponentComponent,
    CourseViewerComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
