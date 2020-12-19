import { InformacionService } from './../service/informacion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar1',
  templateUrl: './buscar1.component.html',
  styleUrls: ['./buscar1.component.css']
})
export class Buscar1Component implements OnInit {
  cd: string;
  datos: any;
  ciudad: any;
  mensaje = '';
  encontro = 'no';

  constructor(private informacionService: InformacionService) {
    let urlApi = `http://localhost:3000/api`;
    
    this.informacionService.getJson(urlApi).subscribe( (data) => {
      this.datos = data['datos']
    })
   }

   buscar() {  
    this.ciudad == null;
    this.encontro = 'no';
     let urlApi = `http://localhost:3000/api/${this.cd}`;
    this.informacionService.getJson(urlApi).subscribe( (data) => {
      this.ciudad = data['datos'];
    });
    
     if (this.ciudad == null){
      this.mensaje = 'No se encontro ciudad';
      this.encontro = 'no';
    }
    else{
      this.mensaje = '';
      this.encontro = 'si';
    }
   }

  ngOnInit(): void {
  }

}
