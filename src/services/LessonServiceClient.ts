import axios from 'axios';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
class LessonServiceClient {
  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/magurman';
  }

  // tslint:disable-next-line:typedef
  public findLessonsForModule(mid: string, cb) {
    return this.http.get(this.url + '/modules/' + mid + '/lessons').subscribe(cb);
  }
}
export default LessonServiceClient;
