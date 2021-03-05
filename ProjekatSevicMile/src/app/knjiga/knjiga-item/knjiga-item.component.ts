import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Knjiga } from 'src/app/model/knjiga';
import { KnjigaService } from 'src/app/services/knjiga.service';

@Component({
  selector: 'app-knjiga-item',
  templateUrl: './knjiga-item.component.html',
  styleUrls: ['./knjiga-item.component.css']
})
export class KnjigaItemComponent{

  @Input() public knjiga: Knjiga;

  constructor(private knjigaService: KnjigaService) {}

  onToggleOmiljene(event) {
    this.knjigaService.toggleOmiljene(this.knjiga)
      .subscribe((knjiga) => this.knjiga.omiljen = !this.knjiga.omiljen);
  }

}
