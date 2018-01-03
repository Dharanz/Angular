import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class PostsService extends DataService {

  constructor(http: Http) {
    super('http://jsonplaceholder.typicode.com/posts', http);
   }
}
