import {CourseViewerComponentComponent} from './course-viewer-component/course-viewer-component.component';
import {RouterModule, Routes} from '@angular/router';
import {QuizzesComponent} from './quizzes/quizzes.component';
import {QuizComponent} from "./quiz/quiz.component";

const appRoutes: Routes = [
  { path: 'course/:courseId', component: CourseViewerComponentComponent},
  { path: 'course/:courseId/modules/:moduleId', component: CourseViewerComponentComponent},
  { path: 'course/:courseId/modules/:moduleId/lessons/:lessonId', component: CourseViewerComponentComponent},
  { path: 'courses/:courseId/quizzes', component: QuizzesComponent},
  { path: 'courses/:courseId/quizzes/:quizId', component: QuizComponent}
];
export const routing = RouterModule.forRoot(appRoutes);
