import { BadInputError } from './../common/Bad-input';
import { AppError } from './../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {
    
  constructor(private url: string, private http: Http) { }

  get() {
    return this.http.get(this.url)
    .catch(this.handleError);
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
    .catch(this.handleError);
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead:true}))
    .catch(this.handleError);
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .catch(this.handleError);
  }
  
    private handleError(error: Response) {
      if(error.status == 400)
        return Observable.throw(new BadInputError(error.json()));

      if(error.status == 404)
        return Observable.throw(new NotFoundError());
      return Observable.throw(new AppError(error));
    }
}
