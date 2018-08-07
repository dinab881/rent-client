import {Injectable} from '@angular/core';
import {Property} from '../property.model';
import { Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PropertyService {

  constructor(private http: HttpClient) {
  }

  public getPropertyById(propertyId: string): Observable<any> {
  return this.http.get('/api/v1/properties/' + propertyId);

  }

  public getPropertyList(): Observable<any> {
    return this.http.get('/api/v1/properties');

  }

}
