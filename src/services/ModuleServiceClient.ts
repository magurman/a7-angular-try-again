import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
class ModuleServiceClient {
  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/magurman';
  }

  // tslint:disable-next-line:typedef
  public findModulesForCourse(cid: string, cb) {
    return this.http.get(this.url + '/courses/' + cid + '/modules').subscribe(cb);
  }
}
export default ModuleServiceClient;
