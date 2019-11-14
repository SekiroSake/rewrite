import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Matter } from '../Model/Matter';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorHandlerService, HandleError } from './http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class MatterCreationService {

  url  = 'http://localhost:58674/api/matter';
  private handleError: HandleError;

  constructor(private httpClient: HttpClient, httpErrorHandler: HttpErrorHandlerService
    ) {
      this.handleError = httpErrorHandler.createHandleError('MatterCreationService');
    }
  public getCase() {
    return this.httpClient.get(this.url + '/1');
  }

  public createMatter(matter: Matter): Observable<Matter>{
  //public createMatter(matter){
    return this.httpClient.post<Matter>(this.url, matter, httpOptions)
      .pipe(
        catchError(this.handleError('createMatter', matter))
      );
  }
}
