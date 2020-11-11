import axios from 'axios';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
class CourseServiceClient {
  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/magurman';
  }

  public findAllCourses(cb): void {
    console.log('Course Service: Find All Courses');
    this.http.get(this.url + '/courses').subscribe(cb);
  }

  public findCourseById(cid: string, cb): void {
    this.http.get(this.url + '/courses/' + cid).subscribe(cb);
  }
}

export default CourseServiceClient;
