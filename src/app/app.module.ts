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
import {QuestionsServiceClient} from "../services/question.service.client";
import {QuizzesServiceClient} from "../services/quiz.service.client";
import { QuizzesComponent } from './quizzes/quizzes.component';
import { QuizComponent } from './quiz/quiz.component';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponentComponent,
    ModuleListComponentComponent,
    LessonTabsComponentComponent,
    CourseViewerComponentComponent,
    QuizzesComponent,
    QuizComponent,
    TrueFalseQuestionComponent,
    MultipleChoiceQuestionComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        routing,
        HttpClientModule,
        FormsModule
    ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    QuestionsServiceClient,
    QuizzesServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
