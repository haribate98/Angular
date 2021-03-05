import { Injectable } from '@angular/core';
import { Knjiga } from '../model/knjiga';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import { UserStoreService } from './user-store.service';


@Injectable()
export class KnjigaService {
// , private userStore: UserStoreService
  constructor(private http: HttpClient) {}

  getKnjiga() : Observable<Knjiga[]> {
    return this.http.get<Knjiga[]>('/api/knjiga');
  }

  getJedanKnjiga(code: string): Observable<Knjiga> {
    return this.http.get<Knjiga>('/api/knjiga/' + code);
  }

  createKnjiga(knjiga: Knjiga): Observable<any> {
    return this.http.post('/api/knjiga', knjiga);
  }

  toggleOmiljene(knjiga: Knjiga): Observable<Knjiga> {
    return this.http.patch<Knjiga>('/api/knjiga/' + knjiga.code,
      {
        omiljen: !knjiga.omiljen
      });
  }
}
