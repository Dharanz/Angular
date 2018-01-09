import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class DatabaseService extends DataService {

  constructor(http: Http) {
    super('', http);
   }
}
