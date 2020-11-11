import {CourseViewerComponentComponent} from './course-viewer-component/course-viewer-component.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'course/:courseId', component: CourseViewerComponentComponent},
  { path: 'course/:courseId/modules/:moduleId', component: CourseViewerComponentComponent},
  { path: 'course/:courseId/modules/:moduleId/lessons/:lessonId', component: CourseViewerComponentComponent}
];
export const routing = RouterModule.forRoot(appRoutes);
