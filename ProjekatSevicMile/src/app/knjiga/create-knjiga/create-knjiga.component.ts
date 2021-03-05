import { Component, OnInit } from '@angular/core';
import { Knjiga } from 'src/app/model/knjiga';
import { KnjigaService } from 'src/app/services/knjiga.service';
import { importExpr } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-create-knjiga',
  templateUrl: './create-knjiga.component.html',
  styleUrls: ['./create-knjiga.component.css']
})
export class CreateKnjigaComponent{

  public knjiga: Knjiga;
  public confirmed = false;
  public message = null;
  constructor(private knjigaService: KnjigaService) {
    this.initialize();
  }

  initialize(){
    this.knjiga = {
      ime:"",
      code:"",
      opis:"",
      cena:0,
      omiljen:false
    };
  }

  setKnjigaCenu(cena) {
    this.knjiga.cena = cena;
  }

  createKnjiga(knjigaForm) {
    if (knjigaForm.valid) {
      this.knjigaService.createKnjiga(this.knjiga)
          .subscribe((result: any) => {
            this.initialize();
          }, (err) => {
            this.message = err.error.msg;
          });
    } else {
      console.error('Knjiga nije u validnom stanju');
    }
  }
}
