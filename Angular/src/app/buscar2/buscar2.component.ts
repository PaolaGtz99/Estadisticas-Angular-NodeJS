import { InformacionService } from './../service/informacion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar2',
  templateUrl: './buscar2.component.html',
  styleUrls: ['./buscar2.component.css']
})
export class Buscar2Component implements OnInit {
  claveBusc: string;
  mensaje = 'No se encontraron Datos';
  datos:any;
  nombre = '';
  nombres: string[] = ['', 'AGUASCALIENTES', 'BAJA CALIFORNIA', 'BAJA CALIFORNIA SUR',
'CAMPECHE','CHIAPAS','CHIHUAHUA', 'COAHUILA', 'COLIMA','DURANGO','ED. MEXICO','GUANAJUATO','GUERRERO',
'HIDALGO','JALISCO','MICHOACAN','MORELOS','NNAYARIT','NUEVO LEON','OAXACA','PUEBLA','QUERETARO',
'QUINTANA ROO','SAN LUIS','SINALOA','SONORA','TABASCO','TAMAULIPAS','TLAXCALA','VERACRUZ','YUCATAN','ZACATECAS'];

  constructor(private informacionService: InformacionService) { }

  ngOnInit(): void {
    
  }

  buscar(){
    this.nombre = '';
    let urlApi = `http://localhost:3000/api2/${this.claveBusc}`;
    this.informacionService.getJson(urlApi).subscribe( (data) => {
      this.datos = data['datos'],
      console.log(this.datos);
    });
    
    if(this.datos != null){
      this.nombre = this.nombres[Number( this.claveBusc )];
    }
    
  }

}
