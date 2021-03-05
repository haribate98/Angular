import { Component, OnInit } from '@angular/core';
import { KnjigaService } from 'src/app/services/knjiga.service';
import { Knjiga } from 'src/app/model/knjiga';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
//import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-knjiga-list',
  templateUrl: './knjiga-list.component.html',
  styleUrls: ['./knjiga-list.component.css']
})
export class KnjigaListComponent implements OnInit {
  public knjige$: Observable<Knjiga[]>;
  constructor(private knjigaSerice: KnjigaService, private authService: AuthService) { }

  ngOnInit() {
    this.fetchKnjiga();
  }
  fetchKnjiga() {
    this.knjige$ = this.knjigaSerice.getKnjiga();
  }
}
