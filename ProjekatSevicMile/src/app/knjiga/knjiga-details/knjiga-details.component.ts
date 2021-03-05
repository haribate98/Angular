import { Component, OnInit } from '@angular/core';
import { KnjigaService } from '../../services/knjiga.service';
import { ActivatedRoute } from '@angular/router';
import { Knjiga } from '../../model/knjiga';

@Component({
  selector: 'app-knjiga-details',
  templateUrl: './knjiga-details.component.html',
  styleUrls: ['./knjiga-details.component.css']
})
export class KnjigaDetailsComponent implements OnInit {

  public knjiga: Knjiga;
  constructor(private knjigaService: KnjigaService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const knjigaCode = this.route.snapshot.paramMap.get('code');
    this.knjigaService.getJedanKnjiga(knjigaCode).subscribe(knjiga => this.knjiga = knjiga);
  }

}
