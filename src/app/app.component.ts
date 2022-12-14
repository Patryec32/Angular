import { Component } from '@angular/core';
import {Empleado} from './empleado.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Lista de empleados';

  empleados:Empleado[]=[
    new Empleado("Juan","Diaz","Presidente",7500),
    new Empleado("Ana","martin","Directora",7500),
    new Empleado("Maria","Fdez","Jefa de seccion",3500),
    new Empleado("Laura","Lopez","Administrativa",1500),
  ];

agregarEmpleado(){
  let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
  this.empleados.push(miEmpleado);
}

cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;
}
